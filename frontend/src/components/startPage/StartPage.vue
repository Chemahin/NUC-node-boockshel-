<template>
    <div @click="nameTest">
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
