const Action = (type, value) => ({
    
    type,
    payload: value
})

export default Action


/*  --- liste type action --- */
const type = {

    /* action Players */
    PLAYER_ADD_NB: "PLAYER_ADD_NB",

    /* action User */
    USER_CHANGE: "USER_CHANGE",

    /* action Products */
    PRODUCTS_UPDATE_LIST: "PRODUCTS_UPDATE_LIST",

    /* action categories */
    CATEGORIES_UPDATE_LIST: "CATEGORIES_UPDATE_LIST",

    /* action SelProduct */
    SELPRODUCT_UPDATE: "SELPRODUCT_UPDATE",

    /* action Card  */
    CARD_ADD_PRODUCT: "CARD_ADD_PRODUCT",
    CARD_REMOVE_PRODUCT: "CARD_REMOVE_PRODUCT",
    CARD_ALL_REMOVE_PRODUCTS: "CARD_ALL_REMOVE_PRODUCTS",
    CARD_INCREMENT_QUANTITY_PRODUCT: "CARD_INCREMENT_QUANTITY_PRODUCT",
    CARD_DECREMENT_QUANTITY_PRODUCT: "CARD_DECREMENT_QUANTITY_PRODUCT",

    /* action Filter */
    FILTER_UPDATE: "FILTER_UPDATE",
    FILTER_CLEAN: "FILTER_CLEAN",
    
}

export {type}