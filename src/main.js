import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss';
import store from './store'; // Import the Vuex store

// createApp(App).mount('#app')

const app = createApp(App);
app.use(store); // Use the Vuex store
app.mount('#app');