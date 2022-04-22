<template>
    <div
        :class="{ 'hoverable': !noHover, 'reversed': reversed }"
        @click="onClick"
    >
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 278 236" style="enable-background:new 0 0 278 236;" xml:space="preserve" fill="currentColor">
            <polygon points="249.13,89.72 159.45,0.04 131.17,28.33 200.84,98 0.59,98 0.59,138 200.84,138 131.17,207.67 159.45,235.96 
            249.13,146.28 277.41,118 "/>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        reversed: {
            type: Boolean,
            default: false,
        },
        noHover: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/colors.scss";

.hoverable {
    transition: color .3s ease-in-out;
}
.hoverable:hover {
    color: $orange;
}
.reversed svg {
    transform: rotate(180deg);
}
</style>
