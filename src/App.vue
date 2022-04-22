<template>
    <div id="app">
        <Main/>
        <Modal/>
        <ModalForm/>
    </div>
</template>

<script>
import Main from "./components/Main.vue";
import Modal from "./components/Common/Modal.vue";
import ModalForm from "./components/Common/ModalForm.vue";

export default {
    name: 'App',
    components: { Main, Modal, ModalForm, }
}
</script>

<style lang="scss">
@import "./assets/sass/colors.scss";

body, h1, h2, h3, p {
    margin: 0;
}
a {
    text-decoration: none;
    color: currentColor;
}
ul {
    margin-top: 0;
    margin-bottom: 0;
}

#app {
    font-family: 'PT Sans', sans-serif;
    font-size: 1.35vw;
    overflow-x: hidden;
}
</style>
