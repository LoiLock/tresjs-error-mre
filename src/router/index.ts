import { createRouter, createWebHistory } from 'vue-router';

import SlideViewLayout from '@/layouts/SlideViewLayout.vue';
import GlobeView from '@/views/slides/GlobeView.vue';
import SprintView from '@/views/slides/SprintView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SlideViewLayout,
      children: [
        {
          path: 'globe',
          name: 'globe',
          component: GlobeView
        },
        {
          path: 'sprint',
          name: 'sprint',
          component: SprintView
        }
      ]
    }
  ]
});

export default router;
