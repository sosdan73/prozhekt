<template>
    <div class="ads section dark">
        <div class="ads__image" :style="transformImage"></div>
        <div class="ads__content content-centered">
            <div class="ads__row">
                <p>Пока вы слышите, что сейчас не время масштабироваться, ведь: закрыли инстаграм, отключили таргет, у клиентов нет денег, подписчики читают только новости, мы растим бизнесы клиентов и делаем им медийность!</p>
            </div>
            <div class="ads__row">
                <div class="ads__subtitle">
                    Пока вы:
                </div>
                <ul class="list --no-offset">
                    <li class="list__item">
                        Cнизили расходы на все, что можно было<br>(в первую очередь на маркетинг),
                    </li>
                    <li class="list__item">
                        Заморозили/закрыли бизнес,
                    </li>
                    <li class="list__item">
                        Передумали продвигаться,
                    </li>
                    <li class="list__item">
                        Отложили проекты до лучших времен,
                    </li>
                </ul>
            </div>
            <div class="ads__row">
                <div
                    class="ads__lead"
                    :style="transformText"
                >
                    <span>Другие растут </span>
                    <br>
                    <span class="--small">и привлекают клиентов</span>
                </div>
            </div>
            <div class="ads__row">
                <div class="ads__subtitle">
                    Помните, стратегия «отсидеться»<br>не подойдет:
                </div>
                <ul class="list --no-offset">
                    <li class="list__item">
                        Оставшиеся деньги дешевеют каждый день,
                    </li>
                    <li class="list__item">
                        Вашу нишу займут несколько конкурентов,<br>которые пользуются ситуацией.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
const textB = 400;
const textK = -1.5;
const imageB = 822;
const imageK = 21;

export default {
    data() {
        return {
            textCoordinate: 0,
            imageCoordinate: 0,
        }
    },
    computed: {
        transformText() {
            return { transform: window.innerWidth > 660 ? `translateX(${this.textCoordinate}px)` : `translateX(${this.textCoordinate}vw)` }
        },
        transformImage() {
            return { transform: `translateX(${this.imageCoordinate}px)` }
        },
    },
    methods: {
        setParallax() {
            this.textCoordinate = window.innerWidth > 660 ? (textK * window.scrollY + textB) / 10 : ((window.scrollY / 20 - 20) * 100 / 408);
            this.imageCoordinate = window.innerWidth > 660 ? (imageK * window.scrollY + imageB) / 750 : (100 + window.scrollY / (-15));
        }
    },
}
</script>

<style lang="scss" scoped>
.ads {
    background-image: url(../assets/images/architecture.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: right;
}
.ads__row {
    position: relative;
    margin-bottom: 3.6vw;
}
.ads__image {
    position: absolute;
    left: 0;
    width: 30vw;
    height: 40vw;
    
    background-image: url(../assets/images/lighthouse.png);
    background-size: cover;
    background-repeat: no-repeat;
    
    opacity: 0.8;
    transform: translateX(0);
}

.ads__content {
    font-size: 1.35vw;
}

.ads__subtitle {
    font-size: 1.77vw;
    margin-bottom: 1.35vw;
}

.ads__lead {
    position: relative;
    right: 15vw;
    width: 80vw;

    font-size: 5vw;
    font-family: 'Montserrat-Extrabold';
    text-transform: uppercase;
}

@media (max-width: 660px) {
    .ads {
        background-image: none;
    }
    .ads__row {
        position: relative;
        margin-bottom: 10.4vw;
    }
    .ads__image {
        position: absolute;
        right: 0;
        left: unset;
        top: 125vw;
        width: 68.4vw;
        height: 104vw;
        
        background-image: url(../assets/images/lighthouse.png);
        background-size: cover;
        background-repeat: no-repeat;
        
        opacity: 0.8;
        transform: translateX(0);
    }

    .ads__content {
        font-size: 4.5vw;
    }

    .ads__subtitle {
        font-size: 5.9vw;
        margin-bottom: 4vw;
    }

    .ads__lead {
        right: unset;
        width: 78.125vw;
        padding-bottom: 40vw;
        padding-top: 7vw;

        font-size: unset;
        
        & > span:not(.--small) {
            font-size: 13.72vw;
        }
        & > .--small {
            font-size: 8.65vw;
        }
    }
}
</style>