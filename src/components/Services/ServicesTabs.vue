<template>
    <div class="services__tabs">
        <div class="tabs__container" ref="tabs">
            <div
                class="services__tab"
                :class="{ '--active': item.isActive }"
                :key="item.id"
                v-for="item in data"
                @click="setActiveService(item)"
            >
                {{ getTitle(item) }}
            </div>
        </div>
        <Arrow
            class="services__arrow--mobile"
            :style="transformArrow"
            @click="nextTab"
        />
    </div>
</template>

<script>
import Arrow from '../Common/Arrow.vue';

export default {
    props: ['data'],
    components: { Arrow, },
    data() {
        return {
            isClickable: true,
        }
    },
    computed: {
        transformArrow() {
            return { transform: `translateY(${this.data.length === 3 ? 27.4 : 27.4 }vw)` }
        },
    },
    methods: {
        getTitle(item) {
            let title = '';
            if (item.title.xl) {
                title += item.title.xl;
                return item.title.l ? `${title} ${item.title.l}` : title
            }
            if (item.title.l) {
                title += item.title.l;
                return item.title.m ? `${title} ${item.title.m}` : title
            }
            if (item.title.m) {
                return item.title.m.replace(/:/, "");
            }
            return item.title.s
        },
        setActiveService(item) {
            if (this.isClickable) {
                this.isClickable = false;
                setTimeout(() => {
                    this.isClickable = true;
                }, 400);

                this.$emit('tabChange', item)

                setTimeout(() => {
                    this.data.filter(service => service.isActive)[0].isActive = false;
                    item.isActive = true;
                }, 200);
                
            }
        },
        animateTabsSwap() {
            this.$refs.tabs.classList.add('--transparent');
            setTimeout(() => {
                this.$refs.tabs.classList.remove('--transparent');
            }, 201);
        },
        nextTab() {
            this.$emit('nextTab');
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/mixins.scss";
@import "../../assets/sass/colors.scss";


.services__tabs {
    position: absolute;
    left: 3vw;
    top: 21vw;
}

.tabs__container {
    max-width: 10vw;
    transition: opacity .2s ease-in-out;

    &.--transparent {
        opacity: 0;
    }

}

.services__tab {
    margin-bottom: 1vw;
    padding: 0.2vw;

    font-family: "Montserrat-Bold";
    font-size: 0.8375vw;
    text-align: left;
    color: #878787;
    cursor: pointer;
    transition: color .3s ease-in-out,
                text-decoration .3s ease-in-out;

    &.--active {
        color: $dark-blue;
        text-decoration: underline;
    }
}

.services__arrow--mobile {
    display: none;
}

@media (max-width: 660px) {
    .tabs__container {
        max-width: 60vw;
    }
    .services__tabs {
        max-width: unset;
        top: unset;
        
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0;
        padding-left: 8.7vw;
        width: 100%;
        box-sizing: border-box;
        height: 70vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .services__tab {
        margin-bottom: 4vw;
        padding: 0;
        font-size: 3.8vw;

        &.--active {
            color: $dark-blue;
            text-decoration: underline;
        }
    }

    .services__arrow--mobile {
        display: block;
        position: absolute;
        right: 9vw;
        top: 0;
        transform: translateY(calc((100% - 12.85vw) / 2));
        width: 12.85vw;
        height: 11.3vw;
        transition: transform .2s ease-in-out;
    }
}
</style>