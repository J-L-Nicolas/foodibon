const initState = []

const Card = (state = initState, action) => {

    switch (action.type){

        case "CARD_ADD_PRODUCT":

            if(state.indexOf(action.payload) !== -1){
                return state
            } else{
                return [...state, action.payload]
            }
            
        case "CARD_REMOVE_PRODUCT":

            return state.filter(value => value.id != action.payload)

        case "CARD_INCREMENT_QUANTITY_PRODUCT":

            const moveState =  state.map(value => {

                if (value.id == action.payload){

                    if(value.quantity < 10){

                        return {...value, quantity: value.quantity + 1 }
                    }else{

                        return value
                    }

                }else{

                    return value
                }
            })
            return moveState

        case "CARD_DECREMENT_QUANTITY_PRODUCT":
            const newState =  state.map(value => {

                if (value.id == action.payload){

                    if(value.quantity > 1){

                        return {...value, quantity: value.quantity - 1 }
                    }else{

                        return value
                    }
                }else{

                    return value
                }
            })
            return newState

            

        case "CARD_ALL_REMOVE_PRODUCTS":

            return initState

        default:
            return state
    }
}

export default Card
