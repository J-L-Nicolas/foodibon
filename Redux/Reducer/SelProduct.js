const initState = null

const SelProduct = (state = initState, action) => {

    switch (action.type){

        case "SELPRODUCT_UPDATE":
            return action.payload
    
        default:
            return state
    }
}

export default SelProduct
