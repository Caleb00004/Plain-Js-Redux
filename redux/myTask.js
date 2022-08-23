export function addTask(task) {
    return {
        type: "ADD_TASK",
        addWhat: task
    }
}

export function removeTask(task) {
    return {
        type: "REMOVE_TASK",
        removeWhat: task
    }
}

export default function taskReducer(myTask = [], action) {
    switch (action.type) {
        case ("ADD_TASK") :
            return [...myTask, action.addWhat ]

        case ("REMOVE_TASK"):
            const updatedArray = myTask.filter(word => word !== action.removeWhat)

            return myTask = updatedArray
        default :
            return myTask
    }
}