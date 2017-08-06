"use strict";
/**
 * 逻辑层从数据获取数据精选筛选数据处理
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    //获取左边导航数据数据集
    getOrder:function () {
        var list=[
            {"imgsrc":"JDproject/src/static/images/o4.jpg",
             "url":"#",
                "title":"小米（MI） 定制版Ninebot 九号平衡车 智能代步电动体感车（黑）",
                "sp1":"颜色:【平衡车黑色标准版】",
                "price":"1999",
                "cont":""
            },
            {"imgsrc":"JDproject/src/static/images/o3.jpg",
                "url":"#",
                "title":"Apple iPhone 6 32G 金色 移动联通电信4G手机",
                "sp1":"重量:0.39kg",
                "price":"2578",
                "cont":""
            },
            {"imgsrc":"JDproject/src/static/images/o2.jpg",
                "url":"#",
                "title":"漫步者（EDIFIER）W800BT 立体声蓝牙耳机 苍穹黑",
                "sp1":"重量:0.44kg 颜色:W800BT苍穹黑",
                "price":"189",
                "cont":""
            },
            {"imgsrc":"JDproject/src/static/images/o1.jpg",
                "url":"#",
                "title":"宏碁（acer）便携商务笔记本电脑 TMTX40 14英寸 手提游戏本 I5-7200U 8G+128G固态+500g 2G独显定制版",
                "sp1":"颜色:8G+128G固态+500g 2G独显定制版",
                "price":"3899",
                "cont":""
            }
        ];
        return list;
    }
}


