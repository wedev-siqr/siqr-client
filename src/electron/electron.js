const { join } = require('path');
const { format } = require('url');
const { BrowserWindow, app } = require('electron');
try {
  require('electron-reloader')(module);
} catch (err) {}

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/favicon.ico',
  });
  win.loadURL(
    format({
      pathname: 'localhost:4200',
      protocol: 'http:',
      slashes: true,
    })
  );

  if (process.env.NODE_ENV == 'development') {
    win.webContents.openDevTools();
  }

  win.on('closed', () => {
    win = null;
  });

  win.webContents.session.webRequest.onHeadersReceived((d, c) => {
    if (
      d.responseHeaders['x-frame-options'] ||
      d.responseHeaders['X-Frame-Options']
    ) {
      delete d.responseHeaders['x-frame-options'];
      delete d.responseHeaders['X-Frame-Options'];
    }
    c({ cancel: false, responseHeaders: d.responseHeaders });
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
