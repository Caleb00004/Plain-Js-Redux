// Note: // Naming convention, the type name should be in Upper case

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


// created functions to return action objects. \\ remember actions are objects.
function increment(amount) {
    return {
        type: 'INCREMENT',
        payLoad: amount 
    }
}

// decrement action function
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


/* 
// using a switch statement for the reducer 
function reducerSwitch(state = {count: 0}, action) {
    switch(action.type) {
        case ("CHANGE_COUNT") :
            return {
                count: state.count + action.payLoad
            }
        case ("INCREMENT") : //increment state to increase the count state if the action type is Increment.
            return {
                count : state.count + action.payLoad
            }
        case ("DECREMENT") :
            return {
                count : state.count-1
            }
        default: //default case to just return previous state if an action dose'nt exist or non of the action in cases matches.
            return state 
    }
}
*/

// A More dynamic action to both increment and Decrement state.
function changeCount(number) {
    return {
        type: "CHANGE_COUNT",
        payLoad: number
    }
}

function addTask(task) {
    return {
        type: "ADD_TASK",
        addWhat: task
    }
}

function removeTask(task) {
    return {
        type: "REMOVE_TASK",
        removeWhat: task
    }
}

function addTitle (title) {
    return {
        type: "ADD_TITLE",
        title: title
    }
}

function upVote() {
    return {
        type: "UP_VOTE",
    }
}

function downVote() {
    return {
        type: "DOWN_VOTE",
    }
}

const initalState = {
    count : 0,
    myTask : [],
    youtubeVideo: {
        title: "",
        vidName: "",
        votes: {
            up: 0,
            down: 0
        }
    }
}

// New Reducer for the changeCount action.
function newReducer(state = initalState, action) {
    switch (action.type) {
        case ("CHANGE_COUNT") :
            return {
                ...state,
                count: state.count + action.payLoad
            }
        case ("ADD_TASK") :
            return {
                ...state,
                myTask : [ ...state.myTask, action.addWhat ]
            }
        case ("REMOVE_TASK"):
            const updatedArray = state.myTask.filter(word => word !== action.removeWhat)
            return {
                ...state,
                myTask: updatedArray
            }
        case ("ADD_TITLE"):
            return {
                ...state,
                youtubeVideo: {...state.youtubeVideo, title: action.title }
            }
        case ("UP_VOTE"): { // the extra curly brackets here is to make it possible to use the same variable names in different cases. i.e all variable names inside this case will be unique to this case alone. 
            const youtubeVideo = state.youtubeVideo
            const votes = state.youtubeVideo.votes

            return {    
                ...state,
                youtubeVideo: {...youtubeVideo, votes: {...votes, up: votes.up + 1}}
            }
        }
        case ("DOWN_VOTE") : 
            const youtubeVideo = state.youtubeVideo
            const votes = state.youtubeVideo.votes

            return {    
                ...state,
                youtubeVideo: {...youtubeVideo, votes: {...votes, down: votes.down + 1}}
            }

        default : //default case to just return previous state if an action dose'nt exist or non of the action in cases matches.
            return state
    }
}

// creating Redux Store. Takes the reducer as parameter.
//const store = Redux.createStore(reducerSwitch)
const store = Redux.createStore(newReducer)
console.log(store)

// runs anytime an action is dispatched. i.e a state changes.
store.subscribe(() => {
    console.log(store.getState()) // calling getState to see the current state after change.
})

// sending the actions to the reducer
store.dispatch(changeCount(-5))
store.dispatch(addTask('mikael'))
store.dispatch(addTask('jackson'))
store.dispatch(removeTask('mikael'))
store.dispatch(addTitle('first youtubeVideo'))
store.dispatch(upVote())
store.dispatch(upVote())
store.dispatch(downVote())
//store.dispatch(decrement())



