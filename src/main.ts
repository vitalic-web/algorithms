import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import AppHighCode from '@/components/AppHighCode.vue';
import App from './App.vue';
import router from './router';

import './assets/styles.scss';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component('AppHighCode', AppHighCode);
app.mount('#app');
