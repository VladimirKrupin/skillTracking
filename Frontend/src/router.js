import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Forgot from "./views/Forgot.vue";
import Profile from "./views/app/profile/Profile.vue";
import ChangePassword from "./views/app/changePassword/ChangePassword.vue";
import Policy from "./views/Policy.vue";

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer');
const Statistic = () => import('./views/app/statistics/Statistics');
const Main = () => import('./views/app/main/Main');
const Skills = () => import('./views/app/skills/Skills');
const SingleSkill = () => import('./views/app/skills/SingleSkill');
const CreateSkill = () => import('./views/app/skills/CreateSkill');

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
        {
            path: '/app',
            redirect: '/app',
            name: "Main",
            component: DefaultContainer,
            children: [
                {
                    path: '/app',
                    name: 'Home',
                    component: Main,
                },
                {
                    path: '/skills',
                    redirect: '/skills',
                    name: 'Skills',
                    meta: { label: 'Skills'},
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'createSkill',
                            name: 'CreateSkill',
                            component: CreateSkill,
                        },
                        {
                            path: '/editSkill/:id',
                            name: 'EditSkill',
                            component: CreateSkill,
                        },
                        {
                            path: '/skills',
                            component: Skills,
                        },
                        {
                            path: ':id',
                            name: 'SingleSkill',
                            component: SingleSkill,
                        },
                    ]
                },
                {
                    path: '/statistic',
                    name: 'Statistic',
                    component: Statistic,
                },
                {
                    path: "/profile",
                    name: "profile",
                    component: Profile,
                },
                {
                    path: "/changePassword",
                    name: "changePassword",
                    component: ChangePassword
                },
            ],
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/",
            name: "SkillTracking",
            components: {
                header: AppHeader,
                default: Components,
                footer: AppFooter
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter
            },
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter
            }
        },
        {
            path: "/forgot",
            name: "forgot",
            components: {
                header: AppHeader,
                default: Forgot,
                footer: AppFooter
            }
        },
        {
            path: "/policy",
            name: "policy",
            components: {
                header: AppHeader,
                default: Policy,
                footer: AppFooter
            }
        }
    ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

