const {app, BrowserWindow} = require('electron')
/**
 * function used to create a window with electron module 
 */
function createWindow(){
    const win = new BrowserWindow({
        width: 400,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('./views/index.html');
}

app.whenReady().then(createWindow);