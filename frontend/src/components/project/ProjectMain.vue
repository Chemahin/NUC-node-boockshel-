<template>
    <div>
        <b-container fluid class="projects-main">
        <b-row>
        <b-col lg md-12>
            <ProjectsLeftPart></ProjectsLeftPart>
        </b-col>
        <b-col lg md-12>
            <ProjectsRightPart></ProjectsRightPart>
        </b-col>
        </b-row>
        </b-container>
        
    </div>
</template>

<script>
    import ProjectsLeftPart from './ProjectsLeftPart';
    import ProjectsRightPart from './ProjectsRightPart';
    export default {
        components:{
            ProjectsLeftPart,
            ProjectsRightPart
        }
    }
</script>

<style>
    .projects-main {
        width: 100%;
        display: flex;
        justify-content: flex-start;

    }
    .projects-part {
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
