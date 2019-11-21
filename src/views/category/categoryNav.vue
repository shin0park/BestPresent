<template>
    <div class="title">
        <ul>
            <li class="categoryNav" @click="clickNav('clothes', 0)">패션 의류</li>
            <li class="categoryNav" @click="clickNav('stuff', 1)">패션 잡화</li>
            <li class="categoryNav" @click="clickNav('beauty', 2)">화장품/미용</li>
            <li class="categoryNav" @click="clickNav('TV', 3)">디지털/가전</li>
            <li class="categoryNav" @click="clickNav('life', 4)">생활/건강</li>
            <li class="categoryNav" @click="clickNav('furniture', 5)">가구/인테리어</li>
            <li class="categoryNav" @click="clickNav('baby', 6)">출산/육아</li>
            <li class="categoryNav" @click="clickNav('food', 7)">식품</li>
            <li class="categoryNav" @click="clickNav('sports', 8)">스포츠/레저</li>
            <li class="categoryNav" @click="clickNav('culture', 9)">여행/문화</li>
            <li class="categoryNav" @click="clickNav('tax', 10)">면세점</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "categoryNav",
        props: {
            listIndex: Number
        },
        methods: {
            clickNav(clickType, index) {
                console.log(clickType);
                const liEls = document.querySelectorAll('.categoryNav');
                liEls.forEach((v) => {
                    v.classList.remove('clickedNav');
                });
                liEls[index].classList.add('clickedNav');
                this.$emit('sendType', clickType)
            },
        },
        mounted() {
            const liEls = document.querySelectorAll('.categoryNav');
            liEls[this.listIndex].classList.add('clickedNav');
        }
    }
</script>

<style scoped>
    .title {
        white-space: nowrap;
        overflow-x: auto;
    }
    .categoryNav {
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