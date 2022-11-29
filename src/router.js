import { createRouter, createWebHistory } from 'vue-router';
import TodayPage from './pages/TodayPage.vue';
import HourlyPage from './pages/HourlyPage.vue';
import DailyPage from './pages/DailyPage.vue';
import AirPollutionPage from './pages/AirPollutionPage.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/today',
    },
    {
      path: '/today',
      component: TodayPage,
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
