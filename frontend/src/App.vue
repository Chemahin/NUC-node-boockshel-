<template>
  <div class="wrap">
    <Navigation></Navigation>
    <div class="pages-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import "bootstrap/dist/css/bootstrap.min.css";
  //import "bootstrap-vue/dist/bootstrap-vue.css";
  import Navigation from './components/Navigation';
    export default {
        components:{
            Navigation
        }
    }
</script>

<style leng="scss">
  body{
    margin: 0;
    padding: 0;
  }
  .wrap {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: flex-start;
    }
    .pages-content {
        width: 90%;
        padding: 20px;
        background: #ecf0f5;
    }
</style>