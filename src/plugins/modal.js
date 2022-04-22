import AppModal from '../components/Common/Modal.vue';

const Modal = {
    install(Vue, options) {
        this.EventBus = new Vue()
        Vue.component('modal', AppModal)

        Vue.prototype.$modal = {
            show(params) {
                Modal.EventBus.$emit('show', params)
            }
        }
    }
}

export default Modal