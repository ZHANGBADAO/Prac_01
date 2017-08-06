"use strict";
import React from "react";
import {BrowserRouter as Router , Route, Link,IndexRoute} from "react-router-dom";
import  Index from "./view/Index.jsx";
import  Category from "./view/Category.jsx";
import  JingXuan from "./view/JingXuan.jsx";
import  ShoppingCart from "./view/Shopping.jsx";
import  Live from "./view/Live.jsx";
import  MyCart from "./view/MyCart.jsx";

export  default class APP extends  React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/Category" component={Category} />
                    <Route path="/JingXuan" component={JingXuan} />
                    <Route path="/Live" component={Live} />
                    <Route path="/ShoppingCart" component={ShoppingCart} />
                    <Route path="/MyCart" component={MyCart} />
                    <section id="classify">
                        <ul>
                            <li><Link to="/"><img src="src/static/images/t1.png" alt="首页" /></Link></li>
                            <li><Link to="/Category"><img src="src/static/images/t2.png" alt="分类" /></Link></li>
                            <li><Link to="/JingXuan"><img src="src/static/images/t3.png" alt="发现" /></Link></li>
                            <li><Link to="/ShoppingCart"><img src="src/static/images/t4.png" alt="购物车" /></Link></li>
                            <li><Link to="/MyCart"><img src="src/static/images/t5.png" alt="我的" /></Link></li>
                        </ul>
                    </section>

                </div>
            </Router>
        )
    }
}