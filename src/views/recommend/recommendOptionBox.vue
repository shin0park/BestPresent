<template>
    <form name="recommendOptionBox">
        <div class="recommendOptionBox">
            <ul>
                <li class="recommendType">
                    <h2 class="recommendTypeTitle">성별</h2>
                    <template>
                        <input type="radio" id="female" name="gender" value="female">
                        <label for="female">여성</label>
                        <input type="radio" id="male" name="gender" value="male">
                        <label for="male">남성</label>
                    </template>
                </li>
                <li class="recommendType">
                    <h2 class="recommendTypeTitle">연령대</h2>
                    <template>
                        <input type="radio" id="ten" name="age" value="ten">
                        <label for="ten">10대</label>
                        <input type="radio" id="twenty" name="age" value="twenty">
                        <label for="twenty">20대</label>
                        <input type="radio" id="thirty" name="age" value="thirty">
                        <label for="thirty">30대</label>
                        <input type="radio" id="forty" name="age" value="forty">
                        <label for="forty">40대</label>
                        <input type="radio" id="fifty" name="age" value="fifty">
                        <label for="fifty">50대</label>
                        <input type="radio" id="sixty" name="age" value="sixty">
                        <label for="sixty">60대 이상</label>
                    </template>
                </li>
                <li class="recommendType">
                    <h2 class="recommendTypeTitle">관계</h2>
                    <template>
                        <input type="radio" id="parent" name="relationship" value="parent">
                        <label for="parent">부모님</label>
                        <input type="radio" id="friend" name="relationship" value="friend">
                        <label for="friend">친구</label>
                        <input type="radio" id="couple" name="relationship" value="couple">
                        <label for="couple">연인</label>
                        <input type="radio" id="teacher" name="relationship" value="teacher">
                        <label for="teacher">선생님</label>
                        <input type="radio" id="colleague" name="relationship" value="colleague">
                        <label for="colleague">직장 동료</label>
                        <input type="radio" id="etcRelationship" name="relationship" value="etcRelationship">
                        <label for="etcRelationship">기타</label>
                    </template>
                </li>
                <li class="recommendType">
                    <h2 class="recommendTypeTitle">취미</h2>
                    <template>
                        <input type="radio" id="travel" name="hobby" value="travel">
                        <label for="travel">여행</label>
                        <input type="radio" id="sports" name="hobby" value="sports">
                        <label for="sports">스포츠</label>
                        <input type="radio" id="music" name="hobby" value="music">
                        <label for="music">음악</label>
                        <input type="radio" id="game" name="hobby" value="game">
                        <label for="game">게임</label>
                        <input type="radio" id="alcohol" name="hobby" value="alcohol">
                        <label for="alcohol">음주</label>
                        <input type="radio" id="culture" name="hobby" value="culture">
                        <label for="culture">문화생활</label>
                        <input type="radio" id="book" name="hobby" value="book">
                        <label for="book">독서</label>
                        <input type="radio" id="etcHobby" name="hobby" value="etcHobby">
                        <label for="etcHobby">기타</label>
                    </template>
                </li>
            </ul>
            <button class="recommendBtn" v-on:click="onRecommend">추천받기</button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            onRecommend(e) {
                e.preventDefault();
                const checkedArr = [];
                const radioEles = document.querySelectorAll('input[type="radio"]');
                radioEles.forEach((v,i) => {
                    if(v.checked) {
                        checkedArr.push(v.getAttribute('value'));
                    }
                });
                if(checkedArr.length<4) {
                    alert('모두 체크해주세요');
                    return;
                }

            }
        }
    }
</script>

<style scoped>
    .recommendOptionBox {
        display: flex;
        flex-direction: column;
        /*position: relative;*/
        padding: 20px;
        border-radius: 22px;
        /*height: 500px;*/
        box-sizing: border-box;
        box-shadow: 2px 2px 6px #bdbdbd;
    }
    .recommendOptionBox ul {
        flex-grow: 1;
        align-self: center;
    }
    .recommendType {
        margin-bottom: 10px;
    }
    .recommendTypeTitle {
        margin-bottom: 8px;
        font-size: 10px;
        font-weight: 900;
    }
    input[type="radio"] {
        width: 0;
        height: 0;
        padding: 0;
        border: 0;
        margin: 0;
    }
    input[type="radio"]:checked + label {
        background-color: #E61923;
        color: white;
    }
    label {
        display: inline-block;
        border: 1px solid #E61923;
        border-radius: 4px;
        margin-bottom: 6px;
        width: 40px;
        height: 16px;
        background-color: white;
        color: #E61923;
        font-size: 8px;
        font-weight: 400;
        text-align: center;
        line-height: 16px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .recommendBtn {
        /*position: absolute;*/
        /*bottom: 0;*/
        border-radius: 4px;
        width: 100%;
        height: 40px;
        font-size: 12px;
        font-weight: 700;
        color: white;
        background-color: #E61923;
    }
</style>