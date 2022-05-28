<template>
    <div
        v-if="visible"
        class="modal"
        :class="{'--wide': content.id[0] === 's'}"
    >
        <div
            class="modal__overlay"
            @click="hide"
        ></div>
        <div
            v-if="content.id[0] === 'c'"
            class="modal__image"
        >
            <img :src="`/images/${content.image ? content.image : 'lighthouse.png'}`" alt>
        </div>
        <div class="modal__cross cross" @click="hide">
            <span class="cross__left-line"></span>
            <span class="cross__right-line"></span>
        </div>
        <div class="modal__main" v-if="content">
            <div class="modal__content" v-if="content.id[0] === 'c'">
                <div class="modal__row">
                    <h2 class="modal__title">
                        {{ content.title }}
                    </h2>
                    <div
                        v-if="content.companyName"
                        class="modal__company-name"
                    >
                        {{ content.companyName }}
                    </div>
                    <div>{{ content.subtitle }}</div>
                </div>
                <div
                    class="modal__row"
                    :key="item.title"
                    v-for="item in content.info"
                >
                    <h3 class="modal__subtitle">{{ item.title }}</h3>
                    <ul class="list --no-offset" role="list">
                        <li
                            class="list__item"
                            :key="listItem.text ? listItem.text : listItem"
                            v-for="listItem in item.list"
                        >
                            <span>{{ listItem.text ? listItem.text : listItem }}</span>
                            <ul
                                v-if="listItem.children"
                                class="list"
                                role="list"
                            >
                                <li
                                    class="list__item"
                                    :key="child"
                                    v-for="child in listItem.children"
                                >
                                    {{ child }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="modal__row">
                    <button
                        class="pixel-button --block"
                        @click="openFormCases()"
                    >
                        Хочу так же
                    </button>
                </div>
            </div>
            <div class="modal__content" v-else>
                <div class="modal__row">
                    <h2 class="modal__title">
                        {{ Object.keys(content.titleMobile).join(' ') }}
                    </h2>
                </div>
                <div class="modal__row">
                    <h3
                        v-if="content.listLeft.title"
                        class="modal__subtitle"
                    >
                        {{ content.listLeft.title }}
                    </h3>
                    <ul
                        class="list --no-offset"
                        role="list"
                    >
                        <li
                            class="list__item"
                            :key="listItem.text ? listItem.text : listItem"
                            v-for="listItem in servicesLists"
                        >
                            <span>{{ listItem.text ? listItem.text : listItem }}</span>
                            <ul
                                v-if="listItem.children"
                                class="list"
                                role="list"
                            >
                                <li
                                    class="list__item"
                                    :key="child"
                                    v-for="child in listItem.children"
                                >
                                    {{ child }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="modal__row" v-if="content.listRight && content.listRight.title">
                    <h3 class="modal__subtitle">
                        {{ content.listRight.title }}
                    </h3>
                    <ul
                        class="list --no-offset"
                        role="list"
                    >
                        <li
                            class="list__item"
                            :key="listItem.text ? listItem.text : listItem"
                            v-for="listItem in content.listRight.list"
                        >
                            <span>{{ listItem.text ? listItem.text : listItem }}</span>
                            <ul
                                v-if="listItem.children"
                                class="list"
                                role="list"
                            >
                                <li
                                    class="list__item"
                                    :key="child"
                                    v-for="child in listItem.children"
                                >
                                    {{ child }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="modal__row">
                    <div class="services__subtitle">Стоимость: {{ content.price }}</div>
                </div>
                <div class="modal__row">
                    <button
                        class="pixel-button --block"
                        @click="openFormServices()"
                    >
                        Хочу так же
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from '../../plugins/modal';
import { Escapable } from '@/mixins/Escape';

export default {
    mixins: [Escapable],
    data() {
        return {
            visible: false,
            content: undefined,
        }
    },
    beforeMount() {
        Modal.EventBus.$on('show', (params) => {
            this.show(params)
        })
    },
    methods: {
        show(params) {
            document.body.style = 'overflow: hidden;';
            this.visible = true;
            this.content = params;
        },
        hide() {
            document.body.style = '';
            this.visible = false;
        },
        openFormServices() {
            setTimeout(() => {
                this.hide();
            }, 0);
            this.$modalForm.show(`Модалка, услуги : ${Object.keys(this.content.titleMobile).join(' ')}`)
        },
        openFormCases() {
            setTimeout(() => {
                this.hide();
            }, 0);
            this.$modalForm.show(`Модалка, кейсы : ${this.content.title}`)
        },
    },
    computed: {
        servicesLists() {
            return !this.content.listRight || this.content.listRight.title ?
                    this.content.listLeft.list :
                    [...this.content.listLeft.list, ...this.content.listRight.list];
        },
    },
}
</script>

<style lang="scss">
@import '../../assets/sass/colors';

.modal,
.modal__overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
.modal {
    z-index: 200;
    overflow: auto;

    overflow-x: hidden;
}
.modal__overlay {
    z-index: 110;
    background-color: rgba($color: #000000, $alpha: 0.7);
}
.modal__image {
    position: fixed;
    z-index: 200;
    top: 16.4vw;
    left: 16.4vw;
    width: 23vw;
    height: 16.4vw;
    background-color: $lightgrey;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.modal__cross {
    position: fixed;
    z-index: 200;
    top: 16.4vw;
    right: 20vw;
    width: 5.5vw;
    height: 5.5vw;

    background-color: $lightgrey;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
}
.modal.--wide .modal__cross {
    right: 9.5vw;
}
.cross__left-line,
.cross__right-line {
    width: 2.3vw;
    height: 0.4vw;
    background-color: $grey;
    position: absolute;
    top: 45%;
    left: 28%;
}
.cross__left-line {
    transform: rotate(45deg);
}
.cross__right-line {
    transform: rotate(-45deg);
    
}
.modal__main {
    position: relative;
    z-index: 150;
    margin-top: 12.875vw;
    margin-bottom: 12.875vw;
    margin-right: 25.5vw;
    margin-left: 34.5vw;
}
.modal.--wide .modal__main {
    margin-right: 15vw;
    margin-left: 15vw;
}
.modal__content {
    padding: 4vw;
    padding-left: 6.5vw;
    padding-right: 5vw;
    background-color: #fff;
}
.modal__row:not(:last-child) {
    margin-bottom: 3vw;
}
.modal__title {
    font-family: "Montserrat-Bold";
    font-size: 2.4vw;
}
.modal__subtitle {
    font-family: "Montserrat-Bold";
    font-size: 1.8vw;
}
.modal__company-name {
    padding: 1vw 0;
}

@media (max-width: 660px) {
    .modal__overlay {
        display: none;
    }
    .modal {
        z-index: 200;
        overflow: auto;
        overflow-x: hidden;
        padding: 5.73vw;
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
    }
    .modal__image {
        position: static;
        width: 100%;
        height: 65.625vw;
        background-color: $lightgrey;
    }
    .modal__cross {
        top: 0vw;
        right: 0vw;
        width: 14vw;
        height: 14vw;
        background-color: $white;

        &:hover {
            background-color: $lightgrey;
        }
    }
    .cross__left-line,
    .cross__right-line {
        width: 9vw;
        height: 1.1vw;
        background-color: $dark;
        top: 43%;
        left: 22%;
    }
    .modal__main {
        margin: 0;
    }
    .modal__content {
        padding: 5.73vw 0;
        padding-left: 0;
    }
    .modal__row:not(:last-child) {
        margin-bottom: 5.73vw;
    }
    .modal__title {
        font-size: 5.9vw;
        margin-bottom: 2vw;
    }
    .modal__subtitle {
        font-size: 5vw;
    }
    .modal__company-name {
        // padding: 1vw 0;
    }
    .list__item {
        width: 90%;
    }
}
</style>