"use strict"
import Vue from "vue";
import VueRouter from "vue-router";
import Cart from "../components/Cart.vue";
import Product from "../components/Product.vue";


Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:"/cart",component:Cart},
        {path:"/product",component:Product}
    ]
})