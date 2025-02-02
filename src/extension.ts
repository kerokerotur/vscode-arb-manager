import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "arb-manager" is now active!');

	const disposable = vscode.commands.registerCommand('arb-manager.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from arb manager!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
