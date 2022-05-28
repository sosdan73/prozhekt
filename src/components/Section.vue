<template>
    <div class="app__offset instructions section">
        <div class="instructions__image"></div>
        <div>
            <div class="instructions__row">
                <h2 class="instructions__title">
                    Сложности<br>с получением оплаты<br>от клиентов?
                </h2>
            </div>
            <div class="instructions__row whitespace-large">
                <p class="instructions__paragraph">Сейчас как никогда актуален выход на зарубежный рынок, но одной из проблем является прием оплат из-за введенных ограничений всех платежных систем.</p>
                <p class="instructions__paragraph">Как это обойти, какие еще сложности могут возникнуть при работе с Европой, как увеличить клиентопоток в России и многое другое мы рассказываем в закрытом телеграм канале.</p>
                <p class="instructions__paragraph">Чтобы узнавать всю актуальную информацию и скачать чек-лист по приему оплат из-за границы, нажимайте на кнопку и подписывайтесь.</p>
            </div>
            <div class="instructions__row">
                <a href="tg://resolve?domain=prozhekt">
                    <button class="pixel-button --outline">
                        Получить чек-лист<br>по работе с заграницей
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.instructions {
    display: flex;

    & > div {
        width: calc(50% - 1vw);
    }
}

.instructions__image {
    margin-right: 2vw;
    align-self: stretch;
    background-image: url(../assets/images/instructions.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.instructions__row:not(:last-child) {
    margin-bottom: 2.7vw;
}

.instructions__title {
    font-size: 2.86vw;
    font-family: "Montserrat-Bold";
}

@media (max-width: 660px) {
    .instructions {
        flex-direction: column;

        & > div {
            width: 100%;
        }
    }

    .instructions__image {
        margin-right: 0;
        height: 110vw;
    }

    .instructions__row:not(:last-child) {
        margin-bottom: 4vw;
    }
    .instructions__row:last-child {
        margin-top: 9vw;
    }

    .instructions__title {
        font-size: 9.55vw;
        padding: 9vw 0 5vw;
    }

    .instructions__paragraph {
        margin-bottom: 3vw;
    }
}
</style>