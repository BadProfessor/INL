$keyString = "<< your primary key id >>"
$secretString = "<< your primary key secret >>"
$hostString = "<< your host minus https >>"
$dateString = (Get-Date).ToUniversalTime().ToString("R")
$pathAndQuery = "/kv?label=Production"
$restURL = "https://$hostString$pathAndQuery"

Function Get-AuthHashtable{
   # Initialize the cryptography algorithms
    $sha256 = [Security.Cryptography.HashAlgorithm]::Create("SHA256")
    $hmacsha256 = New-Object System.Security.Cryptography.HMACSHA256
    $hmacsha256.Key = [Convert]::FromBase64String($secretString)

   # Encrypt and base64 encode content
    $contentBytes = [System.Byte[]]::CreateInstance([System.Byte], 0)
    $contentHash = [Convert]::ToBase64String($sha256.ComputeHash($contentBytes))

   # Sign header
   $stringToSign = "GET`n$pathAndQuery`n$dateString;$hostString;$contentHash"
   $stringToSignBytes = [System.Text.Encoding]::UTF8.GetBytes($stringToSign)
   $signatureBase64 = [Convert]::ToBase64String($hmacsha256.ComputeHash($stringToSignBytes))

   # return the hashtable
   return @{
       Authorization = "HMAC-SHA256 Credential=$keyString&SignedHeaders=Date;host;x-ms-content-sha256&Signature=$signatureBase64"        
       ContentHash = $contentHash
   }
}

$authHash = Get-AuthHashtable

$requestHeader = New-Object "System.Collections.Generic.Dictionary[[string],[string]]"
$requestHeader.Add("Authorization", $authHash["Authorization"])
$requestHeader.Add("Date", $dateString)
$requestHeader.Add("Host", $hostString)
$requestHeader.Add("x-ms-content-sha256", $authHash["ContentHash"])

$items = (Invoke-RestMethod -Uri $restURL -Method Get -Headers $requestHeader)

foreach($obj in $items.items)
{
    Write-Host "$($obj.key) = $($obj.value)"
}

Write-Host "Done!"