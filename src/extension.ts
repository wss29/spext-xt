// The module 'vscode' contains the VS Code extensibility API
// Import the module and referencedd it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called whesssn your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "spext-xt" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('spext-xt.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from spext-xt!');
	});

	const excutePath: string = vscode.workspace.getConfiguration('SpecChecker').get('path_to_executable') as string
	if (excutePath.trim().length === 0) {
		vscode.workspace.getConfiguration("SpecChecker").update('path_to_executable', `${vscode.extensions.getExtension('spext1.spext-xt-plugin')?.extensionPath}\\bin\\SpecCheckerLite`, vscode.ConfigurationTarget.Global)
	}

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
