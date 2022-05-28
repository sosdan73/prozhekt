import AppForm from '../components/Modal/ModalForm.vue';

const ModalForm = {
    install(Vue, options) {
        this.EventBus = new Vue()
        Vue.component('modalForm', AppForm)

        Vue.prototype.$modalForm = {
            show(params) {
                ModalForm.EventBus.$emit('show', params)
            }
        }
    }
}

export default ModalForm