import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'
import colors from '../../../assets/colors'

import Icon from 'react-native-vector-icons/FontAwesome';

const Product = ({properties, nameCat}) => {

    /* DisplayIcon */
    const myIcon = <Icon name="plus" size={25} color="#ffffff" style={styles.iconAdd}/>;

    return (
        <View style={styles.body}>
            <Image 
                style={styles.pictureStyle}
                source={{uri: properties.url}}
            />
            <Text style={styles.ProductName}>{properties.name}</Text>
            <Text style={styles.ProductCat}>{nameCat}</Text>
            <View style={styles.bodyBtn}>
                <Text style={styles.ProductPrice}>{properties.price}€</Text>
                {myIcon}
            </View>
        </View>
    )
}

export default Product
