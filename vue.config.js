module.exports = {
    configureWebpack: {
      optimization: {
        splitChunks: false
      },
      entry: {
        'background': './src/background.js',
        'bridge': './src/bridge.js'
      }
    },
    filenameHashing: false,
}