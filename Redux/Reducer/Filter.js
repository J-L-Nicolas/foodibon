const initState = null

const Filter = (state = initState, action) => {

    switch (action.type){

        case "FILTER_UPDATE":

            return action.payload

        case "FILTER_CLEAN":
            
            return initState

        default:
            
            return state
    }
}

export default Filter
