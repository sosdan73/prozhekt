<template>
    <div class="services__content">
        <h2 class="services__title" v-if="isDesktop">
            <span
                v-if="content.title.xl"
                class="--xl"
            >
                {{ content.title.xl }}
            </span>
            <span
                v-if="content.title.l"
                class="--l"
            >
                {{ content.title.l }}
            </span>
            <span v-if="content.title.m">
                {{ content.title.m }}
            </span>
            <span
                v-if="content.title.s"
                class="--s"
            >
                {{ content.title.s }}
            </span>
        </h2>
        <h2 class="services__title" v-else>
            <span
                class="d-block"
                :style="{fontSize: size}"
                :key="title"
                v-for="(size, title) in content.titleMobile"
            >
                {{ title }}
            </span>
        </h2>
        <div class="services__description">
            <p>{{ content.description }}</p>
        </div>
        <div class="services__row services__lists">
            <ul class="list" v-if="content.listLeft.isNested">
                <li
                    class="list__item"
                    :key="item.text"
                    v-for="item in content.listLeft.list"
                >
                    <span class="services__subtitle">{{ item.text }}</span>
                    <ul class="list" v-if="item.children">
                        <li
                            class="list__item"
                            :key="child"
                            v-for="child in item.children"
                        >
                            {{ child }}
                        </li>
                    </ul>
                </li>
            </ul>
            <ul
                v-else
                class="services__list"
                :class="{ '--width-restricted': content.listRight }"
            >
                <li class="services__subtitle services__list-item" v-if="content.listLeft.title">
                    {{ content.listLeft.title }}
                </li>
                <li
                    class="services__list-item"
                    :key="item"
                    v-for="item in content.listLeft.list"
                >
                    {{ item }}
                </li>
            </ul>
            <ul class="services__list --width-restricted" v-if="content.listRight">
                <li class="services__subtitle services__list-item" v-if="content.listRight.title">
                    {{ content.listRight.title }}
                </li>
                <li
                    class="services__list-item"
                    :key="item"
                    v-for="item in content.listRight.list"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="services__row">
            <div class="services__subtitle">Стоимость: {{ content.price }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['content'],
    computed: {
        isDesktop() {
            return window.innerWidth > 660;
        }
    },
}
</script>

<style lang="scss">
.services__row:not(:last-child) {
    margin-bottom: 3.85vw;
}
.services__title {
    padding-bottom: 4vw;
    display: flex;
    flex-direction: column;
    // height: 22vw;

    font-family: "Montserrat-Extrabold";
    font-size: 4.2vw;
    text-transform: lowercase;

    & .--xl {
        font-size: 9vw;
        line-height: 0.9;
    }
    & .--l {
        font-size: 6.4vw;
        line-height: 1.1;
    }
    & .--s {
        font-size: 2.1vw;
        text-transform: none;
    }
}
.services__description {
    width: 50vw;
    margin-bottom: 3.85vw;
    line-height: 1.3;
}
.services__lists {
    display: flex;
    
    & > .list,
    & > .services__list {
        margin-right: 2vw;
    }
}
.services__list {
    list-style-type: none;
    padding-left: 0;
}
.services__list.--width-restricted {
    max-width: 27vw;
}
.services__list-item {
    margin-bottom: 0.8vw;
}
.services__subtitle {
    font-family: "PTSans-Bold";
}

@media (max-width: 660px) {
    .services__title {
        margin-bottom: 4vw;
        margin-top: 65vw;
    }
    .services__description {
        width: 100%;
        height: unset;
        margin-bottom: 8vw;
    }
    .services__lists {
        height: unset;
        padding-bottom: 5vw;
        flex-direction: column;
    }
    .services__list.--width-restricted {
        max-width: unset;
        margin-bottom: 4vw;
    }
}
</style>