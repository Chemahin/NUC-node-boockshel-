<template>
    <div>
        <b-container fluid class="polls-main">
        <b-row>
        <b-col lg md-12>
            <PollsLeftPart></PollsLeftPart>
        </b-col>
        <b-col lg md-12>
            <PollsRightPart></PollsRightPart>
        </b-col>
        </b-row>
        </b-container>
        
    </div>
</template>

<script>
    import PollsLeftPart from './PollsLeftPart';
    import PollsRightPart from './PollsRightPart';
    export default {
        components:{
            PollsLeftPart,
            PollsRightPart
        }
    }
</script>

<style>
    .polls-main {
        width: 100%;
        display: flex;
        justify-content: flex-start;

    }
    .polls-part {
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
