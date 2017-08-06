"use strict"

angular.module("com.xa.cateyesmovie.directives",[])
.directive("mTabs",function(){
    return {
        restrict:"AE",
        templateUrl:"template/main-tabs-tpl.html",
        replace:true
    }
}).directive("mContent",function(){
    return {
        restrict:"AE",
        templateUrl:"template/main-tpl.html",
        replace:true
    }
})