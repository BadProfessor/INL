Clear-Host
Set-Location c:\

#Log into Azure
Connect-AzureAD

#Get all the groups in Azure AD Tenant
Get-AzureADGroup

#Get the Information Technology Group
$group = Get-AzureADGroup -SearchString "Information Technology"

#Get all members and the owner
Get-AzureADGroupMember -ObjectId $group.ObjectId

Get-AzureADGroupOwner -ObjectId $group.ObjectId

#Create a new group
$group = @{
    DisplayName = "Tim Group"
    MailEnabled = $false
    MailNickName = "TimGroup"
    SecurityEnabled = $true
}

$newGroup = New-AzureADGroup @group

#Update the group description
Set-AzureADGroup -ObjectId $newGroup.ObjectId -Description "Group for Tim to use."

#Set Fred as the owner
$fred = Get-AzureADUser -Filter "DisplayName eq 'Fred Prefect'"

Add-AzureADGroupOwner -ObjectId $newGroup.ObjectId -RefObjectId $fred.ObjectId

#Add users to the group
$users = Get-AzureADUser -Filter "State eq 'SO'"

foreach($user in $users){
    Add-AzureADGroupMember -ObjectId $newGroup.ObjectId -RefObjectId $user.ObjectId
}

$group = Get-AzureADGroup -SearchString "Tim Group"

#Get all members and the owner
Get-AzureADGroupMember -ObjectId $group.ObjectId

Get-AzureADGroupOwner -ObjectId $group.ObjectId