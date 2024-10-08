import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from '@/pages/coaches/CoachesList.vue';
import NotFound from '@/pages/NotFound.vue';
import CoachesDetails from '@/pages/coaches/CoachesDetails.vue';
import ContactCoach from '@/pages/requests/ContactCoach.vue';
import CoachRegister from '@/pages/coaches/CoachRegister.vue';
import RequestReceived from '@/pages/requests/RequestReceived.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    { path: '/coaches/:id',
      component: CoachesDetails,
      props: true,
    children: [
      { path: 'contact', component: ContactCoach }, // coache/:coachId/contact
    ] },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;