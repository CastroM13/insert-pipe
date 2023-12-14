"use strict";
exports.__esModule = true;
exports.deactivate = exports.activate = void 0;
var vscode = require("vscode");
function activate(context) {
    var disposable = vscode.commands.registerCommand('extension.insertPipe', function () {
        var editor = vscode.window.activeTextEditor;
        if (editor) {
            editor.edit(function (editBuilder) {
                editBuilder.insert(editor.selection.start, '|');
            });
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
