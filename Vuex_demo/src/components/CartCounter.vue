<template>
    <div><h1>{{num}}</h1></div>
</template>


<script type='text/ecmascript-6'>
    import Vue from "vue";
    import Vuex from "vuex";

    Vue.use(Vuex);
    export default {
        computed:Vuex.mapGetters({
            num:"getNum"
        })
    }
</script>

<style scoped>

</style>