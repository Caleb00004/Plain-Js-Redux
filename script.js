import store from "./redux/reducer.js"
import {changeCount} from './redux/count.js'
import {addTask , removeTask} from "./redux/myTask.js"
import {addTitle, upVote, downVote} from './redux/youtubeVideo.js'

store.dispatch(changeCount(10))
store.dispatch(addTask("mike adenuga"))
store.dispatch(addTask("Phil"))
store.dispatch(removeTask("Phil"))
store.dispatch(downVote())
console.log("Here")



// creating Redux Store. Takes the reducer as parameter.
//const store = Redux.createStore(reducerSwitch)


// runs anytime an action is dispatched. i.e a state changes.
/* store.subscribe(() => {
    console.log(store.getState()) // calling getState to see the current state after change.
})

// sending the actions to the reducer
store.dispatch(changeCount(-5))
*/


