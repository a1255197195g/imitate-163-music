/*
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-13 10:02:42
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-14 15:16:04
 */
import { app, BrowserWindow, ipcMain } from 'electron'
const electron = require('electron')
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let isMaxWindow = false;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9999`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */



  //设置窗体
  //width, height 窗体的宽度，高度； x, y指定在桌面的起始点
  //frame  隐藏标题栏，菜单栏
  //resizable 是否可以缩放
  //

  mainWindow = new BrowserWindow({
    width: 1022,
    height: 670,
    frame: false,
    resizable: false,
    skipTaskbar: false,
    title: "音乐播放器",
    autoHideMenuBar: true,
  })

  //窗体加载html页面
  mainWindow.loadURL(winURL)

  //如果窗体关闭，则设置为null
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})


 /**
  * 开启小窗口模式
  */
ipcMain.on('startMiniWindow', e=> {

})

/**
 * 开启最小化模式
 */
ipcMain.on('startMinWindow', e=> {
  mainWindow.minimize()
});  

/**
 * 开启最大化模式
 */
ipcMain.on('startMaxWindow', e=> {
  //如果是最大化，那么就还原
   console.log(isMaxWindow)
  if(isMaxWindow){
    isMaxWindow = false;
    mainWindow.unmaximize();
    return;
  }
  isMaxWindow = true;
  //如果不是最大化则最大化
  mainWindow.maximize()
}); 

/***
 * 关闭应用
 */
 ipcMain.on('startClose', e=>{
   mainWindow.close();
   mainWindow = null;
 })    
 
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
