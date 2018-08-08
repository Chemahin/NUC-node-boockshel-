<template>
    <div class="questions-part">
        <div class="title">
            Существующие вопросы
        </div>
        <div class="card questions-item" v-for="question in questions">
            <div class="card-body">
                <h2 class="card-title breadcrumb">{{ question.name }}</h2>
                <div class="card-text">
                    <p>вопрос создан: <span>{{ question.createdData }}</span></p>
                    <p>создатель вопроса: <span>{{ question.createdPersonName }}</span></p>
                
                    <p>вопрос редактирован: <span>{{ question.addedData }}</span></p>
                    <p>Вопрос редактировал: <span>{{ question.addedPersonName }}</span></p>
                
                <div class="questions-proj">
                    <p> Тег вопроса: <span v-for="tQuestion in question.tagOfquestion" class="questions-question-span">{{ tQuestion }}</span></p>
                    <p> Принадлежность к анкете: <span v-for="question in question.poll" class="questions-question-span">{{ question }}</span></p>
                    
                </div>
                </div>
                
            </div>
        </div>
        <div class="btn-create-question">
            <router-link to="/questions/create">
                <button>СОЗДАТЬ НОВЫЙ ВОПРОС</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                questions:[
                    {
                        name: "Вопрос № 1",
                        createdData: "22.02.2011",
                        createdPersonName: "Виктор Резник",
                        addedData: "04.08.2016",
                        addedPersonName: "Евгения Беляева",
                        tagOfquestion: [
                            "тег 1",
                            "тег 3"
                        ],
                        poll: [
                            'face to face опрос',
                            'телефонный опроc',
                            'web-опрос'
                        ]
                    },
                    {
                        name: "Вопрос № 2",
                        createdData: "22.02.2011",
                        createdPersonName: "Виктор Резник",
                        addedData: "04.08.2016",
                        addedPersonName: "Евгения Беляева",
                        tagOfquestion: [
                            "тег 1",
                            "тег 3",
                            "тег 7"
                        ],
                        poll: [
                            'face to face опрос',
                            'телефонный опроc'
                        ]
                    },
                    {
                        name: "Вопрос № 3",
                        createdData: "22.02.2011",
                        createdPersonName: "Виктор Резник",
                        addedData: "04.08.2016",
                        addedPersonName: "Евгения Беляева",
                        tagOfquestion: [
                            "тег 1",
                            "тег 3"
                        ],
                        poll: [
                            'face to face опрос'
                        ]
                    },
                    {
                        name: "Вопрос № 4",
                        createdData: "22.02.2011",
                        createdPersonName: "Виктор Резник",
                        addedData: "04.08.2016",
                        addedPersonName: "Евгения Беляева",
                        tagOfquestion: [
                            "тег 1",
                            "тег 3"
                        ],
                        poll: [
                            'face to face опрос',
                            'телефонный опроc',
                            'web-опрос'
                        ]
                    },
                    {
                        name: "Вопрос № 5",
                        createdData: "22.02.2011",
                        createdPersonName: "Виктор Резник",
                        addedData: "04.08.2016",
                        addedPersonName: "Евгения Беляева",
                        tagOfquestion: [
                            "тег 1",
                            "тег 3"
                        ],
                        poll: [
                            'face to face опрос',
                            'телефонный опроc',
                            'web-опрос'
                        ]
                    }
                ] 
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
        border-top: 1px solid #e4e4e4;
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
        margin-bottom: 15px;
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
</style>
