<template>
    <div class="header__links-container">
        <div
            class="header__burger"
            :class="{'--active': linksShown}"
            @click="linksShown = !linksShown"
        >
            <div class="burger__line"></div>
            <div class="burger__line"></div>
            <div class="burger__line"></div>
        </div>
        <div
            class="header__links"
            :class="{'--active': linksShown}"
        >
            <a @click="goTo('services')" class="header__link --underlined">Услуги</a>
            <!-- <a @click="goTo('team')" class="header__link --underlined">Команда</a> -->
            <a @click="goTo('cases')" class="header__link --underlined">Кейсы</a>
            <a @click="goTo('footer')" class="header__link --underlined">Контакты</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                linksShown: false,
                clickable: true,
            }
        },
        methods: {
            toggleMenu() {
                if (this.clickable) {
                    this.clickable = false;
                    setTimeout(() => {
                        this.clickable = true;
                    }, 300);
                   this.linksShown = !this.linksShown;
                }
            },
            goTo(link) {
                this.linksShown = false;
                this.$emit('onScroll', link);
            },
        },
        computed: {
            showLinks() {
                return this.linksShown || window.innerWidth > 660;
            }
        },
    }
</script>

<style lang="scss" scoped>
@use "sass:math";
@import "../../assets/sass/colors.scss";
@import "../../assets/sass/mixins.scss";

$x: 6.6vw;
$y: 5.7vw;

.header__burger {
    display: none;
    position: relative;
    cursor: pointer;
    width: $x;
    height: $y;
}

.header__burger.--active {
    .burger__line:nth-child(1) {
        transform: rotate(math.atan($y / $x)) translateX(calc(math.sin(math.atan($y / $x)) * 2 * $y / 5)) translateY(calc(math.cos(math.atan($y / $x)) * 2 * $y / 5));
    }
    .burger__line:nth-child(2) {
        transform: scaleX(0);
    }
    .burger__line:nth-child(3) {
        transform: rotate(calc((-1) * math.atan($y / $x))) translateX(calc(math.sin(math.atan($y / $x)) * 2 * $y / 5)) translateY(calc(math.cos(math.atan($y / $x)) * 2 * $y / (-5)));
    }
}

.burger__line {
    position: absolute;
    left: 0;
    width: $x;
    height: calc($y / 5);
    background-color: currentColor;
    transition: transform .3s ease-in-out,
                opacity .3s ease-in-out;
    margin: 0 auto;

    &:nth-child(1) {
        top: 0;
    }
    &:nth-child(2) {
        top: calc($y * 2 / 5);
    }
    &:nth-child(3) {
        top: calc($y * 4 / 5);
    }
}

.header__links {
    display: flex;
    align-items: center;
}

.header__link {
    font-family: 'Duck4game';
    font-size: 1.25vw;
    margin-left: 2.5vw;
    text-transform: uppercase;
    cursor: pointer
}

.header__link.--underlined {
    @include underline(0.25vw);
    color: $grey;

    &:hover {
        color: $dark-blue;
        @include underline-active(0.25vw);
    }
}

@media (max-width:660px) {
    .header__burger {
        display: block;
        z-index: 500;
    }

    .header__links {
        position: absolute;
        z-index: 400;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: $white;

        flex-direction: column;
        align-items: center;
        justify-content: center;

        opacity: 0.6;
        transform: translateY(-100vh);
        transition: opacity .3s ease-in-out,
                    transform .3s ease-in-out;

        &.--active {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .header__link {
        display: block;
        width: fit-content;
        font-size: 5vw;
        margin: 5vw 0;
    }

    .header__link.--underlined {
        @include underline(0.8vw);
        color: $grey;

        &:hover {
            color: $dark-blue;
            @include underline-active(0.8vw);
        }
    }
}
</style>