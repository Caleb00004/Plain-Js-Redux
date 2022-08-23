export function changeCount(number) {
    return {
        type: "CHANGE_COUNT",
        payLoad: number
    }
}
                                   // state    , action
export default function countReducer(count = 0, action) {
    switch (action.type) {
        case ("CHANGE_COUNT") :
            return count + action.payLoad
        default:
            return count
    }
}

