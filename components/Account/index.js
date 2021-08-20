import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

/* import components  */
import Header from '../Header'

/* import redux */
import { useSelector } from 'react-redux';

const Account = ({navigation}) => {

    /* init redux const */
    const PublicUser = useSelector(state => state.PublicUser)

    /* display icon */
    const myIcon = <Icon name="chevron-right" size={25} color="#000000" />;

    return (
        <View style={styles.body}>
            <Header navigation={navigation}/>
            <View style={styles.bodySecondary}>
                <View style={styles.pictureBody}>
                    <Image
                            style={styles.imageUser}
                            source={{uri: PublicUser.url}}
                    />
                </View>
                <Text>{PublicUser.name}</Text>
                <Text>Description</Text>

                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Mes Achats {myIcon}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Account
