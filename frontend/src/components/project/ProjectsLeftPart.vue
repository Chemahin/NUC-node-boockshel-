<template>
    <div class="projects-part">
        <div class="title">
            Существующие проекты
        </div>
        <div v-for="project in projects" class="project-item card">
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
        <div class="btn-create-proj">
            <router-link to="/projects/create">
                <button>СОЗДАТЬ НОВЫЙ ПРОЕКТ</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects:[
                    {
                    name: "Имя проектa № 1",
                    createdData: "22.02.2011",
                    createdPersonName: "Виктор Резник",
                    addedData: "04.08.2016",
                    addedPersonName: "Евгения Беляева",
                    polls: [
                        "poll #1",
                        "poll #2",
                        "poll #3",
                        "poll #4",
                        "poll #5",
                        "poll #6",
                        "poll #7"
                    ]
                    },
                    {
                        name: "Имя проектa № 2",
                        createdData: "11.01.2018",
                        createdPersonName: "Виктор Вальдес",
                        addedData: "14.03.2018",
                        addedPersonName: "Стивен Джерард",
                        polls: [
                            "poll #1",
                            "poll #2",
                            "poll #3",
                        ]
                    },
                    {
                        name: "Имя проекта № 3",
                        createdData: "11.12.2017",
                        createdPersonName: "Еден Азар",
                        addedData: "12.12.2017",
                        addedPersonName: "Еден Азар",
                        polls: [
                            "poll #1",
                            "poll #2"
                        ]
                    },
                    {
                        name: "Имя проекта № 4",
                        createdData: "25.06.2017",
                        createdPersonName: "Мухамед Салах",
                        addedData: "04.08.2017",
                        addedPersonName: "Садио Мане",
                        polls: [
                            "poll #1",
                            "poll #2",
                            "poll #3",
                            "poll #4",
                            "poll #5",
                            "poll #6"
                        ]
                    }
                ] 
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
        border-top: 1px solid #e4e4e4;
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
</style>
