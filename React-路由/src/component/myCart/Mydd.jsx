"use strict";
import  React from "react";
export default class Mydd extends React.Component {
    constructor() {
        super();
    }
    render() {
        var arr=this.props.data;
        return (
            <section id="dingdan">
                <ul>
                    {arr.map((t,i) =>
                       <li key={i}><i className="Hui-iconfont">&#xe627;</i>
                            <span>{t.sp}</span>
                       </li>)
                    }
                </ul>
            </section>
        )
    }
}