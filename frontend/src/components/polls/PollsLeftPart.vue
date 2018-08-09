<template>
    <div class="polls-part">
        <div class="title">
            Существующие анкеты
        </div>
        <div class="search">
            <input type="text" class="form-control " id="search" placeholder="Поиск проекта"> 
            <img src="../../assets/search-icon.png" alt="search-icon">
        </div>
        <div>
        <div class="card polls-item" v-for="poll in resultsPollList">
            <div class="card-body">
                <h2 class="card-title breadcrumb">{{ poll.name }}</h2>
                <div class="card-text">
                    <p>анкета создана: <span>{{ poll.createdData }}</span></p>
                    <p>создатель анкеты: <span>{{ poll.createdPersonName }}</span></p>
                
                    <p>анкета редактирована: <span>{{ poll.addedData }}</span></p>
                    <p>анкету редактировал: <span>{{ poll.addedPersonName }}</span></p>
                
                <div class="polls-proj">
                    <p> Принадлежность к проекту: <span v-for="poll in poll.project" class="polls-poll-span">{{ poll }}</span></p>
                    <p> Тип анкеты: <span v-for="tPoll in poll.typeOfPoll" class="polls-poll-span">{{ tPoll }}</span></p>
                    
                </div>
                </div>
                
            </div>
        </div>
        </div>
        <div class="btn-create-poll">
            <router-link to="/polls/create">
                <button>СОЗДАТЬ НОВУЮ АНКЕТУ</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    mounted() {
        this.$store.dispatch('getPollListAction')
    },
    computed: {
        ...mapGetters([
            'resultsPollList'
        ])
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
        border-top: 1px solid #e4e4e4;
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
</style>
