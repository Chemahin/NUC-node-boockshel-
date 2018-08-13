<template>
    <div class="projects-part">
        <div class="containrer-fluid title">
            <div class="row search-wrap">
                <div class="col-xl-6 col-lg-12">
                    Существующие проекты
                </div>
                <div class="col-xl-6 col-lg-12 search">
                    <input type="text" class="form-control " id="search" placeholder="Поиск проекта" v-model="search"> 
                    <img src="../../assets/search-icon.png" alt="search-icon">
                </div>
            </div>
        </div>
        <div class="btn-create-proj">
            <router-link to="/projects/create">
                <button>СОЗДАТЬ НОВЫЙ ПРОЕКТ</button>
            </router-link>
        </div>
        
        <div v-for="project in filterMembers" class="project-item card">
            <div class="card-body">
                <h2 class="card-title breadcrumb">{{ project.name }}</h2>
                <div class="card-text">
                    <p>проект создан: <span>{{ project.createdData }}</span></p>
                    <p>создатель проекта: <span>{{ project.createdPersonName }}</span></p>
                
                    <p>проект редактирован: <span>{{ project.addedData }}</span></p>
                    <p>проект редактировал: <span>{{ project.addedPersonName }}</span></p>
                
                    <div class="project-polls">
                        <p> Анкеты: <span v-for="poll in project.polls" class="project-poll-span">{{ poll }}</span></p>
                        
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
        this.$store.dispatch('getProjectListAction')
    },
    
    computed: {
        ...mapGetters([
            'resultsProjectList'
        ]),
        filterMembers: function() {
            let filtered = this.resultsProjectList;
            const search = this.search;
            if (search) {
                filtered = this.resultsProjectList.filter(
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
    .projrct-content {
        padding: 2%;
    }
    .btn-create-proj {
        text-align: right;
        padding: 10px;
    }
    .btn-create-proj>a>button {
        background: #00a65a;
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        color: white;
    }
    .btn-create-proj>a>button:hover {
        background: #009451;
        border-radius: 3px;
        box-shadow: 3px 7px 9px #f1f1f1;
    }
    .project-item {
        cursor: pointer;
        margin-bottom: 15px;
    }
    .project-item:hover {
        box-shadow: 3px 7px 9px #f1f1f1;
    }
    .card-text>p {
        margin-bottom: 0;
        word-wrap: break-word;
    }
    span {
        color: #a7a7a7;    
    }
    .project-poll-span {
        background: #e2e2e2;
        margin-right: 10px;
        padding: 3px 10px;
        color: #6b6b6b;
        font-size: 15px;
        border-radius: 3px;
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
