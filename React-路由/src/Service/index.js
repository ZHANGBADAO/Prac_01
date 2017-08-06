"use strict";
/**
 * 逻辑层从数据获取数据精选筛选数据处理
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    //获取banner数据集
    getBanner: function () {
        var imgList = ["JDproject/src/static/images/banner1.jpg", "JDproject/src/static/images/banner2.jpg", "JDproject/src/static/images/banner1.jpg"];
        return imgList;
    },
    //获取广告数据
    getAdd: function (num) {
        var addImg = ["JDproject/src/static/images/ad1.jpg", "JDproject/src/static/images/ad2.jpg", "JDproject/src/static/images/ad3.jpg", "JDproject/src/static/images/ad4.jpg"];
        return addImg[num];
    },
    //获取导航数据
    getNav:function () {
        var navDate=[
            {"imgscr":"JDproject/src/static/images/ioc1.png","title":"京东超市"},
            {"imgscr":"JDproject/src/static/images/ioc2.png","title":"全球购"},
            {"imgscr":"JDproject/src/static/images/ioc3.png","title":"服装城"},
            {"imgscr":"JDproject/src/static/images/ioc4.png","title":"京东生鲜"},
            {"imgscr":"JDproject/src/static/images/ioc5.png","title":"京东到家"},
            {"imgscr":"JDproject/src/static/images/ioc6.png","title":"充值缴费"},
            {"imgscr":"JDproject/src/static/images/ioc7.png","title":"领京豆"},
            {"imgscr":"JDproject/src/static/images/ioc8.png","title":"领卷"},
            {"imgscr":"JDproject/src/static/images/ioc9.png","title":"惠赚钱"},
            {"imgscr":"JDproject/src/static/images/ioc10.png","title":"物流查询"},
         ];
        return navDate;
    },
    //热门推荐数据
    getTuijian:function () {
        var tuijian={
            "titImg":"JDproject/src/static/images/news-tit.png",
            "tjNews":[
                {"tp":"推","cont":"iphone小功能是决胜关键是决胜关键"},
                {"tp":"热","cont":"Moto Z2 play独家是决胜关键"},
                {"tp":"爆","cont":"启赋荣耀上市，部分满仓"},
                {"tp":"抢","cont":"告诉你吹空调有多伤身"}
            ]
        }
        return tuijian;
    },
    getFenLeiTitle:function(n) {
        var titImgbg="JDproject/src/static/images/floor-tit.png";
        var titImg=["JDproject/src/static/images/aish.png","JDproject/src/static/images/sp.png","JDproject/src/static/images/tese.jpg"];
        var aitt={
            "tjbg":titImgbg,
            "tjimg":titImg[n]
        }
        return aitt;
    },
    getaishP:function () {
        var aishData={
            "ulTop":[
                {"s1":"玩3C","p1":"iPhone 超低价","sp1":"更多优惠GO！","i1":"JDproject/src/static/images/ai1.jpg"},
                {"s1":"京东家电","p1":"冰洗减400","sp1":"家电清凉节","i1":"JDproject/src/static/images/ai2.jpg"},
                {"s1":"京东超市","p1":"美食满99减50","sp1":"更多优惠","i1":"JDproject/src/static/images/ai3.jpg"},
                {"s1":"爱家","p1":"家具满499-50","sp1":"北欧美式家具","i1":"JDproject/src/static/images/ai4.jpg"}
            ],
            "c1":"#ff4a7d",
            "ulBottom":[
                {"s2":"爱宝宝","p2":"爆款低至5折","i2":"JDproject/src/static/images/ait1.jpg"},
                {"s2":"爱美丽","p2":"大牌免费试用","i2":"JDproject/src/static/images/ait2.jpg"},
                {"s2":"爱吃","p2":"低至9.9包邮","i2":"JDproject/src/static/images/ait3.jpg"},
                {"s2":"爱宝宝","p2":"199-100","i2":"JDproject/src/static/images/ait4.jpg"}
            ]
        }
        return aishData;
    },
    getXpz:function () {
        var aishData2={
            "ulTop":[
                {"s1":"全球尖货","p1":"买3免1","sp1":"更多","i1":"JDproject/src/static/images/sp1.jpg"},
                {"s1":"京东精选","p1":"精选优质生活","sp1":"品质推荐","i1":"JDproject/src/static/images/sp2.jpg"},
                {"s1":"京东体育","p1":"夏装换新","sp1":"运动潮牌","i1":"JDproject/src/static/images/sp3.jpg"},
                {"s1":"奢品大牌","p1":"奢品满减","sp1":"优惠GO！","i1":"JDproject/src/static/images/sp4.jpg"}
            ],
            "c1":"#952dff",
            "ulBottom":[
                {"s2":"环球时尚","p2":"低至399","i2":"JDproject/src/static/images/spt1.jpg"},
                {"s2":"珠宝首饰","p2":"大牌PK","i2":"JDproject/src/static/images/spt2.jpg"},
                {"s2":"设计师","p2":"潮流设计精选","i2":"JDproject/src/static/images/spt3.jpg"},
                {"s2":"买手甄选","p2":"大牌199减100","i2":"JDproject/src/static/images/spt4.jpg"}
            ]
        }
        return aishData2;
    },
    getTse:function () {
        var aishData3={
            "ulTop":[
                {"s1":"美食城","p1":"好货99减40","sp1":"品质推荐","i1":"JDproject/src/static/images/tese1.jpg"},
                {"s1":"时尚馆","p1":"尖货低至5折","sp1":"GO","i1":"JDproject/src/static/images/tese2.jpg"},
                {"s1":"大家电馆","p1":"清凉不只5折","sp1":"运动潮牌","i1":"JDproject/src/static/images/tese3.jpg"},
                {"s1":"电脑办公","p1":"0元试用","sp1":"好货尝鲜！","i1":"JDproject/src/static/images/tese4.jpg"}
            ],
            "c1":"#0072f2",
            "ulBottom":[
                {"s2":"母婴馆","p2":"满299减100","i2":"JDproject/src/static/images/teset1.jpg"},
                {"s2":"手机数码","p2":"S8购机赠礼","i2":"JDproject/src/static/images/teset2.jpg"},
                {"s2":"鞋靴箱包","p2":"99元2件","i2":"JDproject/src/static/images/teset3.jpg"},
                {"s2":"小家电馆","p2":"每满100减10","i2":"JDproject/src/static/images/teset4.jpg"}
            ]
        }
        return aishData3;
    },
    getWntj:function () {
        var wntjData={
            "titImg":"JDproject/src/static/images/wntj.png",
            "liDate":[
                {"price":"499","sp1":"FIIL Diva 头戴式无线耳机 曜石黑 智能降噪 智能启停 智能语音搜歌 滑动触控","srcimg":"JDproject/src/static/images/g1.jpg"},
                {"price":"190","sp1":"漫步者（EDIFIER）W855BT 立体声头戴式蓝牙耳机 爵士黑","srcimg":"JDproject/src/static/images/g2.jpg"},
                {"price":"849","sp1":"铁三角ATH-MSR7/SR5BT陌生人妻 头戴式便携耳机 线控带麦HiFi耳机 msr7黑色+送耳机支架","srcimg":"JDproject/src/static/images/g3.jpg"},
                {"price":"199","sp1":"小米（MI）头戴式耳机轻松版 白色 有线线控游戏降噪音乐耳麦","srcimg":"JDproject/src/static/images/g4.jpg"},
                {"price":"149","sp1":"漫步者（EDIFIER）W800BT 立体声蓝牙耳机头戴式无线耳机重低音蓝牙运动耳机 苍穹黑","srcimg":"JDproject/src/static/images/g5.jpg"},
                {"price":"249","sp1":"飞利浦（PHILIPS）耳机 头戴式耳机 SHP2000","srcimg":"JDproject/src/static/images/g6.jpg"},
                {"price":"499","sp1":"漫步者（EDIFIER）W800BT 立体声蓝牙耳机 苍穹黑","srcimg":"JDproject/src/static/images/g7.jpg"},
                {"price":"1199","sp1":"创新（Creative）Aurvana Live 耳机 头戴式 生物振膜高保真头戴包耳式Hifi运动耳机","srcimg":"JDproject/src/static/images/g8.jpg"},
                {"price":"599","sp1":"漫步者（EDIFIER） H850  HIFI级音乐耳机 手机耳机 头戴式耳机 黑色","srcimg":"JDproject/src/static/images/g9.jpg"},
                {"price":"229","sp1":"漫步者（EDIFIER）K710P 便携头戴式多媒体耳机 手机耳机 音乐耳机 可通话 酷黑红","srcimg":"JDproject/src/static/images/g10.jpg"}
            ]
        }
        return wntjData;
    }
}