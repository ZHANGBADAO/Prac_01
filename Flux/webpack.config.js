"use strict"
var path = require("path");

module.exports={
    entry:{
        app:path.resolve(__dirname,"src/main")
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"build")
    },
    module:{
        rules:[
            {test:/\.jsx$/,loader:"babel-loader",query:{presets:["es2015","react"]},exclude:/node_modules/,include:/src/},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","react"]},exclude:/node_modules/,include:/src/}
        ]
    }
}