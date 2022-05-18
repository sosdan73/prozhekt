<template>
    <div class="reasons section content-centered">
        <div>
            <div class="reasons__title">Почему нужно действовать?</div>
            <ul class="list --no-offset">
                <li class="list__item">
                    Потребности клиентов никуда не делись;
                </li>
                <li class="list__item">
                    Большинство ваших конкурентов сейчас:
                    <ul class="list">
                        <li class="list__item">
                            из-за страха отказались от вложений в маркетинг,
                        </li>
                        <li class="list__item">
                            из-за проблемы с поставками заморозили деятельность;
                        </li>
                    </ul>
                </li>
                <li class="list__item">
                    Появились дополнительные рекламные площадки у инфлюенсеров;
                </li>
                <li class="list__item">
                    Люди ищут новые продукты и новых инфлюенсеров;
                </li>
                <li class="list__item">
                    Систему маркетинга ждет перезагрузка, к которой нужно быть готовым;
                </li>
                <li class="list__item">
                    Порог входа снизился из-за ухода гигантов рынка;
                </li>
                <li class="list__item">
                    И новички, и опытные в “одной лодке” проблем без привилегий.
                </li>
            </ul>
        </div>
        <div>
            <div class="reasons__title">
                Что мы делаем для увеличения продаж и продвижения личностей сейчас?
            </div>
            <ul class="list --no-offset">
                <li class="list__item">
                    Адаптируем продукт и личный бренд под актуальную повестку и нишу;
                </li>
                <li class="list__item">
                    Анализируем «переселение» целевой аудитории в соц. сетях;
                </li>
                <li class="list__item">
                    Используем инстаграм в текущих реалиях;
                </li>
                <li class="list__item">
                    Используем забытые инструменты (ВК, ТГ, контекст и др.);
                </li>
                <li class="list__item">
                    Развиваем с нуля и продаем через личный бренд владельца / амбассадора;
                </li>
                <li class="list__item">
                    Используем вкупе нестандартные инструменты (СМИ, офлайн реклама и др.);
                </li>
                <li class="list__item">
                    Являемся маркетинговым отделом на аутсорсе, постоянно мониторим ситуацию.
                </li>
            </ul>
        </div>
        <div class="reasons__circle-left" :style="transformLeft">
            <div class="circle__border">
                <div class="circle"></div>
            </div>
        </div>
        <div class="reasons__circle-right" :style="transformRight">
            <div class="circle__border">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
// Scroll height is ~2000
const b = 2000;
const leftK = 6.7;
const rightK = -7;

export default {
    data() {
        return {
            leftCoord: 0,
            rightCoord: 0,
        }
    },
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
            this.leftCoord = window.innerWidth > 660 ? (leftK * window.scrollY + b) / 40 : (window.scrollY / 6 - 400);
            this.rightCoord = window.innerWidth > 660 ? (rightK * window.scrollY + b) / 35 : (((-1) * window.scrollY / 5) + 800);
        }
    },
}
</script>

<style lang="scss" scoped>
.reasons {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    & > div:first-child {
        margin-bottom: 7vw;
    }
}
.reasons__title {
    font-size: 2.3vw;
    font-family: 'Montserrat-Bold';
    margin-bottom: 1.5vw;
}
.reasons__circle-left {
    position: absolute;
    top: 9vw;
    left: -34vw;

    width: 57vw;
    height: 57vw;
}
.reasons__circle-right {
    position: absolute;
    top: 9vw;
    right: -20vw;

    width: 32vw;
    height: 32vw;
}

@media (max-width: 660px) {
    .reasons {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        
        & > div:first-child {
            margin-bottom: 16.3vw;
        }
    }
    .reasons__title {
        font-size: 7.64vw;
        font-family: 'Montserrat-Bold';
        margin-bottom: 6vw;
    }
    .reasons__circle-left,
    .reasons__circle-right {
        z-index: -1;
        opacity: 0.5;

        transition: transform .05s linear;
    }
    .reasons__circle-left {
        top: 0vw;
        left: -160vw;

        width: 190vw;
        height: 190vw;
    }
    .reasons__circle-right {
        top: 162vw;
        right: -80vw;

        width: 105.6vw;
        height: 105.6vw;
    }
}
</style>