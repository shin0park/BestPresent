<template>
    <div class="title">
        <ul>
            <li class="situationNav" @click="clickNav('birth', 0)">생일</li>
            <li class="situationNav" @click="clickNav('anniversary', 1)">기념일(애인)</li>
            <li class="situationNav" @click="clickNav('graduation', 2)">입학/졸업</li>
            <li class="situationNav" @click="clickNav('marry', 3)">결혼/집들이</li>
            <li class="situationNav" @click="clickNav('baby', 4)">출산/임신</li>
            <li class="situationNav" @click="clickNav('cheap', 5)">저렴한 선물</li>
            <li class="situationNav" @click="clickNav('expensive', 6)">고급 선물</li>
            <li class="situationNav" @click="clickNav('christmas', 7)">크리스마스 선물</li>
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