<template>
    <div class="questions-part">
        <div class="containrer-fluid title">
            <div class="row search-wrap">
                <div class="col-xl-6 col-lg-12">
                    Существующие вопросы
                </div>
                <div class="col-xl-6 col-lg-12 search">
                    <input type="text" class="form-control " id="search" placeholder="Поиск вопроса" v-model="search"> 
                    <img src="../../assets/search-icon.png" alt="search-icon">
                </div>
            </div>
        </div>
        <div class="btn-create-question">
            <router-link to="/questions/create">
                <button>СОЗДАТЬ НОВЫЙ ВОПРОС</button>
            </router-link>
        </div>
        <div class="card questions-item" v-for="question in filterMembers">
            <div class="card-body">
                <div class="card-text">
                    <p>тело вопроса: <span>{{ question.body_of_question }}</span></p>
                    <p>версия вопроса: <span>{{ question.version }}</span></p>
                
                    <p>тип ответа: <span>{{ question.type_of_answer }}</span></p>
                </div>    
            </div>
        </div>
        <div v-if="notFind"> <span>Не найдено</span> </div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    data() {
        return {
            search: "",
            select: "",
            notFind: false
        }
    },
    mounted() {
        this.$store.dispatch('getQuestionListAction')
    },
    computed: {
        ...mapGetters([
            'resultsQuestionList'
        ]),
        filterMembers: function() {
            let filtered = this.resultsQuestionList;
            const search = this.search;
            if (search) {
                filtered = this.resultsQuestionList.filter(
                    m => {
                        let hasMatches = false;
                        for (const key in m) {
                            const element = m[key];
                            if (Array.isArray(element)) {
                                for( let i = 0; i < element.length; i++) {
                                    if(`${element[i]}`.toLowerCase().indexOf(search) > -1) {
                                        hasMatches = true;
                                        break;
                                    }
                                }
                                continue;
                            } else {
                                if (`${element}`.toLowerCase().indexOf(search) > -1) {
                                    hasMatches = true;
                                    break;
                                }
                            }
                            
                        }
                        return hasMatches;
                    }
                );
            }

            (filtered.length === 0) ? this.notFind = true : this.notFind = false;
            return filtered;
            
        }
    }
}

</script>

<style scoped>
    .questions-content {
        padding: 2%;
    }
    .btn-create-question {
        text-align: right;
        padding: 10px;
    }
    .btn-create-question>a>button {
        background: #00a65a;
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        color: white;
    }
    .btn-create-question>a>button:hover {
        background: #009451;
        border-radius: 3px;
        box-shadow: 3px 7px 9px #f1f1f1;
    }
    .questions-item {
        cursor: pointer;
        border: 1px solid #e4e4e4;
        margin-bottom: 10px;
    }
    .questions-item:hover {
        box-shadow: 3px 7px 9px #f1f1f1;
    }
    .card-text>p {
        margin-bottom: 0;
        word-wrap: break-word;
    }
    span {
        color: #a7a7a7;    
    }
    .questions-question-span {
        background: #e2e2e2;
        margin-right: 10px;
        padding: 3px 10px;
        color: #6b6b6b;
        font-size: 15px;
        border-radius: 3px;
    }
    .questions-proj>p{
        margin: 2px;
    }
    .search{
        display: flex;
        height: 35px;
    }
    .search>input {
        height: 30px;
    }
    .search>img {
        width: 30px;
        height: 30px;
    }
</style>
