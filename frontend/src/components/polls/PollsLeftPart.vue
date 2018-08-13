<template>
    <div class="polls-part">
        <div class="containrer-fluid title">
            <div class="row search-wrap">
                <div class="col-xl-6 col-lg-12">
                    Существующие анкеты
                </div>
                <div class="col-xl-6 col-lg-12 search">
                    <input type="text" class="form-control " id="search" placeholder="Поиск анкеты" v-model="search"> 
                    <img src="../../assets/search-icon.png" alt="search-icon">
                </div>
            </div>
        </div>
        <div class="btn-create-poll">
            <router-link to="/polls/create">
                <button>СОЗДАТЬ НОВУЮ АНКЕТУ</button>
            </router-link>
        </div>
        
        <div>
        <div class="card polls-item" v-for="poll in filterMembers">
            <div class="card-body">
                <h2 class="card-title breadcrumb">{{ poll.name_of_project }}</h2>
                <div class="card-text">
                    <p>анкету создал: <span>{{ poll.createdData }}</span></p>
                    <p>тип анкеты: <span>{{ poll.determination_of }}</span></p>
                
                    <p>наименование анкеты: <span>{{ poll.descriptions }}</span></p>
                    <p>язык анкеты: <span>{{ poll.language }}</span></p>
                    <p>версия анкеты: <span>{{ poll.version }}</span></p>
                
                </div>
                
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
        this.$store.dispatch('getPollListAction')
    },
    computed: {
        ...mapGetters([
            'resultsPollList'
        ]),
        filterMembers: function() {
            let filtered = this.resultsPollList;
            const search = this.search.toLowerCase();
            if (search) {
                filtered = this.resultsPollList.filter(
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
    .polls-content {
        padding: 2%;
    }
    .btn-create-poll {
        text-align: right;
        padding: 10px;
    }
    .btn-create-poll>a>button {
        background: #00a65a;
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        color: white;
    }
    .btn-create-poll>a>button:hover {
        background: #009451;
        border-radius: 3px;
        box-shadow: 3px 7px 9px #f1f1f1;
    }
    .polls-item {
        cursor: pointer;
        margin-bottom: 15px;
    }
    .polls-item:hover {
        box-shadow: 3px 7px 9px #f1f1f1;
    }
    .card-text>p {
        margin-bottom: 0;
        word-wrap: break-word;
    }
    span {
        color: #a7a7a7;    
    }
    .polls-poll-span {
        background: #e2e2e2;
        margin-right: 10px;
        padding: 3px 10px;
        color: #6b6b6b;
        font-size: 15px;
        border-radius: 3px;
    }
    .polls-proj>p{
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
    /* .title {
        padding: 10px;
        font-size: 20px;
        border-bottom: 1px solid #e4e4e4;
        margin-bottom: 15px;
    } */
</style>
