import React from "react";
import Redux from "redux";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import ProductsContainer from "./components/ProductsContainer.js"
import CounterContainer from "./components/CounterContainer.js"

export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div>
                     <Link to="/pro">pro</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <Link to="/">首页</Link>
                    <hr />
                     <Provider store={store}>
                         <Route exact path="/" component={CounterContainer}></Route>
                     </Provider>

                    <Provider store={store}>
                        <Route path="/pro" component={ProductsContainer}></Route>
                    </Provider>
                </div>
           </Router>
        )
    }


}