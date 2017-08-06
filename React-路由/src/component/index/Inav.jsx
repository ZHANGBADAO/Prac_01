"use strict";
import  React from "react";
export  default  class Inav extends  React.Component{
    constructor() {
        super();
    }
    render() {
        const arr =this.props.data;
        return (
            <nav>
                <ul>
                    {arr.map((t,i) =>
                        <li key={i}><a href="#"><img src={t.imgscr} alt={t.title}/><span>{t.title}</span></a></li>
                        )
                    }
                </ul>
            </nav>
        )
    }
}