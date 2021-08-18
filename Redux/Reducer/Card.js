/* firebase */
import app from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
const fireCard =  firestore().collection('card');

const initState = []

const Card = (state = initState, action) => {

    switch (action.type){

        case "CARD_UPDATE_ALL":

            return action.payload

        case "CARD_ADD_PRODUCT":

            if(state.indexOf(action.payload) !== -1){
                return state
            } else{
                // return [...state, action.payload]
                fireCard.add(action.payload)
                return state
            }
            
        case "CARD_REMOVE_PRODUCT":

            return state.filter(value => value.idProduct != action.payload)

        case "CARD_INCREMENT_QUANTITY_PRODUCT":

            const moveState =  state.map(value => {

                if (value.idProduct == action.payload){

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

                if (value.idProduct == action.payload){

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
