<template>
    <div class="services__tabs" ref="tabs">
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
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            isClickable: true,
        }
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
        }
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
</style>