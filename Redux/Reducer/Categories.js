const initState = []

const Categories = (state = initState, action) => {

    switch (action.type){

        case "CATEGORIES_UPDATE_LIST":

            return action.payload

        default:
            
            return state
    }
}

export default Categories
