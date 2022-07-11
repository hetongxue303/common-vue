import {createApp} from 'vue'
import App from './App.vue'

// vue-router
import router from './router'
// nprogress
import 'nprogress/nprogress.css'
// element plus
import ElementPlus from './plugins/element-plus'
//windi.css
import 'virtual:windi.css'
// pinia
import {createPinia} from 'pinia'

const app = createApp(App)

app.use(router)
    .use(ElementPlus)
    .use(createPinia())
    .mount('#app')
