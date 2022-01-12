<#
 .Synopsis
 Runs a series of simulated operational tasks.
 .DESCRIPTION
 This script creates a folder (if it doesn't exist already) then creates a number
 of randomly named files in that folder.
#>

$global:config = @{
    "FolderName" = "IAmSap"
    "FileCount" = 10
}

Function Start-BusyWork
{
    Remove-Folder $global:config["FolderName"]
    New-Folder $global:config["FolderName"]
    For($i=0;$i -lt $global:config["FileCount"];$i++)
    {
        New-File $global:config["FolderName"]
    }
}

Function Remove-Folder
{
    Param(
        [Parameter(Mandatory=$true)]
        [string]$folderName
    )

    Remove-Item -Path $PSScriptRoot\$folderName -ErrorAction SilentlyContinue
    Log "Removed $PSScriptRoot\$folderName"
}

Function New-Folder
{
    Param(
        [Parameter(Mandatory=$true)]
        [string]$folderName
    )

    New-Item -Path $PSScriptRoot -Name $folderName -ItemType "directory" -ErrorAction SilentlyContinue
    Log "Created $PSScriptRoot\$folderName"
}

Function New-File
{
    Param(
        [Parameter(Mandatory=$true)]
        [string]$folderName
    )

    $fileName = "$(New-Guid).txt"

    New-Item -Path $PSScriptRoot\$folderName -Name $fileName -ItemType "file" -ErrorAction SilentlyContinue
    Log "Created $PSScriptRoot\$folderName\$fileName"
    Start-Sleep -Milliseconds (Get-Random -Maximum 1000)
}

Function Log 
{
    Param(
        [Parameter(Mandatory=$true)]
        [string]$msg
    )    
    Write-Host $msg
}

Start-BusyWork