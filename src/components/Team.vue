<template>
    <div ref="self" class="app__offset-l team section">
        <h2 class="section__title">
            Команда
        </h2>
        <div class="team__content">
            <div
                class="team__card"
                :key="member.name"
                v-for="member in team"
            >
                <div class="card__info">
                    <img class="card__image" src="" alt>
                    <h3 class="card__title">{{ member.name }}</h3>
                </div>
                <div class="card__row text-grey">
                    {{ member.status }}
                </div>
                <div class="card__content">
                    <div
                        class="card__row"
                        :key="index"
                        v-for="(desc, index) in member.descriptions"
                    >
                        {{ desc }}
                    </div>
                </div>
            </div>
            <!-- <div class="team__card">
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
            </div> -->
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
import { GoTo } from '@/mixins/GoTo.js';
import { team } from '../data';

// Scroll height is ~4350
const b = 4400;
const leftK = 6.7;
const rightK = -7;

export default {
    data() {
        return {
            leftCoord: 0,
            rightCoord: 0,
            team,
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
            this.leftCoord = window.innerWidth > 660 ? (leftK * window.scrollY + b) / 25 - 1200 : (-500 + window.scrollY / 7);
            this.rightCoord = window.innerWidth > 660 ? (rightK * window.scrollY + b) / 35 : (500 + window.scrollY / (-8));
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
    transition: transform .05s linear;
}

.team__circle-right {
    position: absolute;
    top: 72vw;
    right: -10vw;

    width: 25vw;
    height: 25vw;
    transition: transform .05s linear;
}

@media (max-width: 660px) {
    .team {
        overflow: hidden;
    }

    .team__content {
        display: flex;
        flex-direction: column;
        justify-content: unset;
        margin-right: 0;
        margin-bottom: -22.5vw;
    }

    .team__card {
        width: 100%;
        margin-right: 0;
        margin-bottom: 22.5vw;
    }

    $size-info: 50vw;

    .card__info {
        width: $size-info;
    }

    .card__image {
        width: $size-info;
        height: $size-info;
        background-color: $grey;
        margin-bottom: 7vw;
    }

    .card__title {
        font-size: 7.64vw;
        margin-bottom: 5.2vw;
    }

    .card__row:not(:last-child) {
        margin-bottom: 4vw;
    }

    .team__circle-left {
        opacity: 0.5;
        z-index: -1;
        position: absolute;
        top: 230vw;
        left: unset;
        right: -340vw;

        width: 372vw;
        height: 372vw;
    }

    .team__circle-right {
        opacity: 0.5;
        z-index: -1;
        top: 52vw;
        right: -50vw;

        width: 83vw;
        height: 83vw;
    }
}
</style>