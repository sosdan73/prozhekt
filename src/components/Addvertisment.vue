<template>
    <div class="addvertisment section dark">
        <div class="addvertisment__image" :style="transformImage"></div>
        <div class="addvertisment__content content-centered">
            <div class="addvertisment__row">
                <p>Пока вы слышите, что сейчас не время масштабироваться, ведь: закрыли инстаграм, отключили таргет, у клиентов нет денег, подписчики читают только новости, мы растим бизнесы клиентов и делаем им медийность!</p>
            </div>
            <div class="addvertisment__row">
                <div class="advertisment__subtitle">
                    Пока вы:
                </div>
                <ul class="list">
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
            <div class="addvertisment__row">
                <div
                    class="addvertisment__lead"
                    :style="transformText"
                >
                    Другие растут<br>и привлекают клиентов
                </div>
            </div>
            <div class="addvertisment__row">
                <div class="advertisment__subtitle">
                    Помните, стратегия «отсидеться»<br>не подойдет:
                </div>
                <ul class="list">
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
            return { transform: `translateX(${this.textCoordinate}px)` }
        },
        transformImage() {
            return { transform: `translateX(${this.imageCoordinate}px)` }
        },
    },
    methods: {
        setParallax() {
            this.textCoordinate = (textK * window.scrollY + textB) / 10;
            this.imageCoordinate = (imageK * window.scrollY + imageB) / 750;
        }
    },
}
</script>

<style lang="scss" scoped>
.addvertisment {
    background-image: url(../assets/images/architecture.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: right;
}
.addvertisment__row {
    position: relative;
    margin-bottom: 3.6vw;
}
.addvertisment__image {
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

.addvertisment__content {
    font-size: 1.35vw;
}

.addvertisment__subtitle {
    font-size: 1.77vw;
    margin-bottom: 1.35vw;
}

.addvertisment__lead {
    position: relative;
    right: 15vw;
    width: 80vw;

    font-size: 5vw;
    font-family: 'Montserrat-Extrabold';
    text-transform: uppercase;
}
</style>