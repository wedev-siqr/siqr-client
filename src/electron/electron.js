const waitOn = require('wait-on');
const { format } = require('url');
const { BrowserWindow, app } = require('electron');
try {
  require('electron-reloader')(module);
} catch (err) {
  console.error('Error with electron-reloader', err);
}

let win;

process.stdin.resume();

const quitHandler = () => {
  win.close();
  app.quit();
};

process.on('SIGTERM', quitHandler);
process.on('SIGKILL', quitHandler);

function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 1024,
    height: 768,
    icon: './src/favicon.ico',
    webPreferences: {
      nodeIntegration: false,
    },
    title: 'SIQR - WeDev',
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

app.on('ready', () => {
  createWindow();
  win.maximize();
  waitOn({
    resources: ['http-get://127.0.0.1:4200'],
    interval: 500,
  })
    .then(() => {
      console.log('Localhost ready.');
      win.reload();
    })
    .catch(console.error);
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
