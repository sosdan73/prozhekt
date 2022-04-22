import AppForm from '../components/Common/ModalForm.vue';

const ModalForm = {
    install(Vue, options) {
        this.EventBus = new Vue()
        Vue.component('modalForm', AppForm)

        Vue.prototype.$modalForm = {
            show() {
                ModalForm.EventBus.$emit('show')
            }
        }
    }
}

export default ModalForm