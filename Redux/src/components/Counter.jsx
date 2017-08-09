import React from "react";

export default class Counter extends React.Component {

    constructor() {
        super();
    }

    render() {
        let {num,AddNum} = this.props;
        return (
            <div>
                <h1>{num}</h1>
                <input type="button" value="+" onClick={AddNum}/>
            </div>
        )
    }


}