"use strict"


/**
 * App.js:用来配置项目的入口:
 * 全局的方法: config():配置全局路由
 * 根模块：
 **/

//在app.js文件中配置的模块是整个项目的根模块
//[] 表示依赖的其它的子模块
angular.module(
    "com.xa.vshop",
    [
        "com.xa.vshop.controllers",
        "com.xa.vshop.directives",
        "com.xa.vshop.filters",
        "com.xa.vshop.services"
    ])