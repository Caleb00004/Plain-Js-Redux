// importing all the Reducers.
import countReducer from './count.js'
import taskReducer from './myTask.js'
import youtubeVideoReducer from './youtubeVideo.js'

// combining all the reducers into one and creating a single state object
const rootReducer = Redux.combineReducers({
    count: countReducer,
    task: taskReducer,
    youtubeVideo: youtubeVideoReducer
})

const store = Redux.createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

export default store

