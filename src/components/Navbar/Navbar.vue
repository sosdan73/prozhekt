<template>
    <header class="header app__offset-s">
        <h1 class="header__logo">Прожект</h1>
        <div class="header__subtitle">Маркетинговое агенство</div>
        <div class="header__links">
            <a @click="goTo('services')" class="header__link --underlined">Услуги</a>
            <a @click="goTo('team')" class="header__link --underlined">Команды</a>
            <a @click="goTo('cases')" class="header__link --underlined">Кейсы</a>
            <a @click="goTo('footer')" class="header__link --underlined">Контакты</a>
        </div>
    </header>
</template>

<script>
    export default {
        methods: {
            goTo(link) {
                this.$emit('onScroll', link);
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "../../assets/sass/colors.scss";
@import "../../assets/sass/mixins.scss";

.header {
    display: flex;
    align-items: center;

    height: 6.8vw;
}

.header__logo {
    margin-right: 2.5vw;
    font-family: 'Duck4game';
    font-size: 1.875vw;
    cursor: default;

    &:hover {
        animation: change_color .4s linear 0s infinite normal none;
    }
}

.header__subtitle {
    font-size: 1.25vw;
    text-transform: lowercase;
    opacity: 0.5;
    flex-grow: 1;
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

$list: $orange, $blue, $purple, $dark-green, $dark-blue, $grey, $yellow, $red;
@keyframes change_color {
    0% {
        color: nth($list, 1);
    } 12% {
        color: nth($list, 2);
    } 25% {
        color: nth($list, 3);
    } 37% {
        color: nth($list, 4);
    } 50% {
        color: nth($list, 5);
    } 62% {
        color: nth($list, 6);
    } 75% {
        color: nth($list, 7);
    } 87% {
        color: nth($list, 8);
    } 100% {
        color: nth($list, 1);
    }
}
</style>