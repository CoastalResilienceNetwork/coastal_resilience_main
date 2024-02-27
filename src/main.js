// import './assets/main.css'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'

import { createApp } from 'vue'
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
