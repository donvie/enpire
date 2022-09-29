export default async ({ Vue, router, store }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.state.user.userData) {
        router.push({ name: 'signin' })
      } else {
        next()
      }
    } else {
      next()
    }
  })
}
