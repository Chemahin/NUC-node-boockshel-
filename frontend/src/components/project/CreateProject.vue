<template>
<div>
    <div class="projects-part">
        <div class="title">
            Создание нового проекта по существующему проекту
        </div>
        <b-container fluid class="card">
            <b-row>
                <div class="lg md-12 card-body">
                    <div class="search">
                        <input type="text" class="form-control " id="search" placeholder="Поиск проекта"> 
                        <img src="../../assets/search-icon.png" alt="search-icon">
                    </div>
                    <div class="searchRes"></div>
                </div> 
                <div class="lg md-12 card-body">
                    <button class="btn-use-proj">Использовать как шаблон</button>
                </div> 
            </b-row>   
        </b-container> 
    </div>
    <div class="projects-part">
        <div class="title">
            Создание нового проекта
        </div>
        <b-container fluid >
            <b-row>
                <b-col lg md-12 class="name-of-project">
                    <p>Введите имя проекта</p>
                    <input type="text" class="form-control " id="newNameProlect" placeholder="Имя нового проекта">
                    <p>Выберете методы проекта</p>
                    <input type="text" class="form-control " id="newNameProlect" placeholder="Имя нового проекта">
                    <button class="btn-use-proj">Сохранить проект</button>
                </b-col>
                <b-col lg md-12>
                    dsfsdfsdf
                </b-col>
                
            </b-row> 
        </b-container>
        
    </div>
    

</div>
    
</template>

<script>
    export default {
        data () {
            return {
                date: '',
            }
        }
    }
</script>


<style scoped>
    .projects-part {
        margin-right: 10px;
        background: white;
        padding: 15px;
        margin: 1% 3%;
    }
    .btn-use-proj {
        background: #00a65a;
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        color: white;
    }
    .btn-use-proj:hover {
        background: #009451;
        border-radius: 3px;
        box-shadow: 3px 7px 9px #f1f1f1;
    }
    .search {
        display: flex;
        height: 40px;
    }
    .serch>input {
        width: 70%;
    }
    .search>img {
        width: 40px;
    }

    
    .name-of-project>input {
        width: 70%;
    }
    .title {
        padding: 10px;
        font-size: 20px;
        border-bottom: 1px solid #e4e4e4;
        margin-bottom: 15px;
    }
</style>
