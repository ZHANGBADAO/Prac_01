"use strict"
import Redux from "redux";
import {connect} from "react-redux";
import Products from "./Products.jsx";

//num,AddNum
const mapStateToProps = (state)=>{
    return {
        num:state
    }
}




export default connect(mapStateToProps)(Products)