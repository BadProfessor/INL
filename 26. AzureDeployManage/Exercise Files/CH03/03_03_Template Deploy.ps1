#Upload and deploy a template

New-AzResourceGroup -Name NewTemplateDeployment -Location eastus

New-AzResourceGroupDeployment -ResourceGroupName 'NewTemplateDeployment' `
-TemplateFile 'C:\Users\Sharon Bennett\Desktop\AZ-104\Template\template.json' `
-TemplateParameterFile 'C:\Users\Sharon Bennett\Desktop\AZ-104\Template\parameters.json'