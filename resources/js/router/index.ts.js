import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path:'/',
    component:() => import('@/js/pages/DashboardPage.vue')
  },
  {
    path:'/products',
    component:() => import('@/js/pages/ProductsPage.vue')
  }
];

export default createRouter({
  history: createWebHistory('/'),
  routes
})
