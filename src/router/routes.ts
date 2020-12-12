import { RouteConfig } from 'vue-router';
import { CONST } from '@/plugins/constant';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: CONST.ROUTE_NAME.ROUTE,
    redirect: { name: CONST.ROUTE_NAME.HOME }
  },
  {
    path: '/home',
    name: CONST.ROUTE_NAME.HOME,
    component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue')
  },
  {
    path: '/about',
    name: CONST.ROUTE_NAME.ABOUT,
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
  },

  {
    path: '*',
    name: CONST.ROUTE_NAME.NOT_FOUND,
    redirect: { name: CONST.ROUTE_NAME.HOME }
  }
];