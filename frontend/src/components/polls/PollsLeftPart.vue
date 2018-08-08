<template>
    <div class="polls-part">
        <div class="title">
            Существующие анкеты
        </div>
        <div class="card polls-item" v-for="poll in polls">
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
        <div class="btn-create-poll">
            <router-link to="/polls/create">
                <button>СОЗДАТЬ НОВУЮ АНКЕТУ</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                polls:[
                    {
                        name: "Анкета № 1",
                        createdData: "22.02.2011",
                        createdPersonName: "Виктор Резник",
                        addedData: "04.08.2016",
                        addedPersonName: "Евгения Беляева",
                        project: [
                            "Имя проектa № 1",
                            "Имя проектa № 3"
                        ],
                        typeOfPoll: [
                            'face to face опрос'
                        ]
                    },
                    {
                        name: "Анкета № 2",
                        createdData: "11.01.2018",
                        createdPersonName: "Виктор Вальдес",
                        addedData: "14.03.2018",
                        addedPersonName: "Стивен Джерард",
                        project: [
                            "Имя проектa № 1",
                            "Имя проектa № 2",
                            "Имя проектa № 14",
                        ],
                        typeOfPoll: [
                            'web-опрос'
                        ]
                    },
                    {
                        name: "Анкета № 3",
                        createdData: "11.12.2017",
                        createdPersonName: "Еден Азар",
                        addedData: "12.12.2017",
                        addedPersonName: "Еден Азар",
                        project: [
                            "Имя проектa № 1",
                            "Имя проектa № 6",
                            "Имя проектa № 11"
                        ],
                        typeOfPoll: [
                            'телефонный опроc'
                        ]
                    },
                    {
                        name: "Анкета № 4",
                        createdData: "25.06.2017",
                        createdPersonName: "Мухамед Салах",
                        addedData: "04.08.2017",
                        addedPersonName: "Садио Мане",
                        project: [
                            "Имя проектa № 1"
                        ],
                        typeOfPoll: [
                            'face to face опрос',
                            'телефонный опроc',
                            'web-опрос'
                        ]
                    },
                    {
                        name: "Анкета № 5",
                        createdData: "11.12.2017",
                        createdPersonName: "Еден Азар",
                        addedData: "12.12.2017",
                        addedPersonName: "Еден Азар",
                        project: [
                            "Имя проектa № 7"
                        ],
                        typeOfPoll: [
                            'телефонный опроc',
                            'web-опрос'
                        ]
                    },
                    {
                        name: "Анкета № 6",
                        createdData: "11.12.2017",
                        createdPersonName: "Еден Азар",
                        addedData: "12.12.2017",
                        addedPersonName: "Еден Азар",
                        project: [
                            "Имя проектa № 10"
                        ],
                        typeOfPoll: [
                            'тweb-опрос'
                        ]
                    },
                ] 
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
