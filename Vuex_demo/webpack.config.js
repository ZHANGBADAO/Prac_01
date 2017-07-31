"use strict"
var path =require("path");

module.exports = {
    entry:[path.resolve(__dirname,"src/main")],
    output:{
        filename:"main.bundle.js",
        path:path.resolve(__dirname,"build")
    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        }
    },
    module:{
       rules:[
           {test:/\.vue$/,loader:"vue-loader",exclude:/node_modules/},
           {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","stage-2"]},exclude:/node_modules/}
       ]
    }
}