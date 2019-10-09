<template>
    <div>
        <section class="situationSection">
            <h1 class="title">어떤 선물을 찾으시나요?</h1>
            <div class="situationBox">
                <ul>
                    <li class="situationList" v-for="situation in situations" v-on:click="onClickSituation(situation.name)">
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
                situations: [{icon: 'cake', name: '생일'}, {icon: 'favorite', name: '기념일(애인)'},{icon: 'school', name: '입학/졸업'},{icon: 'house', name: '결혼/집들이'},
                    {icon: 'child_care', name: '출산/임신'}, {icon: 'money_off', name: '저렴한 선물'},{icon: 'monetization_on', name: '고급 선물'},{icon: 'notifications', name: '크리스마스'},]
            }
        },
        methods: {
            onClickSituation(n) {
                alert(n);
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
