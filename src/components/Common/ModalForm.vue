<template>
    <div
        class="modal form"
        v-if="visible"
        @keydown.esc="hide"
    >
        <div class="modal__overlay" @click="hide"></div>
        <div class="form__window">
            <div class="form__cross cross" @click="hide">
                <span class="cross__left-line"></span>
                <span class="cross__right-line"></span>
            </div>
            <div class="form__header">
                <h2 class="form__title">Оставить заявку / забронировать консультацию</h2>
            </div>
            <FormInput
                :model.sync="form.name"
                placeholder="Ваше имя*"
            />
            <FormInput
                :model.sync="form.phone"
                placeholder="Телефон*"
            />
            <FormInput
                :model.sync="form.tg"
                placeholder="Telegram"
            />
            <FormTextarea
                class="form__textarea"
                :model.sync="form.info"
                placeholder="Ваш запрос"
            />
            <FormSelect
                :model.sync="form.howToReach"
                placeholder="Удобный способ связи"
            />
            <button
                class="pixel-button form__submit"
                @click="onSubmit"
            >
                Отправить заявку
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ModalForm from '../../plugins/modalForm';
import FormInput from './FormInput.vue';
import FormTextarea from './FormTextarea.vue';
import FormSelect from './FormSelect.vue';

const voidData = {
    name: '',
    phone: '',
    tg: '',
    info: '',
    howToReach: 'телефон',
}

export default {
    name: 'ModalForm',
    components: { FormInput, FormTextarea, FormSelect, },
    data() {
        return {
            visible: false,
            form: {...voidData},
        }
    },
    beforeMount() {
        ModalForm.EventBus.$on('show', () => {
            this.show()
        })
    },
    methods: {
        show() {
            document.body.style = 'overflow: hidden;';
            this.visible = true;
        },
        hide() {
            document.body.style = '';
            this.form = {...voidData};
            this.visible = false;
        },
        async onSubmit() {
            axios.post('link-here', {
                data: this.form
            }).then(() => {
                this.hide();
            }).catch(err => {
                console.error(err);
            })
        }
    },
}
</script>

<style lang="scss">
@import '../../assets/sass/colors.scss';

.modal,
.modal__overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
.modal__overlay {
    z-index: 110;
    background-color: rgba($color: #000000, $alpha: 0.3);
}
.form {
    display: flex;
    align-items: center;
    justify-content: center;
}
.form__cross {
    position: absolute;
    top: 0;
    right: 0;
    width: 5.5vw;
    height: 5.5vw;
    cursor: pointer;
}
.form__window {
    position: relative;
    z-index: 200;
    padding: 6.25vw 8.3vw 8.3vw 17vw;
    background-color: $white;
    margin-left: 8vw;
    margin-right: 8vw;

    display: grid;
    gap: 2.5vw;
    grid-template-columns: 3fr 2fr 2fr;
    

    background-image: url(../../assets/images/phone.jpg);
    background-repeat: no-repeat;
    background-size: 17%;
    background-position: 0 50%;
}
.form__header {
    grid-column: 1 / -1;
    width: 65%;
}
.form__title {
    font-family: "Montserrat-Bold";
    font-size: 2.3vw;
    line-height: 1.3;
    text-transform: lowercase;
    margin-bottom: 4vw;
}
.form__textarea {
    grid-area: 3 / 1 / 5 / 2;
}
.form__submit {
    grid-column-start: 2;
    grid-column-end: 4;

    display: block;
    width: fit-content;
    padding-top: 0.7vw;
    padding-bottom: 0.3vw;
}
@media (max-width:660px) {
    .modal {
        z-index: 600;
        overflow: auto;
        overflow-x: hidden;
        padding: 5.73vw;
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
    }
    .modal__overlay {
        display: none;
    }
    .form {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form__cross {
        position: fixed;
        z-index: 710;
        top: 0vw;
        right: 0vw;
        width: 14vw;
        height: 14vw;
        background-color: $white;
        transition: background-color .3s ease-in-out;

        &:hover {
            background-color: $lightgrey;
        }
    }
    .form__window {
        position: relative;
        z-index: 700;
        padding: 0;
        margin-left: 0;
        margin-right: 0;

        display: grid;
        gap: 8vw;
        grid-template-columns: 1fr;
        

        background-image: none;
    }
    .form__header {
        margin-top: 6vw;
        width: 100%;
    }
    .form__title {
        font-size: 5.2vw;
        line-height: 1.3;
        text-transform: lowercase;
        margin-bottom: 4vw;
    }
    .form__textarea {
        grid-area: unset;
    }
    .form__submit {
        grid-column-start: unset;
        grid-column-end: unset;

        display: block;
        width: 100%;
        padding-top: 0.7vw;
        padding-bottom: 0.3vw;
    }
}
</style>