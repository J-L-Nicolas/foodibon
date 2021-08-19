import { createStore, combineReducers } from "redux";

/* import Rducers */
import Firebase from './Reducer/Firebase'
import Players from './Reducer/Players'
import Categories from './Reducer/Categories'
import Products from './Reducer/Products'
import User from './Reducer/User'
import SelProduct from './Reducer/SelProduct'
import Card from './Reducer/Card'
import Filter from './Reducer/Filter'
import PublicUser from './Reducer/PublicUser'

/* store redux */
const store = combineReducers({

    Firebase,
    Players,
    Categories,
    Products,
    User,
    SelProduct,
    Card,
    Filter,
    PublicUser,
})

export default createStore(store);