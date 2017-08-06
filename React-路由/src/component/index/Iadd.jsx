"use strict";
import  React from "react";
export  default  class Iadd extends  React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <section id="add1">
                <a href=""><img src={this.props.data}/></a>
            </section>
        )
    }
}