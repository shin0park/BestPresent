<template>
    <div>
        <section class="categoryTap">
            <situationSection></situationSection>
            <div class="adBox">
                <img src="../../assets/ad.png">
            </div>
            <rankSection></rankSection>
        </section>
    </div>
</template>

<script>
    import situationSection from './situationSection'
    import rankSection from './rankSection'
    export default {
        components: {
            'situationSection': situationSection,
            'rankSection': rankSection
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .categoryTap {
        padding: 0 16px;
        width: 100%;
        box-sizing: border-box;
    }
    .adBox {
        margin: 20px 0;
    }
    .adBox img {
        width: 100%;
    }
</style>
