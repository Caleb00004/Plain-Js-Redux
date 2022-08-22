//import { createStore } from 'redux'
import reduxjsToolkit from 'https://cdn.skypack.dev/@reduxjs/toolkit';

console.log("console.log")

/*
const action = {
    type: "Increment"
} */

// Note: // Naming convention, the type name should be in Upper case
// increment action
function increment() {
    return {
        type: 'DECREMENT'
    }
}


function decrement() {
    return {
        type: 'DECREMENT'
    }
}

// sample reducer 
// i used set state inline
function reducer(state = {count: 0}, action) {
    if (action.type === 'DECREMENT') {
        return {count : state.count + 1}
    } else if (action.type === "INCREMENT") {
        return {count: state.count - 1}
    }
}

// using a switch statement for the reducer
function reducer(state = {count: 0}, action) {
    switch(action.type) {
        case ("INCREMENT") : 
            return {
                count : state.count + 1
            }
        case "DECREMENT" :
            return {
                count : state.count - 1
            }
    }
}

