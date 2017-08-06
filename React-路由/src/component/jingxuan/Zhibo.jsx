"use strict";
import  React from "react";

export default class Live extends React.Component {
    constructor() {
        super();
    }
    render() {
        var arr=this.props.data;
        return (
            <div id="main2" className="clear">
                <ul>
                    {
                        arr.map((t,i) =>
                            <li key={i}>
                                <div className="live-t">
                                    <div className="live-t-tou">
                                        <img src={t.imgsrc}/>
                                    </div>
                                    <div className="live-t-name">
                                        <div className="live-t-name-t">{t.user}</div>
                                        <div className="live-t-name-b"><i className="Hui-iconfont">&#xe6c9;</i>{t.add}</div>
                                    </div>

                                </div>
                                <div className="live-c">
                                    <div className="live-c-img">
                                        <img src={t.zb}/>
                                        <div className="live-c-zhibo">•{t.stat}</div>
                                        <div className="live-c-title">{t.title}</div>
                                        <div className="live-c-bg"></div>
                                        <div className="live-c-dz">
                                            <i className="Hui-iconfont">&#xe697;</i>
                                        </div>
                                        <div className="live-c-zan"></div>
                                    </div>
                                </div>
                                <div className="live-b">
                                    <a href="#" className="te">{t.lei}</a><span>|</span><a href="#">{t.juan}</a>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}