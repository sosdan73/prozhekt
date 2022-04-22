<template>
    <vueper-slides
        class="cases__slider no-shadow"
        :visible-slides="3"
        :touchable="false"
        :dragging-distance="5"
    >
        <template #arrow-left>
            <div class="cases__arrow">
                <Arrow class="cases__arrow" reversed />
            </div>
        </template>

        <template #arrow-right>
            <Arrow class="cases__arrow" />
        </template>

        <vueper-slide
            v-for="item in cases"
            :key="item.id"
        >
            <template #content>
                <div class="cases__card" @click="openModal(item)">
                    <div class="cases__image">
                        <img :src="`/images/${'lighthouse'}.png`" alt>
                    </div>
                    <h3 class="cases__title">{{ item.title }}</h3>
                    <div>{{ item.companyName ? item.companyName : item.subtitle }}</div>
                </div>
            </template>
        </vueper-slide>
    </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import Arrow from '../Common/Arrow.vue';

export default {
    components: { VueperSlides, VueperSlide, Arrow, },
    props: ['cases'],
    methods: {
        openModal(item) {
            this.$modal.show(item);
        },
    },
}
</script>