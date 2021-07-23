import React, {Fragment, useState, useEffect} from 'react'
import { View, Text, FlatList, Button, Image} from 'react-native'
import styles from './styles'
import colors from '../../assets/colors'

import Icon from 'react-native-vector-icons/FontAwesome';

/* import redux */
import { useSelector, useDispatch } from 'react-redux'
import Action, {type} from '../../Redux/Action'

/* import components  */
import Header from '../Header'

const Card = ({navigation}) => {
    
    /* init redux */
    const Cards = useSelector(state => state.Card)
    const dispatch = useDispatch()

    /* State */
    const [priceTotal, setPriceTotal] = useState(0)

    /* Effect */
    useEffect(() => {

        priceLoad()
    }, [Cards])

    /* function clean item to card */
    const deleteItem = (id) => {
        dispatch(Action(type.CARD_REMOVE_PRODUCT, id))
    }

    /* function incremental */
    const increProductQt = (id) => {

        dispatch(Action(type.CARD_INCREMENT_QUANTITY_PRODUCT,id))
    }

    const decreProductQt = (id) => {

        dispatch(Action(type.CARD_DECREMENT_QUANTITY_PRODUCT,id))
    }
    

    /* function  */
    const renderItem = ({ item }) => (
        <View style={styles.bodyItemsContainer}>
            <Image
                style={styles.ImageItem}
                source={{uri: item.url}}
            />
            <View style={styles.ender0}>
                <View style={styles.ender1}>
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}€</Text>
                    </View>
                    <Icon name="trash" size={25} color="#900" onPress={()=>deleteItem(item.id)}/>
                </View>
                <View  style={styles.ender2}>
                    <Icon name="plus" size={25} color={colors.textLink} onPress={()=>{increProductQt(item.id)}}/>
                    <Text style={styles.TextCount}>{item.quantity}</Text>
                    <Icon name="minus" size={25} color={colors.textLink}  onPress={()=>{decreProductQt(item.id)}}/>
                </View>
            </View>
        </View>
    );

    /* function clean card */
    const cleanCard = () => {
        dispatch(Action(type.CARD_ALL_REMOVE_PRODUCTS,true))
    }
    
    /* display button clean */
    const btnClean = (Cards.length > 0) ? (

        <Fragment>
            <Button
                title="Effacer le Panier"
                onPress={cleanCard}
            />
            <View style={styles.bodyPricesList}>
                <Text>Total: {priceTotal} €</Text>
            </View>

            <Text style={styles.textPay}>Payments Method</Text>

            <View style={styles.bodyPay}>
                <Icon name="cc-paypal" size={25} color="#000" onPress={()=>deleteItem(item.id)}/>
                <Text>Paypal</Text>
            </View>
            <View style={styles.bodyPay}>
                <Icon name="cc-stripe" size={25} color="#000" onPress={()=>deleteItem(item.id)}/>
                <Text>Strip</Text>
            </View>
        </Fragment>

    ):(
        <Fragment>
            <Text style={styles.msgClearCard}>Votre Panier est vide 😥</Text>
        </Fragment>
    )

    /* function somme total price */
    const priceLoad = () => {
        
        if (Cards.length > 0){

            let somme = 0
            Cards.forEach(element => somme += (element.price * element.quantity) );
            setPriceTotal(somme)
        }
    }
    
    /* Render */
    return (
        <View style={styles.body}>
            <Header navigation={navigation}/>
            <View style={styles.bodyContainer}>
                <Text style={styles.Titlecard}>Mon Panier</Text>
                <FlatList
                    data={Cards}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListFooterComponent={btnClean}
                />
              
            </View>

        </View>
    )
}

export default Card
