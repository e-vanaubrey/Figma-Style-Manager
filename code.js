// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
let results = [];
let colors = [];
for (let h = 0; h < figma.getLocalPaintStyles().length; h++) {
    //colors.push(figma.getLocalPaintStyles()[h].id);
    colors.push(figma.getLocalPaintStyles()[h].paints[0]);
}
//console.log(results);
//console.log(colors);
//figma.ui.postMessage(results);
//figma.ui.postMessage(results);
figma.ui.postMessage(colors);
//figma.ui.postMessage(results);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
//figma.ui.onmessage = msg => {
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
//figma.closePlugin();
//};
figma.ui.onmessage = (message) => {
    console.log("got this from the UI", message);
    //figma.getLocalPaintStyles() = message.slice();
};
