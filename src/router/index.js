import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory();

import PreviewPage from '@/pages/PreviewPage.vue';
import FormPage from '@/pages/FormPage.vue';

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'preview',
      component: PreviewPage
    },
    {
      path: '/form',
      name: 'form',
      component: FormPage
    }
  ]
})

export default routes
