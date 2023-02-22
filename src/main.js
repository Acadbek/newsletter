import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import uiComponents from './ui-components'
import store from './store'

const app = createApp(App)
uiComponents.map(component => app.component(component.name, component))

app.use(router)
app.use(store)
app.mount('#app')
