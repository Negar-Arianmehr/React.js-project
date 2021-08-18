//it works behind the seance
// import React from "react";

import Expenses from "./components/Expenses/Expenses"

//we can write function with arrow function for all components
const App = () => {
    //here we add an array for using
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            data: new Date(2020, 7, 14)
        },
        {
            id: "e2",
            title: "New Tv",
            amount: 1294.12,
            data: new Date(2020, 5, 1)
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 256.85,
            data: new Date(2020, 4, 25)
        },
        {
            id: "e4",
            title: "Cell Phone",
            amount: 528.23,
            data: new Date(2020, 4, 5)
        },
    ]

    //in the old version of react.js by import "React" from react in all components and write code like
        //return React.createElement(
        //  "div", {}, React.createElement("h2", {}, "HELLO")
    // )
    //AND it is JSX solution
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
