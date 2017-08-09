"use strict"
var events = require("events");
var Assign = require("object-assign");

export default Assign({},events.EventEmitter.prototype,{
    infoLists:[],
    getInfos:function(){
        return this.infoLists;
    },
    addInfos:function(val){
        this.infoLists.push(val);
        //当state发生变化,事件通知view进行变化
        this.emitChange();
    },
    emitChange(){
       this.emit("change");
    },
    addStateChangerLister(cb){
        this.on("change",cb)
    },
    removeStateChangerLister(){
        this.removeListner("change")
    }
})



