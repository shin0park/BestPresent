<template>
    <div>
        <section class="situationSection">
            <h1 class="title">어떤 선물을 찾으시나요?</h1>
            <div class="situationBox">
                <ul>
                    <li class="situationList" v-for="(situation, situationIndex) in situations" v-on:click="onClickSituation(situationIndex, situation.type)">
                        <i class="material-icons">
                            {{situation.icon}}
                        </i>
                        {{situation.name}}
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                situations: [{icon: 'cake', name: '생일', type: 'birth'}, {icon: 'favorite', name: '기념일(애인)', type: 'anniversary'},{icon: 'school', name: '입학/졸업', type: 'graduation'},{icon: 'house', name: '결혼/집들이', type: 'marry'},
                        {icon: 'child_care', name: '출산/임신', type: 'baby'}, {icon: 'money_off', name: '저렴한 선물', type: 'cheap'},{icon: 'monetization_on', name: '고급 선물', type: 'expensive'},{icon: 'notifications', name: '크리스마스', type: 'christmas'},]
            }
        },
        methods: {
            onClickSituation(situationIndex, type) {
                this.$router.push({name: 'situationPage', params: {"index": situationIndex, "type": type}})
            }
        }
    }
</script>

<style scoped>
    .situationSection {
        width: 100%;
        margin-top: 30px;
    }
    .title {
        margin: 0 0 16px 10px;
        font-size: 21px;
        font-weight: 900;
    }
    .situationBox {
        padding: 20px 10px;
        border-radius: 22px;
        box-sizing: border-box;
        box-shadow: 2px 2px 6px #bdbdbd;
    }
    .situationBox ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .situationList {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 25%;
        padding: 10px 0;
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: 700;
        color: #212121;
        text-align: center;
        box-sizing: border-box;
    }
    .situationList .material-icons {
        margin-bottom: 10px;
        color: #212121;
    }
</style>
