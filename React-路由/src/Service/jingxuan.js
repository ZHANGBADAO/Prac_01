"use strict";
/**
 * 逻辑层从数据获取数据精选筛选数据处理
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    //获取左边导航数据数据集
    getJingxuan:function () {
        var list=[
            {"p1":"假期外出游玩 拍照就用这些新上市双摄手机",
                "imgt":"JDproject/src/static/images/li1.jpg",
                "url":"#",
                "urlText":"庄帅-科技",
                "sp1":"99999+人阅读",
                "imgsrc":"JDproject/src/static/images/j1.jpg",
                "imgcont":"16件宝贝"

            },
            {"p1":"给你的单反放个假吧！2000万变焦双摄荣耀9体验",
                "imgt":"JDproject/src/static/images/li2.jpg",
                "url":"#",
                "urlText":"刺客",
                "sp1":"10000+人阅读",
                "imgsrc":"JDproject/src/static/images/j2.jpg",
                "imgcont":"8件宝贝"

            },
            {"p1":"入手好时机 这些高关注度手机降价后更划算",
                "imgt":"JDproject/src/static/images/li3.jpg",
                "url":"#",
                "urlText":"真爱留香",
                "sp1":"20000+人阅读",
                "imgsrc":"JDproject/src/static/images/j3.jpg",
                "imgcont":"6件宝贝"

            },
            {"p1":"假期外出游玩 拍照就用这些新上市双摄手机",
                "imgt":"JDproject/src/static/images/li4.jpg",
                "url":"#",
                "urlText":"庄帅-科技",
                "sp1":"99999+人阅读",
                "imgsrc":"JDproject/src/static/images/j4.jpg",
                "imgcont":"16件宝贝"

            },
            {"p1":"个性百变!模块化手机Moto Z2 Play图赏",
                "imgt":"JDproject/src/static/images/li5.jpg",
                "url":"#",
                "urlText":"暴暴大人爱工作",
                "sp1":"99999+人阅读",
                "imgsrc":"JDproject/src/static/images/j5.jpg",
                "imgcont":"12件宝贝"

            },
            {"p1":"moto z2 play：模块化才是更“聪明”的做法",
                "imgt":"JDproject/src/static/images/li1.jpg",
                "url":"#",
                "urlText":"黄瓜君",
                "sp1":"30000+人阅读",
                "imgsrc":"JDproject/src/static/images/j6.jpg",
                "imgcont":"10件宝贝"

            },
            {"p1":"不一样的体验 3299元moto z2 play京东首发",
                "imgt":"JDproject/src/static/images/li2.jpg",
                "url":"#",
                "urlText":"三三",
                "sp1":"99999+人阅读",
                "imgsrc":"JDproject/src/static/images/j7.jpg",
                "imgcont":"5件宝贝"

            },
            {"p1":"双摄加持性能再升级！一加 5 上手评测",
                "imgt":"JDproject/src/static/images/li3.jpg",
                "url":"#",
                "urlText":"岚月Jazz",
                "sp1":"50000+人阅读",
                "imgsrc":"JDproject/src/static/images/j8.jpg",
                "imgcont":"16件宝贝"

            }
        ];
        return list;
    }
}
