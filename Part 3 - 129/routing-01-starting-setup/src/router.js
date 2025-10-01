import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from "./pages/TeamsFooter.vue";
import UsersFooter from "./pages/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'teams',path: '/', redirect: '/teams' },
    {
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name:'team-members',
          path: ':teamId',
          component: TeamMembers,
          props:true
        }, // domain.com/teams=> TeamMember
      ]}, // domain.com/teams=> Teamslist
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter:');
        console.log(to, from);
        next();
      }
    }, // domain.com/teams=> Userslist
    {path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_to, _from, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 }
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach')
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log('Needs auth!')
  }
  // if (to.name === 'team-members'){
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach(function(to, from) {
  console.log(to,from);
  // sending analytics data
});

export default router;