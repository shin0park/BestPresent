<template>
    <div>
        <section class="recommendTap">
            <h1 class="title">어떤 분에게 선물하시나요?</h1>
            <form>
                <div class="recommendOptionBox">
                    <ul>
                        <li class="recommendType">
                            <h2 class="recommendTypeTitle">성별</h2>
                            <template>
                                <input type="checkbox" id="female" name="gender" value="female">
                                <label for="female">여성</label>
                                <input type="checkbox" id="male" name="gender" value="male">
                                <label for="male">남성</label>
                            </template>
                        </li>
                        <li class="recommendType">
                            <h2 class="recommendTypeTitle">연령대</h2>
                            <template>
                                <input type="checkbox" id="ten" name="age" value="ten">
                                <label for="ten">10대</label>
                                <input type="checkbox" id="twenty" name="age" value="twenty">
                                <label for="twenty">20대</label>
                                <input type="checkbox" id="thirty" name="age" value="thirty">
                                <label for="thirty">30대</label>
                                <input type="checkbox" id="forty" name="age" value="forty">
                                <label for="forty">40대</label>
                                <input type="checkbox" id="fifty" name="age" value="fifty">
                                <label for="fifty">50대</label>
                                <input type="checkbox" id="sixty" name="age" value="sixty">
                                <label for="sixty">60대 이상</label>
                            </template>
                        </li>
                        <li class="recommendType">
                            <h2 class="recommendTypeTitle">관계</h2>
                            <template>
                                <input type="checkbox" id="parent" name="relationship" value="parent">
                                <label for="parent">부모님</label>
                                <input type="checkbox" id="friend" name="relationship" value="friend">
                                <label for="friend">친구</label>
                                <input type="checkbox" id="couple" name="relationship" value="couple">
                                <label for="couple">연인</label>
                                <input type="checkbox" id="teacher" name="relationship" value="teacher">
                                <label for="teacher">선생님</label>
                                <input type="checkbox" id="colleague" name="relationship" value="colleague">
                                <label for="colleague">직장 동료</label>
                                <input type="checkbox" id="etcRelationship" name="relationship" value="etcRelationship">
                                <label for="etcRelationship">기타</label>
                            </template>
                        </li>
                    </ul>
                    <button type="submit" class="recommendBtn" v-on:click="onRecommend">추천받기</button>
                </div>
            </form>
        </section>
    </div>
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
            }
        }
    }
</script>

<style scoped>
    .recommendTap {
        padding: 0 16px;
        margin-top: 30px;
        width: 100%;
        box-sizing: border-box;
    }
    .title {
        margin: 0 0 16px 10px;
        font-size: 21px;
        font-weight: 900;
    }
    .recommendOptionBox {
        display: flex;
        flex-direction: column;
        /*position: relative;*/
        padding: 20px;
        border-radius: 22px;
        height: 500px;
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
    input[type="checkbox"] {
        width: 0;
        height: 0;
        padding: 0;
        border: 0;
        margin: 0;
    }
    input[type="checkbox"]:checked + label {
        background-color: #E61923;
        color: white;
    }
    label {
        display: inline-block;
        border: 1px solid #E61923;
        border-radius: 4px;
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
