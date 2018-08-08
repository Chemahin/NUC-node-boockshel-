<template>
    <div>
        <b-container fluid class="polls-main">
        <b-row>
        <b-col lg md-12>
            <QuestionsLeftPart></QuestionsLeftPart>
        </b-col>
        <b-col lg md-12>
            <QuestionsRightPart></QuestionsRightPart>
        </b-col>
        </b-row>
        </b-container>
        
    </div>
</template>

<script>
    import QuestionsLeftPart from './QuestionsLeftPart';
    import QuestionsRightPart from './QuestionsRightPart';
    export default {
        components:{
            QuestionsLeftPart,
            QuestionsRightPart
        }
    }
</script>

<style>
    .questions-main {
        width: 100%;
        display: flex;
        justify-content: flex-start;

    }
    .questions-part {
        margin-right: 10px;
        background: white;
        padding: 15px;
    }
    .title {
        padding: 10px;
        font-size: 20px;
        border-bottom: 1px solid #e4e4e4;
        margin-bottom: 15px;
    }

</style>
