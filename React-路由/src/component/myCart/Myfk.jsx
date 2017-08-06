"use strict";
import  React from "react";

export default class Myfk extends React.Component {
    constructor() {
        super();
    }

    render() {
        var arr=this.props.data;
        return (
            <section id="qianbao">
                <ul>
                    {arr.map((t,i) =>
                        <li key={i}>
                            <a href={t.url}><i>{t.itext}</i><span>{t.sp}</span></a>
                        </li>)
                    }
                </ul>
            </section>
        )
    }
}