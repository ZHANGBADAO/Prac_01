"use strict";
import  React from "react";
import {BrowserRouter as Router , Route, Link,IndexRoute} from "react-router-dom";
export default class Floatb extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section id="classify">
                <ul>
                    <li><Link to="Index"><img src="/JDproject/src/static/images/t1.png" alt="首页"/></Link></li>
                    <li><Link to="Category"><img src="/JDproject/src/static/images/t2.png" alt="分类"/></Link></li>
                    <li><Link to="JingXuan"><img src="/JDproject/src/static/images/t3.png" alt="发现"/></Link></li>
                    <li><Link to="ShoppingCart"><img src="/JDproject/src/static/images/t3.png" alt="购物车"/></Link></li>
                    <li><a href="myCart.html"><img src="/JDproject/src/static/images/t5.png" alt="我的"/></a></li>
                </ul>
            </section>

        )
    }
}