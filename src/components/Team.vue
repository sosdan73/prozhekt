<template>
    <div ref="self" class="app__offset-l team section">
        <h2 class="section__title">
            Команда
        </h2>
        <div class="team__content">
            <div class="team__card">
                <div class="card__info">
                    <img src="" alt class="card__image">
                    <h3 class="card__title">Василий Земсков</h3>
                </div>
                <div class="card__row text-grey">
                    Директор по работе с клиентами
                </div>
                <div class="card__content">
                    <div class="card__row">
                        Поможет вам выбрать подходящее решение.
                    </div>
                    <div class="card__row">
                        Всегда держит вас в курсе происходящего. 
                    </div>
                    <div class="card__row">
                        Следит за работой менеджеров отдела по работе с клиентами.
                    </div>
                </div>
            </div>
            <div class="team__card">
                <div class="card__info">
                    <img src="" alt class="card__image">
                    <h3 class="card__title">Василий Земсков</h3>
                </div>
                <div class="card__row text-grey">
                    Директор по работе с клиентами
                </div>
                <div class="card__content">
                    <div class="card__row">
                        Поможет вам выбрать подходящее решение.
                    </div>
                    <div class="card__row">
                        Всегда держит вас в курсе происходящего. 
                    </div>
                    <div class="card__row">
                        Следит за работой менеджеров отдела по работе с клиентами.
                    </div>
                </div>
            </div>
            <div class="team__card">
                <div class="card__info">
                    <img src="" alt class="card__image">
                    <h3 class="card__title">Василий Земсков</h3>
                </div>
                <div class="card__row text-grey">
                    Директор по работе с клиентами
                </div>
                <div class="card__content">
                    <div class="card__row">
                        Поможет вам выбрать подходящее решение.
                    </div>
                    <div class="card__row">
                        Всегда держит вас в курсе происходящего. 
                    </div>
                    <div class="card__row">
                        Следит за работой менеджеров отдела по работе с клиентами.
                    </div>
                </div>
            </div>
            <div class="team__card">
                <div class="card__info">
                    <img src="" alt class="card__image">
                    <h3 class="card__title">Василий Земсков</h3>
                </div>
                <div class="card__row text-grey">
                    Директор по работе с клиентами
                </div>
                <div class="card__content">
                    <div class="card__row">
                        Поможет вам выбрать подходящее решение.
                    </div>
                    <div class="card__row">
                        Всегда держит вас в курсе происходящего. 
                    </div>
                    <div class="card__row">
                        Следит за работой менеджеров отдела по работе с клиентами.
                    </div>
                </div>
            </div>
            <div class="team__card">
                <div class="card__info">
                    <img src="" alt class="card__image">
                    <h3 class="card__title">Василий Земсков</h3>
                </div>
                <div class="card__row text-grey">
                    Директор по работе с клиентами
                </div>
                <div class="card__content">
                    <div class="card__row">
                        Поможет вам выбрать подходящее решение.
                    </div>
                    <div class="card__row">
                        Всегда держит вас в курсе происходящего. 
                    </div>
                    <div class="card__row">
                        Следит за работой менеджеров отдела по работе с клиентами.
                    </div>
                </div>
            </div>
        </div>
        <div class="team__circle-left" :style="transformLeft">
            <div class="circle__border">
                <div class="circle"></div>
            </div>
        </div>
        <div class="team__circle-right" :style="transformRight">
            <div class="circle__border">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { GoTo } from '@/Mixins/GoTo.js';

// Scroll height is ~4350
const b = 4400;
const leftK = 6.7;
const rightK = -7;

export default {
    data() {
        return {
            leftCoord: 0,
            rightCoord: 0,
        }
    },
    mixins: [GoTo],
    computed: {
        transformLeft() {
            return { transform: `translateY(${this.leftCoord}px)` }
        },
        transformRight() {
            return { transform: `translateY(${this.rightCoord}px)` }
        },
    },
    methods: {
        setParallax() {
            this.leftCoord = (leftK * window.scrollY + b) / 25 - 1200;
            this.rightCoord = (rightK * window.scrollY + b) / 35;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";

.team {
    overflow: hidden;
}

.team__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: -2vw;
    margin-bottom: -5.7vw;
}

$size-info: calc(0.6 * 22vw);

.team__card {
    width: 22vw;
    margin-right: 2vw;
    margin-bottom: 5.7vw;
}

.card__info {
    width: $size-info;
}

.card__image {
    width: $size-info;
    height: $size-info;
    background-color: $grey;
    margin-bottom: 2vw;
}

.card__title {
    font-size: 2.3vw;
    font-family: "Montserrat-Bold";
    margin-bottom: 2vw;
}

.card__row:not(:last-child) {
    margin-bottom: 1vw;
}

.team__circle-left {
    position: absolute;
    top: 0vw;
    left: -104vw;

    width: 111vw;
    height: 111vw;
}

.team__circle-right {
    position: absolute;
    top: 72vw;
    right: -10vw;

    width: 25vw;
    height: 25vw;
}
</style>