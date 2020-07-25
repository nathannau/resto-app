module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova',
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  outputDir: './src-cordova/www',
  devServer: {
    port: 8081
  }
}
