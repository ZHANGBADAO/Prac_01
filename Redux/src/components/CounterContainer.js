"use strict"
import Redux from "redux";
import {connect} from "react-redux";
import Counter from "./Counter.jsx";

//num,AddNum
const mapStateToProps = (state)=>{
    return {
        num:state
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        AddNum:()=>dispatch({type:"ADD"})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)