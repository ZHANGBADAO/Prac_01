"use strict";
module.exports= {
    getKefu:function () {
        var kefuData={
            "dataTop":[
                {"ms":"17","title":"商品关注","url":"#"},
                {"ms":"2","title":"店铺关注","url":"#"},
                {"ms":"91","title":"浏览记录","url":"jilu.html"},
                {"ms":"xe6d0;","title":"客户服务","url":"#"}
            ],
            "dataBottom":[
                {"ms":"xe66a;","title":"我的活动","url":"huodong.html"},
                {"ms":"xe70a;","title":"社区","url":"Community.html"},
                {"ms":"xe62b;","title":"京东众筹","url":"#"},
                {"ms":"xe6bb;","title":"京东超市","url":"#"}
            ]
        };
        return kefuData;
    },
    getMyfk:function () {
        var fkData=[
            {"itext":"1608","sp":"待付款","url":"#"},
            {"itext":"0","sp":"代收款","url":"#"},
            {"itext":"0.00","sp":"待评价","url":"#"},
            {"itext":"0.00","sp":"退换/售后","url":"#"},
            {"itext":"xe6b7;","sp":"我的钱包","url":"#"}
        ];
        return fkData;
    },
    getMyadd:function () {
        var mdd=[
            {"itext":"&#xe627;","sp":"待付款"},
            {"itext":"xe620;","sp":"代收款"},
            {"itext":"xe686;","sp":"待评价"},
            {"itext":"xe62e;","sp":"退换/售后"},
            {"itext":"xe669;","sp":"我的订单"}
        ];
        return mdd;
    },
    getMy:function () {
        var myData={
            "headbg":"JDproject/src/static/images/mycartTop.png",
            "headbgb":"JDproject/src/static/images/mybg.png",
            "myhead":"JDproject/src/static/images/touxiang.png",
            "myName":"MrTigerCy",
            "myVip":"金牌会员＞",
            "myxy":"小白信用95.1＞"
        };
        return myData;
    }
}