import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import "./assets/sass/fonts.scss"
import "./assets/sass/common.scss"
import Modal from './plugins/modal.js';
import ModalForm from './plugins/modalForm.js';

Vue.use(Modal);
Vue.use(ModalForm);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
