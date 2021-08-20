const initState = []

const Products = (state = initState, action) => {

    switch (action.type){

        case "PRODUCTS_UPDATE_LIST":

            return action.payload

        default:
            
            return state
    }
}

export default Products
