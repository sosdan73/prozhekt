<template>
    <div class="select-container focused" ref="input">
        <label class="label">{{ placeholder }}</label>
        <select
            class="select"
            
            v-model="data"
            @focus="onFocus"
            @blur="onBlur"
        >
            <option value="телефон">телефон</option>
            <option value="телеграм">телеграм</option>
        </select>
    </div>
</template>

<script>
import FormInput from './FormInput.vue';

export default {
    name: 'FormSelect',
    extends: FormInput,
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/colors.scss";

$px: 1vw;
$pt: 1.1vw;
$pb: 1.1vw;

.select-container {
    position: relative;
    background-color: $white;
    padding: $pt $px $pb;
    border: 1px solid $grey;
    box-sizing: border-box;

    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 1.2vw;
        right: 1.6vw;
        width: 1vw;
        height: 1vw;
        transform: rotate(45deg);
        border-bottom: 1px solid $grey;
        border-right: 1px solid $grey;
    }
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
.select {
    font-size: 1.35vw;
    position: relative;
    z-index: 220;
    background-color: transparent;
    width: 100%;
    outline: 0;
    border: none;
    resize: none;
    box-sizing: border-box;
    font-family: 'PT Sans';
    font-weight: 400;
    appearance: none;
}
@media (max-width: 660px) {
    $px: 4vw;
    $pt: 3vw;
    $pb: 3vw;

    .select-container {
        padding: $pt $px $pb;

        &:after {
            top: 3.3vw;
            right: 4vw;
            width: 3vw;
            height: 3vw;
        }
    }
    .label {
        left: $px;
        top: $pt;
        z-index: 610;
    }
    .focused > .label {
        transform: translateY(calc((-1) * ($pt + 4.5vw))) translateX(calc((-1) * $px));
        font-size: 3.35vw;
    }
    .select {
        font-size: 4.5vw;
        z-index: 620;
    }
}
</style>