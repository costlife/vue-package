import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: [{
    path: '/',
    component: () => import('@/views/home'),
    name: 'Home',
    meta: { title: '首页' },
  }, {
    path: '/member',
    component: () => import('@/views/member'),
    name: 'Member',
    meta: { title: '个人中心' },
  }],
});

router.beforeEach(async(to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
