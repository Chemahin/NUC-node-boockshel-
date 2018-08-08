<template>
<div>
  <HeaderPart></HeaderPart>
  <div class="wrap">
    <Navigation></Navigation>
    <div class="pages-content">
      <router-view></router-view>
      <FooterPart></FooterPart>
    </div>
  </div>
  
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap-vue/dist/bootstrap-vue.css";
  import Navigation from './components/Navigation';
  import HeaderPart from './components/HeaderPart';
  import FooterPart from './components/FooterPart';
    export default {
        components:{
            Navigation,
            HeaderPart,
            FooterPart
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
        min-height: 100vh;
        padding-top: 20px;
        background: #ecf0f5;
        position: relative;
        padding-bottom: 5%;
    }
</style>