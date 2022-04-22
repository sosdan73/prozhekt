<template>
    <div class="input-container" ref="input">
        <label class="label">{{ placeholder }}</label>
        <textarea
            class="input"
            type="text"
            v-model="data"
            @focus="onFocus"
            @blur="onBlur"
        ></textarea>
    </div>
</template>

<script>
import FormInput from './FormInput.vue';

export default {
    name: 'FormTextarea',
    extends: FormInput,
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/colors.scss";

$px: 1vw;
$pt: 0.8vw;
$pb: 1.2vw;

.input-container {
    position: relative;
    background-color: $white;
    padding: $pt $px $pb;
    border: 1px solid $grey;
    box-sizing: border-box;
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
    font-size: 1.35vw;
    position: relative;
    z-index: 220;
    background-color: transparent;
    width: 100%;
    height: 100%;
    outline: 0;
    border: none;
    resize: none;
    box-sizing: border-box;
}
</style>