"use strict";
import  React from "react";
export  default  class Iaish extends  React.Component{
    constructor() {
        super();
    }
    render() {
        var bg=this.props.data.tjbg;
        var bgT=this.props.data.tjimg;
        return (
            <section id="aish">
                <div className="aish-t">
                    <div className="aish-t-bg"><img src={bg}/></div>
                    <div className="aish-t-img"><img src={bgT}/></div>
                </div>
            </section>
        )
    }
}