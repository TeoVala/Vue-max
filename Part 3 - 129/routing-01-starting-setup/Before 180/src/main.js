import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamsList}, // domain.com/teams=> Teamslist
    { path: '/users', component: UsersList }, // domain.com/teams=> Userslist
    { path: '/teams/:teamId', component: TeamMembers, props:true }, // domain.com/teams=> TeamMember
    {path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
});
const app = createApp(App)

app.use(router)
   .mount('#app');
