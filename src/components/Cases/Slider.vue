<template>
    <div class="slider">
        <div class="slider__container --clickable" ref="slider">
            <div
                class="slider__card"
                :class="{'--disabled': getDisabledFlag(index)}"
                :ref="'slide-' + index"
                :key="index"
                v-for="(item, index) in dataComputed"
                @click="openModal(item, index)"
            >
                <div class="slider__image">
                    <img :src="`/images/${item.image ? item.image : 'lighthouse.png'}`" alt>
                </div>
                <h3 class="slider__title">{{ item.title }}</h3>
                <div>{{ item.companyName ? item.companyName : item.subtitle }}</div>
            </div>
        </div>
        <div class="slider__arrows app__offset-s">
            <Arrow
                class="slider__arrow"
                reversed
                @click="prevCard"
            />
            <Arrow
                class="slider__arrow --right"
                @click="nextCard"
            />
        </div>
    </div>
</template>

<script>
import Arrow from '../Common/Arrow.vue';

export default {
    props: {
        data: {
            type: Array,
            required: true,
        }
    },
    components: { Arrow, },
    data() {
        return {
            clickable: true,
            array: []
        }
    },
    created() {
        this.array = [...this.data];
    },
    methods: {
        nextCard() {
            this.$refs.slider.classList.add('--is-moving-next');
            if (window.innerWidth > 660) {
                this.$refs['slide-2'][0].classList.add('--fade-out');
                this.$refs['slide-5'][0].classList.add('--fade-in');
            } else {
                this.$refs['slide-2'][0].classList.add('--fade-out');
                this.$refs['slide-3'][0].classList.add('--fade-in');
            }
            setTimeout(() => {
                this.$refs.slider.classList.remove('--is-moving-next');
                if (window.innerWidth > 660) {
                    this.$refs['slide-2'][0].classList.remove('--fade-out');
                    this.$refs['slide-5'][0].classList.remove('--fade-in');
                } else {
                    this.$refs['slide-2'][0].classList.remove('--fade-out');
                    this.$refs['slide-3'][0].classList.remove('--fade-in');
                }
                this.array.push(...this.array.splice(0, 1));
            }, 600);
        },
        prevCard() {
            this.$refs.slider.classList.add('--is-moving-prev');
            if (window.innerWidth > 660) {
                this.$refs['slide-5'][0].classList.add('--fade-out');
                this.$refs['slide-2'][0].classList.add('--fade-in');
            } else {
                this.$refs['slide-3'][0].classList.add('--fade-out');
                this.$refs['slide-2'][0].classList.add('--fade-in');
            }
            setTimeout(() => {
                this.$refs.slider.classList.remove('--is-moving-prev');
                if (window.innerWidth > 660) {
                    this.$refs['slide-5'][0].classList.remove('--fade-out');
                    this.$refs['slide-2'][0].classList.remove('--fade-in');
                } else {
                    this.$refs['slide-3'][0].classList.remove('--fade-out');
                    this.$refs['slide-2'][0].classList.remove('--fade-in');
                }
                this.array.splice(0, 0, this.array.pop());
            }, 600);
        },
        openModal(item, index) {
            if (window.innerWidth > 660) {
                if (index > 1 && index < 5) { 
                    this.$modal.show(item);
                }
            } else {
                if (index === 2) { 
                    this.$modal.show(item);
                }
            }
        },
        getDisabledFlag(index) {
            return window.innerWidth > 660 ? index < 2 || index > 4 : index !== 2;
        },
    },
    computed: {
        dataComputed() {
            let array = [...this.array];
            for (let i = 0, j = array.length - 1; i < 2; i++) {
                array.splice(0, 0, array[j]);
                array.push(array[i * 2 + 1])
            }
            return array;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/colors.scss";

.slider {
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
    position: relative;
}
.slider__container {
    display: flex;
    margin-right: -2vw;
    position: relative;
    right: calc(((100vw / 4) - 2vw) * 1.5 + 2vw);


    &.--is-moving-next {
        transition: transform .6s ease-in-out;
        transform: translateX(calc(100vw / (-4)));
    }
    &.--is-moving-prev {
        transition: transform .6s ease-in-out;
        transform: translateX(calc(100vw / 4));
    }
}
.slider__card {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    width: calc((100vw / 4) - 2vw);
    margin-right: 2vw;

    transition: color .2s ease-in-out;

    cursor: pointer;
    position: relative;
    z-index: 110;

    &:hover {
        color: #444;
    }

    &.--disabled {
        opacity: 0.3;

        cursor: default;

        &:hover {
            color: initial;
        }
    }
}
.--is-moving-next .slider__card.--fade-in,
.--is-moving-prev .slider__card.--fade-in {
    transition: opacity .6s ease-in-out;
    opacity: 1;
}
.--is-moving-next .slider__card.--fade-out,
.--is-moving-prev .slider__card.--fade-out {
    transition: opacity .6s ease-in-out;
    opacity: 0.3;
}
.slider__image {
    width: 100%;
    height: 17vw;
    background-color: $grey;
    margin-bottom: 2vw;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.slider__title {
    font-size: 1.8vw;
    font-family: "Montserrat-Bold";
    margin-bottom: 2vw;
}
.slider__arrows {
    display: flex;
    position: absolute;
    top: 7.35vw;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 100;
}
.slider__arrow {
    width: 4.2vw;
    height: 3.59vw;

    &.--right {
        margin-left: auto;
    }
}

@media (max-width: 660px) {
    .slider__container {
        display: flex;
        margin-right: -1.8vw;
        position: relative;
        right: calc((100vw * 512 / 576) * 1.953125 + 1.8vw);


        &.--is-moving-next {
            transition: transform .6s ease-in-out;
            transform: translateX(calc(100vw * 512 / (-576) - 1.8vw));
        }
        &.--is-moving-prev {
            transition: transform .6s ease-in-out;
            transform: translateX(calc(100vw * 512 / 576 + 1.8vw));
        }
    }
    .slider__card {
        width: calc(100vw * 512 / 576);
        margin-right: 1.8vw;

        &::after {
            content: " ";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #ddd;
            z-index: 600;
            top: 0;
            left: 0;
        }
    }
    .slider__image {
        height: 65.625vw;
        margin-bottom: 6vw;
    }
    .slider__title {
        font-size: 5.9vw;
        font-family: "Montserrat-ExtraBold";
        margin-bottom: 6vw;
    }
    .slider__arrows {
        top: 9.55vw;
        left: 0.35vw;
        width: 100%;
        box-sizing: border-box;
        z-index: 200;
    }
    .slider__arrow {
        width: 12.85vw;
        height: 11.46vw;

        &.--right {
            margin-left: auto;
        }
    }
    
    .fading-in {
        animation: fading-in .6s ease-in-out;
    }
    .fading-out {
        animation: fading-out .6s ease-in-out;
    }

    @keyframes fading-in {
        from {
            opacity: 1;
        } to {
            opacity: 0.3;
        }
    }
    @keyframes fading-out {
        from {
            opacity: 0.3;
        } to {
            opacity: 1;
        }
    }
}
</style>