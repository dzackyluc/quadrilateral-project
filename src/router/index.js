// Composables
import { createRouter, createWebHistory } from 'vue-router'

// Pages
const IndexPage = () => import('@/pages/indexPage.vue');
const LoginPage = () => import('@/pages/loginPage.vue');
const NewsPage = () => import('@/pages/newsPage.vue');
const DashboardPage = () => import('@/pages/dashboardPage.vue');
const FullNewsPage = () => import('@/pages/fullNewsPage.vue');
const KegiatanPage = () => import('@/pages/kegiatanPage.vue');
const RadioPage = () => import('@/pages/radioPage.vue');
const AboutUsPage = () => import('@/pages/aboutusPage.vue');
const RegisterPage = () => import('@/pages/registerPage.vue');
const EditPage = () => import('@/pages/editPage.vue');
const CreatePage = () => import('@/pages/createPage.vue');
const ForgotPasswordPage = () => import('@/pages/ForgotPasswordPage');

// Router
const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: IndexPage},
    {
      path: '/login',
      children: [
        {
          path: '',
          component: LoginPage
        }
      ]
    },
    {
      path: '/register',
      children: [
        {
          path: '',
          component: RegisterPage
        }
      ]
    },
    {
      path: '/forget',
      children: [
        {
          path: '',
          component: ForgotPasswordPage
        }
      ]
    },
    {
      path: '/news', 
      children: [
        { 
          path: '',
          component: NewsPage ,
        },
        {
          path: 'read',
          component: FullNewsPage,
          props: (route) => ({ newsId: route.query.newsId }),
        },
      ]
    },
    {
      path: '/dashboard',
      children: [
        {
          path: '',
          component: DashboardPage,
          meta: { requiresAuth: true }
        },
        {
          path: 'edit',
          component: EditPage,
          props: (route) => ({ newsId: route.query.newsId }),
          meta: { requiresAuth: true }
        },
        {
          path: 'create',
          component: CreatePage,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/kegiatan',
      children: [
        {
          path: '',
          component: KegiatanPage,
        }
      ]
    },
    {
      path: '/radio',
      children: [
        {
          path: '',
          component: RadioPage,
        }
      ]
    },
    {
      path: '/aboutus',
      children: [
        {
          path: '',
          component: AboutUsPage,
        }
      ]
    },
  ]
});

// Router Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('jwt')) {
      next('/login');
    } else {
      const jwt = localStorage.getItem('jwt');
      const decodedJwt = decodeJwt(jwt);
      localStorage.setItem('user', decodedJwt.sub);
      const expiration = decodedJwt.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime > expiration) {
        localStorage.removeItem('jwt');
        next('/login');
      } else {
        next();
      }
    }
  } else if (to.path === '/login' && localStorage.getItem('jwt')) {
    next('/dashboard');
  } else {
    next();
  }
});

// Fungsi untuk decode JWT token yang ada di local storage
function decodeJwt(jwt) {
  const base64Url = jwt.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

// Export
export default router;
