import React from 'react'
import { View, Text , Image} from 'react-native'
import styles from './styles'

const Cat = ({name, img}) => {
  
    return (
        <View style={styles.body}>
            <Image 
            style={styles.backGroundCard}
                source={{uri: img}} 
            />
                <Text style={styles.textCat}>{name}</Text>
        </View>
    )
}

export default Cat
