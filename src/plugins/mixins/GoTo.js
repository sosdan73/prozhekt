export const GoTo = {
    methods: {
        goTo() {
            const element = this.$refs.self;
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    },
}