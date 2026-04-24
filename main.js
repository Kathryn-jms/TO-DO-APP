const { app, BrowserWindow } = require('electron');
const path = require('path');

app.disableHardwareAcceleration(); // ✅ ADD THIS

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 700,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});