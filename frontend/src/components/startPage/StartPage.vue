<template>
    <div @click="nameTest">Добро пожаловать в  NAC </div>
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