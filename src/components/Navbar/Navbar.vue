<template>
    <header class="header app__offset-s">
        <h1 class="header__logo">Прожект</h1>
        <div class="header__subtitle">
            <div class="--wordbreak">Маркетинговое агенство</div>
        </div>
        <NavbarLinks @onScroll="goTo"/>
    </header>
</template>

<script>
import NavbarLinks from './NavbarLinks';

export default {
    components: { NavbarLinks, },
    methods: {
        goTo(link) {
            this.$emit('onScroll', link);
        }
    },
}
</script>

<style lang="scss">
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
    border-bottom: 0.4vw solid currentColor;
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

@media (max-width: 660px) {
    .header {
        height: 18.9vw;
    }

    .header__logo {
        margin-right: 6.4vw;
        font-size: 4vw;
        border-block-width: 1vw;
    }

    .header__subtitle {
        font-size: 2.4vw;
        
        .--wordbreak {
            width: 20vw;
            word-break: normal;
        }
    }
}
</style>