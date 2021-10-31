/**
 * Nuxt.js配置文件
 */

module.exports = {
  router: {
    base: '/base',
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/hello',
        name: 'hello',
        component: resolve(__dirname, 'pages/about.vue')
      })
    }
  }
}