import React from "react";
import Counter from "./Counter.jsx"

export default class CounterContainer extends React.Component {

    constructor() {
        super();
        this.state={num:0};
        this.Add = this.Add.bind(this);
    }

    Add(){

          let {num} = this.state;
          this.setState({num:++num});
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Counter num={this.state.num} AddNum={this.Add}></Counter>
            </div>
        )
    }


}