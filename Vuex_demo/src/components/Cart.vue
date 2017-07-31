<template>
    <div>
        <cart-counter></cart-counter>
        <input type="button" value="update" @click="update">
    </div>
</template>


<script type='text/ecmascript-6'>
    import CartCounter from "./CartCounter.vue";
    import Vue from "vue";
    import Vuex from "vuex";

    Vue.use(Vuex);
    export default {
        components:{
            CartCounter
        },
        methods:{
            update:function(){
                this.$store.dispatch("ADD")
            }
        }
    }
</script>

<style scoped>

</style>