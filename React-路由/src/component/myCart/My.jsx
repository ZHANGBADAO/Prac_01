"use strict";
import  React from "react";

export default class My extends React.Component {
    constructor() {
        super();
    }

    render() {
        var my=this.props.data;
        return (
            <section id="head">
                <div className="head-bg">
                    <img src={my.headbg}/>
                </div>
                <div className="head-bg-b">
                    <img src={my.headbgb}/>
                </div>
                <div className="head-tx clear">
                    <div className="head-tx-l"><img src={my.myhead}/></div>
                    <div className="head-tx-r">
                        <h1>{my.myName}</h1>
                        <div className="head-tx-r-1">{my.myVip}</div>
                        <div className="head-tx-r-2">{my.myxy}</div>
                    </div>
                </div>
            </section>
        )
    }
}