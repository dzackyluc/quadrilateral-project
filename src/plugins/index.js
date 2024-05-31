/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

import Carousel3d from 'vue3-carousel-3d'
import 'vue3-carousel-3d/dist/index.css'

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(axios)
    .use(VueSweetalert2)
    .use(VueSplide)
    .use(Carousel3d)
    .use(VueAxios, instance);
  app.config.globalProperties.$axios = instance;
}
