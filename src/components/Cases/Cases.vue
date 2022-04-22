<template>
    <div ref="self" class="cases section bg-lightgrey">
        <div>
            <h2 class="section__subtitle app__offset-l">
                кейсы: личный бренд / инфопродукт
            </h2>
            <CasesSlider :cases="casesPersonal" />
        </div>
        <div>
            <h2 class="section__subtitle app__offset-l">
                кейсы: бизнес
            </h2>
            <CasesSlider :cases="casesBusiness" />
        </div>
    </div>
</template>

<script>
import { GoTo } from '@/mixins/GoTo.js';
import { casesPersonal, casesBusiness } from '../../data';
import CasesSlider from './CasesSlider.vue';

export default {
    mixins: [GoTo],
    components: { CasesSlider },
    data() {
        return {
            casesPersonal,
            casesBusiness
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/sass/colors.scss";

.cases {
    display: flex;
    flex-direction: column;
    & > div:first-child {
        margin-bottom: 6.5vw;
    }
}

.vueperslides__parallax-wrapper {
    margin: auto;
    width: 75vw;
}
.vueperslides__bullets {
    display: none;
}
.vueperslides__arrows--outside .vueperslides__arrow--prev {
    left: 3.125vw;
}
.vueperslides__arrows--outside .vueperslides__arrow--next {
    right: 3.125vw;
}
.vueperslides__arrow svg {
    fill: currentColor;
    padding: 0;
    width: 3vw;
}
.vueperslide {
    width: calc((100% / 3) - 2vw) !important;
    margin-right: 2vw;
}

.cases__card {
    display: flex;
    flex-direction: column;
    gap: 2vw;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
}


.cases__image {
    width: 100%;
    height: 17vw;
    background-color: $grey;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.cases__title {
    font-size: 1.8vw;
    font-family: "Montserrat-Bold";
}
</style>