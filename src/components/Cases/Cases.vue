<template>
    <div ref="self" class="cases section bg-lightgrey">
        <div>
            <h2 class="section__subtitle app__offset-l">
                кейсы: личный бренд / инфопродукт
            </h2>
            <Slider :data="casesPersonal"/>
            <!-- <CasesSlider :cases="casesPersonal" /> -->
        </div>
        <div>
            <h2 class="section__subtitle app__offset-l">
                кейсы: бизнес
            </h2>
            <Slider :data="casesBusiness"/>
            <!-- <CasesSlider :cases="casesBusiness" /> -->
        </div>
    </div>
</template>

<script>
import { GoTo } from '@/mixins/GoTo.js';
import { casesPersonal, casesBusiness } from '../../data';
import Slider from './Slider.vue';

export default {
    mixins: [GoTo],
    components: { Slider, },
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

    background-color: $lightgrey;
    
    & > div:first-child {
        margin-bottom: 6.5vw;
    }
}

@media (max-width: 660px) {
    .cases > div:first-child {
        margin-bottom: 17vw;
    }
}
</style>