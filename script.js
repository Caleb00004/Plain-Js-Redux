console.log("console.log")

/*
const action = {
    type: "Increment"
} */

// Note: // Naming convention, the type name should be in Upper case
// This function returns 'increment' action. \\ remember actions are objects.
function increment() {
    return {
        type: 'INCREMENT'
    }
}


function decrement() {
    return {
        type: 'DECREMENT'
    }
}

/*
// sample reducer 
// i set the state value as an object. Note: it can be anything,number,string...
function reducer(state = {count: 0}, action) {
    if (action.type === 'DECREMENT') {
        return {count : state.count + 1}
    } else if (action.type === "INCREMENT") {
        return {count: state.count - 1}
    } else { 
        return state 
    }
}
*/

// using a switch statement for the reducer
function reducerSwitch(state = {count: 1}, action) {
    switch(action.type) {
        case ("INCREMENT") : //increment state to increase the count state if the action type is Increment.
            return {
                count : state.count + 1
            }
        case ("DECREMENT") :
            return {
                count : state.count-1
            }
        default: //default case to just return previous state if an action dose'nt exist or non of the action in cases matches.
            return state 
    }
}

// creating Redux Store. Takes the reducer as parameter.
const store = Redux.createStore(reducerSwitch)
console.log(store)

// runs anytime an action is dispatched. i.e a state changes.
store.subscribe(() => {
    console.log(store.getState()) // calling getState to see the current state after change.
})

// sending the increment action to the reducer
store.dispatch(increment())



/* 
switch syntax

switch(condition) {
    case (condition is '1') :
        code.....
    case (condition is '2') :
        code...
    case....
}
*/
