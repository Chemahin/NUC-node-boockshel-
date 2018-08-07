<template>
    <div>
        <div class="projects-main">
            <ProjectsLeftPart></ProjectsLeftPart>
            <ProjectsRightPart></ProjectsRightPart>
        </div>
        <div class="btn-create-proj">
            <button>СОЗДАТЬ НОВЫЙ ПРОЕКТ</button>
        </div>
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
        width: 50%;
        height: 50vh;
        margin-right: 10px;
        background: white;
    }
    .title {
        padding: 10px;
        font-size: 20px;
        border-bottom: 1px solid #e4e4e4;
    }

</style>
