<template>
    <footer
        ref="self"
        class="footer --margin-top"
    >
        <div class="footer__logo">

        </div>
        <div class="app__offset footer__content section">
            <div class="footer__socials">
                <h3 class="footer__title">Мы в соц. сетях</h3>
                <RotationBlock>
                    <a class="d-block" href="tg://resolve?domain=prozhekt">телеграм</a>
                </RotationBlock>
                <RotationBlock>
                    <a class="d-block" href="google.com">вконтакте</a>
                </RotationBlock>
            </div>
            <div class="footer__news">
                <h3 class="footer__title">Мы в сми</h3>
            </div>
            <div class="footer__comms">
                <h3 class="footer__title">Мы на связи</h3>
                <a
                    class="d-block"
                    href="tel:84996852010"
                >
					+7 (499) 685 20 10
                </a>
                <a href="mailto:hello@prozhekt.info">hello@prozhekt.info</a>
                <br><br>
                <p>Москва, ул. Цветной бульвар, д. 11, стр. 6</p>
            </div>
            <div class="footer__info">
                © ПРОЖЕКТ 2022. Не является публичной офертой. ООО “ПРОЖЕКТ” ОГРН 1187746734867
            </div>
        </div>
    </footer>
</template>

<script>
import { GoTo } from '@/mixins/GoTo.js';
import RotationBlock from './Common/RotationBlock.vue';

export default {
    name: 'Footer',
    mixins: [GoTo],
    components: { RotationBlock, }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";

.footer {
    position: relative;

    &.--margin--top {
        margin-top: 2.55vw;
    }
}
.footer__logo {
    width: 23vw;
    height: 4.7vw;
    position: absolute;
    z-index: 300;
    top: -2.6vw;
    left: 11.5vw;

    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../assets/images/footer.png);
}

.footer__content {
    display: flex;
    flex-wrap: wrap;

    background-color: $footer;
    color: $white;
}

.footer__title {
    font-size: 1.64vw;
    font-family: "Montserrat-Extrabold";
    text-transform: lowercase;
    margin-bottom: 2vw;
}

.footer__socials {
    width: 15vw;
    margin-right: 15vw;
}

.footer__news {
    width: 24vw;
    margin-right: 2vw;
    display: none;
}

.footer__comms {
    width: 15vw;
}

.footer__info {
    width: 100%;
    margin-top: 4.6vw;

    font-size: 1vw;
}

@media (max-width: 660px) {
    .footer {
        position: relative;

        &.--margin-top {
            margin-top: 10vw;
        }
    }
    .footer__logo {
        width: 78.8vw;
        height: 15.45vw;
        top: -9.15vw;
        left: unset;
        right: 5.73vw;
    }

    .footer__content {
        flex-direction: column;
    }

    .footer__title {
        font-size: 5.46vw;
        margin-bottom: 6vw;
    }

    .footer__socials,
    .footer__news,
    .footer__comms {
        width: 100%;
        margin-right: 0;
        margin-bottom: 12.3vw;
    }

    .footer__info {
        width: 76.74vw;
        margin-top: 17.6vw;

        font-size: 3.2vw;
    }
}
</style>