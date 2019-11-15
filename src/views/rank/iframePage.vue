<template>
    <iframe id="iframe">

    </iframe>
</template>

<script>
    export default {
        name: "iframePage",
        mounted() {
            const iframe = document.getElementById('iframe');
            console.log(this.$route.params.address);
            iframe.setAttribute('src', this.$route.params.address);
        }
    }
</script>

<style scoped>
    iframe {
        display: block;
        border: none;
        height: 85vh;
        width: 100vw;
    }
</style>