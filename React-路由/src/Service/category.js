"use strict";
/**
 * 逻辑层从数据获取数据精选筛选数据处理
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    //获取左边导航数据数据集
    getRootList:function () {
        var list=[
            {"url":"#","text":"热门推荐"},
            {"url":"#","text":"国际名牌"},
            {"url":"#","text":"京东超市"},
            {"url":"#","text":"奢侈品"},
            {"url":"#","text":"全球购"},
            {"url":"#","text":"男装"},
            {"url":"#","text":"女装"},
            {"url":"#","text":"男鞋"},
            {"url":"#","text":"内衣配饰"},
            {"url":"#","text":"箱包手袋"},
            {"url":"#","text":"美妆个护"},
            {"url":"#","text":"手机数码"},
            {"url":"#","text":"电脑办公"},
            {"url":"#","text":"家用电器"},
            {"url":"#","text":"食品生鲜"},
            {"url":"#","text":"酒水饮料"},
            {"url":"#","text":"母婴童装"},
            {"url":"#","text":"玩具乐器"},
            {"url":"#","text":"医药保健"},
            {"url":"#","text":"计生情趣"},
            {"url":"#","text":"运动户外"},
            {"url":"#","text":"汽车用品"},
            {"url":"#","text":"家居厨具"},
            {"url":"#","text":"家具家装"},
            {"url":"#","text":"礼品鲜花"},
            {"url":"#","text":"宠物生活"},
            {"url":"#","text":"生活旅游"},
            {"url":"#","text":"图书音像"},
            {"url":"#","text":"邮币"},
            {"url":"#","text":"农资绿植"},
            {"url":"#","text":"特产馆"},
            {"url":"#","text":"京东金融"},
            {"url":"#","text":"拍卖"},
            {"url":"#","text":"二手商品"}
        ];
        return list;
    },
    getMain:function () {
        var mainData={
            "imgurl":"JDproject/src/static/images/tui1.jpg"
            ,
            "mainTop":[
                {"url":"#","imgsrc":"JDproject/src/static/images/re1.jpg","title":"7.6荣耀超级品牌日"},
                {"url":"#","imgsrc":"JDproject/src/static/images/re2.jpg","title":"水饮冲调嗨翻夏日"},
                {"url":"#","imgsrc":"JDproject/src/static/images/re3.jpg","title":"77车厘子超级单品日"},
            ],
            "mainBottom":[
                {"url":"#","imgsrc":"JDproject/src/static/images/p1.jpg","title":"手机"},
                {"url":"#","imgsrc":"JDproject/src/static/images/p2.jpg","title":"笔记本"},
                {"url":"#","imgsrc":"JDproject/src/static/images/p3.jpg","title":"空调"},
                {"url":"#","imgsrc":"JDproject/src/static/images/p4.jpg","title":"火锅"},
                {"url":"#","imgsrc":"JDproject/src/static/images/p5.jpg","title":"啤酒"},
                {"url":"#","imgsrc":"JDproject/src/static/images/p6.jpg","title":"火车票"},
                {"url":"#","imgsrc":"JDproject/src/static/images/p7.jpg","title":"电脑"},
                {"url":"#","imgsrc":"JDproject/src/static/images/p8.jpg","title":"相机"},
                {"url":"#","imgsrc":"JDproject/src/static/images/p9.jpg","title":"耳机"}
            ]
        }
        return mainData;
    }
}