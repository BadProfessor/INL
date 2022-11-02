Set-Location C:\
Clear-Host

Install-Module -Name Az -AllowClobber -Scope AllUsers

# https://docs.microsoft.com/en-us/dotnet/framework/install/on-windows-10

Import-Module Az

# Connect to Azure with a browser sign in token
Connect-AzAccount

(Get-AzResourceGroup -Name tw-web-rg).Tags

Get-AzTag

(Get-AzResource -ResourceName tw-win01 -ResourceGroupName tw-web-rg).Tags

Set-AzResourceGroup -Name tw-web-rg -Tag @{ costcenter="1987"; ManagedBy="Bob" }

$tags = (Get-AzResourceGroup -Name tw-web-rg).Tags
$tags.Add("Status", "Approved")
Set-AzResourceGroup -Tag $tags -Name tw-web-rg

$r = Get-AzResource -ResourceName tw-win01 -ResourceGroupName tw-web-rg
Set-AzResource -Tag @{ Dept="IT"; Environment="Test" } -ResourceId $r.ResourceId -Force

$r = Get-AzResource -ResourceName tw-win01 -ResourceGroupName tw-web-rg
$r.Tags.Add("Status", "Approved")
Set-AzResource -Tag $r.Tags -ResourceId $r.ResourceId -Force