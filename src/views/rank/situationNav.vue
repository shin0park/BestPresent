<template>
    <div class="title">
        <ul>
            <li class="situationNav" @click="clickNav('c_birth', 0)">생일</li>
            <li class="situationNav" @click="clickNav('c_anniversary', 1)">기념일(애인)</li>
            <li class="situationNav">입학/졸업</li>
            <li class="situationNav">결혼/집들이</li>
            <li class="situationNav">출산/임신</li>
            <li class="situationNav">저렴한 선물</li>
            <li class="situationNav">고급 선물</li>
            <li class="situationNav">크리스마스 선물<</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "situationNav",
        data() {
            return {

            }
        },
        props: {
            listIndex: Number
        },
        methods: {
            clickNav(clickType, index) {
                console.log(clickType);
                const liEls = document.querySelectorAll('.situationNav');
                liEls.forEach((v) => {
                    v.classList.remove('clickedNav');
                });
                liEls[index].classList.add('clickedNav');
                this.$emit('sendType', clickType)
            }
        },
        mounted() {
            const liEls = document.querySelectorAll('.situationNav');
            liEls[this.listIndex].classList.add('clickedNav');
        }
    }
</script>

<style scoped>
    .title {
        white-space: nowrap;
        overflow-x: auto;
    }
    .situationNav {
        margin: 0 0 16px 10px;
        font-size: 21px;
        font-weight: 900;
        display: inline-block;
        color: #e0e0e0;
    }
    .clickedNav {
        color: #212121;
    }
</style>