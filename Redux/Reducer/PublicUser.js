const initState = null

const PublicUser = (state = initState, action) => {

    switch (action.type){

        case "PUBLICUSER_UPDATE":

            return action.payload

        default:
            
            return state
    }
}

export default PublicUser