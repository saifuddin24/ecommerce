import '@/js/bootstrap.ts';
import {createApp} from "vue";
import App from "@/js/App.vue";
import router from "@/js/router/index.ts";

const app = createApp(App);

app.use(router)

app.mount('#root')
