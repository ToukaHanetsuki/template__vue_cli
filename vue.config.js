module.exports = {
  publicPath: process.env.PUBLIC_PATH || '/',
  transpileDependencies: ['vuex-module-decorators'],
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/_variables.scss";'
      }
    }
  }
};