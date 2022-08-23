export function addTitle (title) {
    return {
        type: "ADD_TITLE",
        title: title
    }
}

export function upVote() {
    return {
        type: "UP_VOTE",
    }
}

export function downVote() {
    return {
        type: "DOWN_VOTE",
    }
}
const initalState = {
    title: "",
    vidName: "",
    votes: {
        up: 0,
        down: 0
    }
}

export default function youtubeVideoReducer(youtubeVideo = initalState, action) {
    switch (action.type) {
        case ("ADD_TITLE"):
            return {
                ...youtubeVideo,
                title: action.title 
            }
        case ("UP_VOTE"): { // the extra curly brackets here is to make it possible to use the same variable names in different cases. i.e all variable names inside this case will be unique to this case alone. 
//            const youtubeVideo = state.youtubeVideo
            const votes = youtubeVideo.votes

            return {    
                ...youtubeVideo,
                votes: {...votes, up: votes.up + 1}
            }
        }
        
        case ("DOWN_VOTE") : 
            const votes = youtubeVideo.votes

            return {    
                ...youtubeVideo,
                votes: {...votes, down: votes.down + 1}
            }
        default:
            return initalState
    }
}
