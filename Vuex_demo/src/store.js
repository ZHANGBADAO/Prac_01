"use strict"
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
   //共享的状态 {}
    state:{
        num:0
    },
    //纯函数 pure function /不能ajax
    mutations:{
        "ADDNUM":function(state,payload){
            state.num++;
        }
    },
    //用来接收外部传过来的修改状态的事件
    //this.$store.dispatch("ADD")
    actions:{
        //ajax
        "ADD":function(store){
            //请求上级 ajax
            store.commit("ADDNUM","add sand")
        }
    },
    //共享的状态获取入口
    getters:{
        getNum:function(state){
            return state.num
        }
    }
})