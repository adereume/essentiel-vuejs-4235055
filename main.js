import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js' // Build app Vue.js via les module ES (le plus utilisé)

const app = createApp({
    data() {
        return {
            name: "Pizza Royale",
            price: 12
        }
    }
})

app.mount('#app'); // Relie à la div avec id=app