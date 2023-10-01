import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
// import firebase from "@/firebaseConfig.js";

// Use the plugin with your main app instance
const app = createApp(App);

// FontAwesome integration
library.add(faMoneyBill, faFacebook, faTwitter, faInstagram);
app.component("font-awesome-icon", FontAwesomeIcon);

// Use v-calendar plugin
app.use(VCalendar);

// Other app configurations
app.use(router);
app.mount('#app');
