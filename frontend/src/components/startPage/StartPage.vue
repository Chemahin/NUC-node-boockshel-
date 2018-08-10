<template>
    <div @click="nameTest" class="row">
      <div class="col-xs-12">
        <h2>Добро пожаловать в НАЦ</h2>
      </div>
    </div>
</template>

<script>
    export default {
        methods: {
            nameTest() {
                console.log(this.$store.state.test)
            }
        }
    }
</script>

<style>

</style>
