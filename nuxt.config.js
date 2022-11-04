export default {
  router: {
    base:'/abc/',
    // 自定义路由规则
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'test',
        path: '/test',
        component: resolve(__dirname, 'pages/about.vue')
      })
    }
  }
}
