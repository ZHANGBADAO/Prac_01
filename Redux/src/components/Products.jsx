import React from "react";

export default class Products extends React.Component {

    constructor() {
        super();
    }

    render() {
        let {num} = this.props;
        return (
            <div>
                <h1>{num}</h1>
            </div>
        )
    }


}