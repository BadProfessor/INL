#Create a file share

#Variables
$location = "canadacentral"
$resourceGroup = "AZ104Demo_ps"
$storageAccountName = "az104fsdemo"
$FileSharename = "hrfiles"
$Path = "recruitment"
$Sharename = "hrfiles"

# Retrieve the context
$Key = (Get-AzStorageAccountKey -ResourceGroupName $resourcegroup -StorageAccountName $storageAccountName).Value[0]
$ctx = New-AzStorageContext -StorageAccountName $storageAccountName -StorageAccountKey $Key

#Create a file share
New-AzStorageShare -Name $FileSharename -Context $ctx

#View file shares
Get-AzStorageShare -Context $ctx

#Create a new directory 
New-AzStorageDirectory -ShareName $FileSharename -Path $Path -Context $ctx 

#Upload a file to the Azure file Share 
Set-AzStorageFileContent -ShareName $Sharename -Source "C:\Users\Sharon Bennett\Desktop\AZ-104\Scripts\doc2.txt" -Path $path -Context $ctx

#View files
Get-AzStorageFile -ShareName $Sharename -path $Path -Context $ctx | Get-AzStorageFile

#Download a file to the local system 
Get-AzStorageFileContent -ShareName $Sharename -Path "recruitment\doc2.txt" -Destination "C:\Users\Sharon Bennett\Desktop\AZ-104\Scripts\Doc3.txt" -Context $ctx

#Delete the file share
Remove-AzStorageShare -Name $FileSharename -Context $ctx















#object containting references to the storage account. 