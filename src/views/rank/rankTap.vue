<template>
    <div>
        <section class="categoryTap">
            <situationSection></situationSection>
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
</style>
