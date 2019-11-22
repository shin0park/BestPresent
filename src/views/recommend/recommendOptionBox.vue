<template>
    <form name="recommendOptionBox">
        <div class="recommendOptionBox">
            <ul>
                <li class="recommendType">
                    <h2 class="recommendTypeTitle">성별</h2>
                    <template>
                        <input type="radio" id="female" name="gender" value="-5">
                        <label for="female">여성</label>
                        <input type="radio" id="male" name="gender" value="5">
                        <label for="male">남성</label>
                    </template>
                </li>
                <li class="recommendType">
                    <h2 class="recommendTypeTitle">연령대</h2>
                    <template>
                        <input type="radio" id="ten" name="age" value="1">
                        <label for="ten">10대</label>
                        <input type="radio" id="twenty" name="age" value="2">
                        <label for="twenty">20대</label>
                        <input type="radio" id="thirty" name="age" value="3">
                        <label for="thirty">30대</label>
                        <input type="radio" id="forty" name="age" value="4">
                        <label for="forty">40대</label>
                        <input type="radio" id="fifty" name="age" value="5">
                        <label for="fifty">50대 이상</label>
                    </template>
                </li>
                <li class="recommendType">
                    <h2 class="recommendTypeTitle">관계</h2>
                    <template>
                        <input type="radio" id="friend" name="relation" value="1">
                        <label for="friend">친구</label>
                        <input type="radio" id="couple" name="relation" value="2">
                        <label for="couple">연인</label>
                        <input type="radio" id="parent" name="relation" value="3">
                        <label for="parent">부모님</label>
                        <input type="radio" id="etcRelationship" name="relation" value="4">
                        <label for="etcRelationship">기타</label>
                    </template>
                </li>
                <li class="recommendType">
                    <h2 class="recommendTypeTitle">취미</h2>
                    <template>
                        <input type="radio" id="travel" name="hobby" value="trip">
                        <label for="travel">여행</label>
                        <input type="radio" id="music" name="hobby" value="music">
                        <label for="music">음악</label>
                        <input type="radio" id="sports" name="hobby" value="sport">
                        <label for="sports">스포츠</label>
                        <input type="radio" id="game" name="hobby" value="game">
                        <label for="game">게임</label>
                        <input type="radio" id="alcohol" name="hobby" value="drink">
                        <label for="alcohol">음주</label>
                        <input type="radio" id="culture" name="hobby" value="culture">
                        <label for="culture">문화생활</label>
                        <input type="radio" id="book" name="hobby" value="book">
                        <label for="book">독서</label>
                        <input type="radio" id="etcHobby" name="hobby" value="birth">
                        <label for="etcHobby">기타</label>
                    </template>
                </li>
                <li>
                    <label for="price" class="price">{{high}} 만원 이하</label>
                    <div class="sliderWrap">
                        <span class="sliderBtn">
                        </span>
                        <input name="price" id="price" type="range" min="0" max="100" v-model="high">
                    </div>
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
                type:'c_birth',
                high: 0
            }
        },
        methods: {
            async onRecommend(e) {
                e.preventDefault();
                const checkedArr = [];
                const radioEles = document.querySelectorAll('input[type="radio"]');
                radioEles.forEach((v,i) => {
                    if(v.checked) {
                        checkedArr.push(v.getAttribute('value'));
                    }
                });
                const price = document.getElementById('price');
                checkedArr.push(price.value);
                if(checkedArr.length<5) {
                    alert('모두 체크해주세요');
                    return;
                }
                console.log(checkedArr);
                await this.$api.addRecommend(this.$user.email,checkedArr[1],checkedArr[0],checkedArr[2],checkedArr[3],checkedArr[4]*10000);
                let itemList;
                await setTimeout(function () {
                    console.log("settimeout");
                    itemList = this.$api.readRecommend().then(function (itemList) {
                        this.$emit('sendItemList', itemList);
                        console.log("itemList");
                        console.log(itemList);
                        this.resetRadio();
                    }.bind(this)).catch(function (error) {
                        console.log(error);
                    });
                }.bind(this),1000*4);
                //itemList = await this.$api.readRecommend();
                // await this.$emit('sendItemList', itemList);
                // await console.log("itemList");
                // await console.log(itemList);
                // await this.resetRadio();
                //const itemList = await this.$api.readProducts('case',this.type);

            },
            resetRadio() {
                const radioEles = document.querySelectorAll('input[type="radio"]');
                radioEles.forEach(v => {
                    v.checked = false;
                    v.removeAttribute('checked');
                })
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
    }.price {
         border: 1px solid #bdbdbd;
         border-radius: 0;
         color: #212121;
         width: 80px;
         height: 20px;
         line-height: 20px;
     }
    input[type='range'] {
        width: 210px;
        height: 30px;
        overflow: hidden;
        cursor: pointer;
    }
    input[type='range'],
    input[type='range']::-webkit-slider-runnable-track,
    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
    }
    input[type='range']::-webkit-slider-runnable-track {
        width: 200px;
        height: 5px;
        background: #AAA;
    }
    input[type='range']::-webkit-slider-thumb {
        position: relative;
        height: 20px;
        width: 20px;
        margin-top: -8px;
        background: steelblue;
        border-radius: 50%;
        border: 2px solid white;
    }
    input[type='range']::-webkit-slider-thumb::before {
        position: absolute;
        content: '';
        height: 10px; /* equal to height of runnable track */
        width: 500px; /* make this bigger than the widest range input element */
        left: -502px; /* this should be -2px - width */
        top: 8px; /* don't change this */
        background: #777;
    }
    .sliderWrap {
        position: relative;
        height: 40px;
    }
    .sliderBtn {
        display: inline-block;
        position: absolute;
        height: 20px;
        width: 20px;
        margin-top: -5.5px;
        background: steelblue;
        border-radius: 50%;
        border: 2px solid white;
        box-sizing: border-box;
        top: 10px;
        left: -2px;
    }
</style>