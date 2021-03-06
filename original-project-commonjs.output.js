import * as commonjsHelpers from ' commonjsHelpers.js';
import 'vscode';
import './commands';
import './inlay_hints';
import './status_display';
import './ctx';
import './highlighting';
import vscode from ' vscode?commonjs-proxy';
import commands from ' ./commands?commonjs-proxy';
import inlay_hints_1 from ' ./inlay_hints?commonjs-proxy';
import status_display_1 from ' ./status_display?commonjs-proxy';
import ctx_1 from ' ./ctx?commonjs-proxy';
import highlighting_1 from ' ./highlighting?commonjs-proxy';

var main = commonjsHelpers.createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });






let ctx;
async function activate(context) {
    ctx = new ctx_1.Ctx(context);
    // Commands which invokes manually via command palette, shortcut, etc.
    ctx.registerCommand('analyzerStatus', commands.analyzerStatus);
    ctx.registerCommand('collectGarbage', commands.collectGarbage);
    ctx.registerCommand('matchingBrace', commands.matchingBrace);
    ctx.registerCommand('joinLines', commands.joinLines);
    ctx.registerCommand('parentModule', commands.parentModule);
    ctx.registerCommand('syntaxTree', commands.syntaxTree);
    ctx.registerCommand('expandMacro', commands.expandMacro);
    ctx.registerCommand('run', commands.run);
    ctx.registerCommand('reload', commands.reload);
    ctx.registerCommand('onEnter', commands.onEnter);
    // Internal commands which are invoked by the server.
    ctx.registerCommand('runSingle', commands.runSingle);
    ctx.registerCommand('showReferences', commands.showReferences);
    ctx.registerCommand('applySourceChange', commands.applySourceChange);
    ctx.registerCommand('selectAndApplySourceChange', commands.selectAndApplySourceChange);
    status_display_1.activateStatusDisplay(ctx);
    highlighting_1.activateHighlighting(ctx);
    // Note: we try to start the server before we activate type hints so that it
    // registers its `onDidChangeDocument` handler before us.
    //
    // This a horribly, horribly wrong way to deal with this problem.
    try {
        await ctx.restartServer();
    }
    catch (e) {
        vscode.window.showErrorMessage(e.message);
    }
    inlay_hints_1.activateInlayHints(ctx);
}
exports.activate = activate;
async function deactivate() {
    var _a, _b;
    await ((_b = (_a = ctx) === null || _a === void 0 ? void 0 : _a.client) === null || _b === void 0 ? void 0 : _b.stop());
}
exports.deactivate = deactivate;
exports.default = 42;
//# sourceMappingURL=main.js.map
});

export default commonjsHelpers.unwrapExports(main); // COMMENT: What the heck is this ??????
var main_1 = main.activate;
export { main_1 as activate };
var main_2 = main.deactivate;
export { main_2 as deactivate };
