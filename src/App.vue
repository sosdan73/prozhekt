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
    components: { Main, Modal, ModalForm, },
    created() {
        document.addEventListener("DOMContentLoaded", function(event) {
            document.querySelectorAll('img').forEach( function(img) {
                img.onerror = () => {
                    img.classList.add('--error');
                };
            })
        });
    }
}
</script>

<style lang="scss">
@import "./assets/sass/colors.scss";

body, h1, h2, h3, p {
    margin: 0;
}
body {
    overflow-x: hidden;
    max-width: 100vw;
    width: 100vw;
    resize: none;
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
    max-width: 100vw;
    width: 100vw;
}

@media (max-width: 660px) {
    #app {
        font-size: 4.5vw;
    }
}
</style>
