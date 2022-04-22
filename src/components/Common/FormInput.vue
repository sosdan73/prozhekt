<template>
    <div class="input-container" ref="input">
        <label class="label">{{ placeholder }}</label>
        <input
            class="input"
            type="text"
            v-model="data"
            @focus="onFocus"
            @blur="onBlur"
        >
    </div>
</template>

<script>
    export default {
        name: 'FormInput',
        props: {
            placeholder: {
                type: String,
                required: true,
            },
            model: {
                type: String,
                required: true,
            },
        },
        computed: {
            data: {
                get() {
                    return this.model;
                },
                set(value) {
                    this.$emit('update:model', value);
                },
            }
        },
        methods: {
            onFocus() {
                this.$refs.input.classList.add('focused');
            },
            onBlur() {
                if (!this.model) {
                    this.$refs.input.classList.remove('focused');
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
@import "../../assets/sass/colors.scss";

$px: 1vw;
$pt: 1.2vw;
$pb: 1.2vw;

.input-container {
    position: relative;
    background-color: $white;
    border: 1px solid $grey;
    box-sizing: border-box;
    padding: $pt $px $pb;
}
.label {
    position: absolute;
    left: $px;
    top: $pt;
    color: $grey;
    z-index: 210;
    transition: transform .15s ease-out, font-size .15s ease-out;
}
.focused > .label {
    transform: translateY(calc((-1) * ($pt + 1.2vw))) translateX(calc((-1) * $px));
    font-size: 0.9vw;
}
.input {
    position: relative;
    z-index: 220;
    background-color: transparent;
    width: 100%;
    outline: 0;
    border: none;
    border-radius: 0;
    box-sizing: border-box;
}
</style>