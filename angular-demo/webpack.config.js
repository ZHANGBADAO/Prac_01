"use strict"
var path = require("path");


module.exports = {
    entry:[path.resolve(__dirname,"src/App")],
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"build")
    }
}