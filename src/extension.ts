// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { DockerExtensionApi } from '@microsoft/vscode-docker-registries';
import * as vscode from 'vscode';
import { GitLabRegistryDataProvider } from './registry/GitLabRegistryDataProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const dockerExtensionAPI = vscode.extensions.getExtension('ms-azuretools.vscode-docker')?.exports as DockerExtensionApi;
	const gitLabRegistryDataProvider = new GitLabRegistryDataProvider(context);
	const disposable = dockerExtensionAPI.registerRegistryDataProvider('vscode-gitlab-registries', gitLabRegistryDataProvider);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
