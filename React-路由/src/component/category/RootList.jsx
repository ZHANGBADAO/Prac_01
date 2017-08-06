"use strict";
import  React from "react";
export default class RootList  extends React.Component{
    constructor() {
        super();
    }
    render() {
        var arr=this.props.data;
        return (
            <div id="rootList">
                <ul id="rlul">
                    {   arr.map((t,i) =>
                            <li key={i}><a href={t.url}>{t.text}</a></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}