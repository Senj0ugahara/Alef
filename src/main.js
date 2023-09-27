import { createApp } from 'vue';
import router from './router';
import store from './store';
import components from './components/UI';
import App from './App.vue';

import './assets/scss/main.scss';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
})

app.use(router);
app.use(store);

app.mount('#app');