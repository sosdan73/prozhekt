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
    transition: transform .4s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
}
.secondary {
    transform: rotateX(-90deg) translateY(50%);
}
.rotate {
    width: 1px;
    height: 1.36vw;
    margin-bottom: 0.5vw;
}
.rotate:hover .primary {
    transform: rotateX(90deg) translateY(-50%);
}
.rotate:hover .secondary {
    transform: rotateX(0) translateY(0);
}

@media (max-width: 660px) {
    .rotate {
        height: 4.6vw;
    }
}
</style>