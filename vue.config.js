module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      mainProcessFile: 'src/electron/index.js',
      rendererProcessFile: 'src/app/main.js',
    }
  }
}
