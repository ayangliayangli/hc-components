import { createApp, defineComponent, h } from 'vue';

// const App = defineComponent({
//     name: 'App',
//     setup() {
//         return () => {
//             return h('div', null, 'i love vue3')
//         }
//     },
// })

import App from './App.vue';

const app = createApp(App)
app.mount('#app')