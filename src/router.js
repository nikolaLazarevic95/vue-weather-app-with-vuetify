import { createRouter, createWebHistory } from 'vue-router';
import CurrentPage from './pages/CurrentPage.vue';
import HourlyPage from './pages/HourlyPage.vue';
import DailyPage from './pages/DailyPage.vue';
import AirPollutionPage from './pages/AirPollutionPage.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/current',
    },
    {
      path: '/current',
      component: CurrentPage,
    },
    {
      path: '/hourly',
      component: HourlyPage,
    },
    {
      path: '/daily',
      component: DailyPage,
    },
    {
      path: '/airpollution',
      component: AirPollutionPage,
    },
    {
      path:  '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
});

export default router;
