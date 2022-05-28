<template>
    <div class="welcome">
        <Arrow class="welcome__arrow" />
        <div class="welcome__content">
            <div class="--row">
                <h2 class="welcome__title">
                    <span class="--bold">Интеллектуальный маркетинг </span>
                    <span class="--regular">для бизнеса </span>
                    <span class="--regular">
                        и личного бренда
                    </span>
                </h2>
            </div>
            <div class="--row">
                <p class="welcome__description">
                    Упаковываем и продвигаем личный бренд и бизнес, умножаем охваты и масштабируем прибыль от блога и бизнеса 
                </p>
            </div>
            <div class="welcome__buttons">
                <a href="tg://resolve?domain=prozhekt">
                    <button class="pixel-button">
                        Написать в телеграм
                    </button>
                </a>
                <button
                    class="pixel-button --outline"
                    @click="openForm"
                >
                    Оставить заявку
                </button>
            </div>
        </div>
        <div class="welcome__circles">
            <div class="welcome__circle-inner"></div>
            <div class="welcome__circle-outer"></div>
        </div>
    </div>
</template>

<script>
import Arrow from "./Common/Arrow.vue";

export default {
    components: { Arrow, },
    methods: {
        openForm() {
            this.$modalForm.show('Главный экран');
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";

.welcome {
    padding: 12vw 0;
    display: flex;
    justify-content: center;
    margin-right: -2vw;
    
    & > div {
        margin-right: 2vw;
    }
}
.welcome__arrow {
    width: 2.4vw;
    height: 2.1vw;

    align-self: flex-end;
    margin-bottom: 1.35vw;

    color: $orange;
}
.welcome__content {
    width: 46vw;

    .--row {
        margin-bottom: 3.6vw;
    }
}
.welcome__title {
    font-size: 2.7vw;
    font-family: 'Montserrat';

    .--bold {
        font-family: 'Montserrat-Bold';
    }
}
.welcome__description {
    font-size: 1.7vw;
}
.welcome__buttons {
    display: flex;

    & > *:first-child {
        margin-right: 2vw;
    }
}
.welcome__circles {
    width: 29vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
$size: 8.65vw;
.welcome__circle-inner {
    position: absolute;
    top: calc(50% - $size / 2);
    left: calc(50% - $size / 2);

    width: $size;
    height: $size;

    background-color: $orange;
    border-radius: 50%;
}
.welcome__circle-outer {
    width: $size;
    height: $size;

    border: 2px solid $orange;
    border-radius: 50%;
    animation: circle_resize 2s ease-out 0s infinite normal none;
}

@keyframes circle_resize {
    from {
        transform: scale(1);
        opacity: 1;
    } 60% {
        opacity: 0.7;
    } to {
        opacity: 0;
        transform: scale(2);
    }
}

@media (max-width: 660px) {
    .welcome {
        padding: 14vw 5.73vw;
        display: block;
        margin-right: 0;
        
        & > div {
            margin-right: 0;
        }
    }
    .welcome__arrow {
        display: none;
    }
    .welcome__content {
        width: auto;

        .--row {
            margin-bottom: 13vw;
        }
    }
    .welcome__title {
        font-size: 7.8vw;
        
        .--regular {
            display: block;

            &:nth-child(2) {
                width: 60vw;
            }
        }
        .--bold {
            font-family: 'Montserrat-Bold';
        }
    }
    .welcome__description {
        font-size: 5.6vw;
    }
    .welcome__buttons {
        flex-direction: column;

        & > *:nth-child(1) {
            margin-right: 0;
            margin-bottom: 4vw;
        }

        & > *:nth-child(2) {
            width: 100%;
        }
    }
    .welcome__circles {
        display: none;
    }
}
</style>