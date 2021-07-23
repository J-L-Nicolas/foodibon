const initState = null

const User = (state = initState, action) => {

    switch (action.type){

        case "USER_CHANGE":
            return action.payload

        default:
            return state
    }
}

export default User