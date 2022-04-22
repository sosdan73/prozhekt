<template>
    <div class="rotate">
        <div class="container">
            <div class="primary">
                <slot #default/>
            </div>
            <div class="secondary">
                <slot #default/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
}
.primary,
.secondary {
    transition: transform .2s ease-in-out;
}
.secondary {
    position: absolute;
    transform: rotateX(-90deg) translateY(-70%);
}
.rotate {
    width: fit-content;
}
.rotate:hover .primary {
    transform: rotateX(90deg) translateY(-70%);
}
.rotate:hover .secondary {
    transform: rotateX(0) translateY(-100%);
}
</style>