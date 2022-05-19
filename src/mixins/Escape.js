export const Escapable = {
    created() {
        const escapeHandler = (e) => {
            if (e.key === 'Escape' && this.visible) {
                this.hide();
            }
        }

        document.addEventListener('keydown', escapeHandler);

        this.$once('hook:destroyed', () => {
            document.removeEventListener('keydown', escapeHandler);
        });
    }
}