import React from "react";
import ToDoListContainer from "./components/ToDoListContainer.jsx";

export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ToDoListContainer></ToDoListContainer>
            </div>
        )
    }


}