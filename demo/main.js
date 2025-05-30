import { createApp } from 'vue'
import App from './App.vue'
import MyComponentLib from '../index.js'

const app = createApp(App)
app.use(MyComponentLib)
app.mount('#app')
