import { createApp } from 'vue';
import App from "./App.vue";
import BaseCard from './components/UI/BaseCard.vue'; // We import it as global because it'll be used on multiple places
import BaseButton from "./components/UI/BaseButton.vue";

createApp(App).component('base-card', BaseCard)
              .component('BaseButton', BaseButton)
              .mount('#app');
