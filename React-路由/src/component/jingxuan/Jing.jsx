"use strict";
import  React from "react";

export default class Jing extends React.Component {
    constructor() {
        super();
    }
    render() {
        const arr=this.props.data;
        return (
            <div id="main" className="clear">
                <ul>
                    {arr.map((t,i) =>
                        <li key={i}>
                            <div className="li-left">
                                <p>{t.p1}</p>
                                <div className="li-left-b">
                                    <img src={t.imgt}/>
                                    <a href={t.url}>{t.urlText}</a>
                                    <i>•</i>
                                    <span>{t.sp1}</span>
                                </div>
                            </div>
                            <div className="li-right">
                                <img src={t.imgsrc}/>
                                <div className="li-right-num">{t.imgcont}</div>
                            </div>
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}