<template>
    <div ref="self" class="services section app__offset-l bg-pink">
        <div class="services__header">
            <h2 class="section__subtitle">Услуги:</h2>
            <button
                class="section__subtitle services__button"
                :class="{'--active': item.isActive}"
                v-for="item in data"
                :key="item.title"
                @click="chooseService(item)"
            >
                {{ item.title }}
            </button>
        </div>
        <div ref="content">
            <ServicesContent :content="content" />
        </div>
        <Arrow class="services__arrow" @click="nextTab"/>
        <div class="services__tabs--transition">
            <ServicesTabs :data="tabs" ref="tabs"/>
        </div>
    </div>
</template>

<script>
import { services } from '@/data.js';
import { GoTo } from '@/Mixins/GoTo.js';
import ServicesContent from './ServicesContent.vue';
import ServicesTabs from './ServicesTabs.vue';
import Arrow from '../Common/Arrow.vue';

export default {
    components: { ServicesContent, ServicesTabs, Arrow, },
    mixins: [GoTo],
    data() {
        return {
            data: services,
            sliding: false,
        }
    },
    computed: {
        tabs() {
            return this.data.filter(item => item.isActive)[0].tabs;
        },
        content() {
            return this.tabs.filter(item => item.isActive)[0];
        },
    },
    methods: {
        chooseService(service) {
            if (!service.isActive && !this.sliding) {
                this.sliding = true;
                setTimeout(() => {
                    this.sliding = false;
                }, 400);

                this.$refs.tabs.animateTabsSwap();
                this.$refs.content.classList.add('services__before-slide');
                setTimeout(() => {
                    this.$refs.content.classList.add('services__after-slide');
                    this.$refs.content.classList.remove('services__before-slide');
                    
                    this.data.forEach(item => {
                        item.isActive = !item.isActive;
                    });
                }, 200);

                setTimeout(() => {
                    this.$refs.content.classList.remove('services__after-slide');
                }, 400);
            }
        },
        nextTab() {
            if (!this.sliding) {
                this.sliding = true;
                setTimeout(() => {
                    this.sliding = false;
                }, 400);

                this.$refs.content.classList.add('services__before-slide');
                setTimeout(() => {
                    this.$refs.content.classList.add('services__after-slide');
                    this.$refs.content.classList.remove('services__before-slide');
                
                    let activeServices = this.data.filter(item => item.isActive)[0];
                    let index = activeServices.tabs.findIndex(tab => tab.isActive);
                    activeServices.tabs[index].isActive = false;

                    let newIndex = activeServices.tabs.length - 1 === index ? 0 : index + 1;
                    activeServices.tabs[newIndex].isActive = true;
                }, 200);

                setTimeout(() => {
                    this.$refs.content.classList.remove('services__after-slide');
                }, 400);
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/colors.scss";
@import  "../../assets/sass/mixins.scss";

.services__header {
    display: flex;
    align-items: center;
}
.section__subtitle {
    margin-right: 1.5vw;
}
.services__button {
    background-color: transparent;
    border: none;
    padding: 0;
    width: max-content;
    // TODO: rework one line buttons
    color: #878787;
    cursor: pointer;

    @include underline(0.26vw);

    &.--active {
        color: $dark-blue;
        @include underline-active(0.26vw);
    }
}
.services__arrow {
    position: absolute;
    top: 25vw;
    right: 3vw;
    width: 3vw;
    cursor: pointer;
}
.services__before-slide {
    animation: slide-before .2s ease-in-out;
}
.services__after-slide {
    animation: slide-after .2s ease-in-out;
}
@keyframes slide-before {
    0% {
        opacity: 1;
        transform: translateX(0);
    } 99% {
        opacity: 0;
        transform: translateX(-2vw);
    } 100% {
        opacity: 0;
        transform: translateX(2vw);
    }
}
@keyframes slide-after {
    0% {
        opacity: 0;
        transform: translateX(2vw);
    } 100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>