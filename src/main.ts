import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';

import './style.css';
import 'ant-design-vue/dist/reset.css';

const test = 10;

console.log(test);

const app = createApp(App);

app.use(Antd).mount('#app');
