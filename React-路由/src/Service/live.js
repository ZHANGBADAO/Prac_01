"use strict";
/**
 * 逻辑层从数据获取数据精选筛选数据处理
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    //获取左边导航数据数据集
    getLiveList:function () {
        var liveData=[
            {"imgsrc":"JDproject/src/static/images/li1.jpg",
                "user":"安妮贝贝",
                "add":"火星",
                "zb":"JDproject/src/static/images/lia1.jpg",
                "stat":"•直播中",
                "title":"夏天的味道一定是海鲜的味道",
                "lei":"海鲜",
                "juan":"秒杀专场进来抢卷"
            },
            {"imgsrc":"JDproject/src/static/images/li2.jpg",
                "user":"安妮贝贝",
                "add":"火星",
                "zb":"JDproject/src/static/images/lia2.jpg",
                "stat":"•直播中",
                "title":"夏天的味道一定是海鲜的味道",
                "lei":"海鲜",
                "juan":"秒杀专场进来抢卷"
            },
            {"imgsrc":"JDproject/src/static/images/li3.jpg",
                "user":"安妮贝贝",
                "add":"火星",
                "zb":"JDproject/src/static/images/lia3.jpg",
                "stat":"•直播中",
                "title":"夏天的味道一定是海鲜的味道",
                "lei":"海鲜",
                "juan":"秒杀专场进来抢卷"
            },
            {"imgsrc":"JDproject/src/static/images/li4.jpg",
                "user":"安妮贝贝",
                "add":"火星",
                "zb":"JDproject/src/static/images/lia4.jpg",
                "stat":"•直播中",
                "title":"夏天的味道一定是海鲜的味道",
                "lei":"海鲜",
                "juan":"秒杀专场进来抢卷"
            },
            {"imgsrc":"JDproject/src/static/images/li5.jpg",
                "user":"安妮贝贝",
                "add":"火星",
                "zb":"JDproject/src/static/images/lia5.jpg",
                "stat":"•直播中",
                "title":"夏天的味道一定是海鲜的味道",
                "lei":"海鲜",
                "juan":"秒杀专场进来抢卷"
            }
        ];
        return liveData;

    }
}