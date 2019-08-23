module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  // webpack config
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.baidu.com'
      },
    }
  },
  publicPath: './'
}
