import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import { Button, TimePicker } from "ant-design-vue";


createApp(App).use(router).use(store).use(Antd).mount('#app')
