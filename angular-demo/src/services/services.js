"use strict"

angular.module("com.xa.cateyesmovie.services",[])
.service("mainService",function($http){

    this.getMainAdList = function(){
        return [
            "assets/img/banner1.png",
            "assets/img/banner2.png",
            "assets/img/banner3.png",
            "assets/img/banner4.png",
            "assets/img/banner5.png",
            "assets/img/banner6.png",
            "assets/img/banner7.png",
            "assets/img/banner8.png"
        ]
    }
})