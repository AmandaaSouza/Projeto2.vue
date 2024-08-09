//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importe o roteador

const app = createApp(App);

app.use(router); // Use o roteador
app.mount('#app');
