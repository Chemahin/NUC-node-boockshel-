<template>
    <div class="nav-panel">
        <router-link to="/projects" active-class>
            <div class="nav-item">Проект</div>
        </router-link>
        <router-link to="/polls" >
            <div class="nav-item">Анкета</div>
        </router-link >
        <router-link to="/questions">
            <div class="nav-item">Вопросы</div>
        </router-link>
        <router-link to="/tags">
            <div class="nav-item">Теги</div>
        </router-link>
    </div>
</template>

<script>
    
    
</script>

<style leng="scss" scoped>
    a {
        text-decoration: none;
    }

    .nav-panel {
        width: 200px;
        min-height: 100vh;
        background: #222d32;
    }
    .nav-item {
        color: #b8c7ce;
        font-size: 17px;
        padding: 11px 5px;
    }
    .nav-item:hover{
        background: #1e282c;
        color: white;
    }
    .router-link-exact-active>div {
        background: #1e282c;
    }
</style>