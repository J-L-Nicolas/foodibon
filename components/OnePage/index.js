import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import styles from './styles'

const OnePage = ({navigation}) => {

    const goLogin = () => {
        navigation.navigate("login")
    }

    const goRegister = () => {
        navigation.navigate("register")
    }
    
    return (
        <View style={styles.body}>
            <Image 
                source={require("../../assets/img/bbg.png")}
                style={styles.imageCover}
            />
            <View style={styles.bodySecond}>
                <Text style={styles.TitleStyle}>Food I Bon</Text>
            </View>
            <View style={styles.bodyTreery}>
                <Pressable style={styles.btnLogin} onPress={goLogin}>
                    <Text style={styles.textLogin}>Connexion</Text>
                </Pressable>

                <Pressable style={styles.btnRegister} onPress={goRegister}>
                    <Text style={styles.textRegister}>Inscription</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default OnePage
