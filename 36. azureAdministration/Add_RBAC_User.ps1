Set-Location C:\
Clear-Host

Install-Module -Name Az -AllowClobber -Scope AllUsers

# https://docs.microsoft.com/en-us/dotnet/framework/install/on-windows-10

Import-Module Az

# Connect to Azure with a browser sign in token
Connect-AzAccount

Get-AzRoleDefinition | FT Name, Description

Get-AzRoleDefinition "Owner"

Get-AzRoleDefinition "Owner" | ConvertTo-Json

Get-AzRoleDefinition "Contributor" | FL Actions, NotActions

(Get-AzRoleDefinition "Virtual Machine Contributor").Actions

Get-AzRoleAssignment

Get-AzRoleAssignment -SignInName tomeier@wechsler.onmicrosoft.com | FL DisplayName, RoleDefinitionName, Scope

Get-AzRoleAssignment -SignInName tomeier@wechsler.onmicrosoft.com -ExpandPrincipalGroups | FL DisplayName, RoleDefinitionName, Scope

Get-AzRoleAssignment -ResourceGroupName tw-web-rg | FL DisplayName, RoleDefinitionName, Scope

Get-AzSubscription

Get-AzRoleAssignment -Scope /subscriptions/<Ihre ID>

Get-AzRoleAssignment -IncludeClassicAdministrators

Get-AzADUser -StartsWith 'tom'

New-AzRoleAssignment -SignInName tomeier@wechsler.onmicrosoft.com -RoleDefinitionName "Virtual Machine Contributor" -ResourceGroupName tw-web-rg

Get-AzRoleAssignment -SignInName tomeier@wechsler.onmicrosoft.com | FL DisplayName, RoleDefinitionName, Scope

Remove-AzRoleAssignment -SignInName tomeier@wechsler.onmicrosoft.com -RoleDefinitionName "Virtual Machine Contributor" -ResourceGroupName tw-web-rg