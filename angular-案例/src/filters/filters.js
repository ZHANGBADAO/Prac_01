"use strict"


angular.module("com.xa.vshop.filters",[])
.filter("test",function(){
    return function(data){
        return data;
    }
})