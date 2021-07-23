import React, {useState, useRef} from 'react'
import { View, Text, TextInput , Pressable, ActivityIndicator, TouchableOpacity } from 'react-native'
import styles from './styles'

/* import redux */
import { useSelector } from 'react-redux'

const index = ({navigation}) => {

    /* ref */
    const refInput = useRef(null)

    /* init redux */
    const Firebase = useSelector(state => state.Firebase)
    
    /* State */
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [waintView, setWaintView] = useState(false)

    /* Functions submit */
    const submit = () => {

        if(passWord != "" && email != ""){
            
            setWaintView(true)
            Firebase.login(email, passWord).then(result => {

                // navigation.navigate("home")

            }).catch(error => {
    
                console.log(error)
                setWaintView(false)
            })
        }
    }

    /* display waiting */
    const waintingDisplay = waintView && (
        <ActivityIndicator size="small" color="#0000ff" />
    )
    
    /* Render */
    return (
        <View style={styles.body}>

            <Text style={styles.TitleStyle}>Food I Bon</Text>

            <View style={styles.bodyEnd}>

                <Text style={styles.secondeText}>Connectez-Vous</Text>
                
                <TextInput 
                    style={styles.inputStyle}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    placeholderTextColor="#1d1aff"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => refInput.current.focus()}
                />

                <TextInput 
                    style={styles.inputStyle}
                    placeholder="Password"
                    onChangeText={setPassWord}
                    value={passWord}
                    placeholderTextColor="#1d1aff"
                    secureTextEntry={true}
                    ref={ (e)=>{refInput.current = e}}
                    onSubmitEditing={submit}

                />

                <Pressable style={styles.bodylink } onPress={()=>navigation.navigate("register")}>
                    <Text style={styles.textLink}>Inscription</Text>
                </Pressable>

                <TouchableOpacity style={styles.btnLogin} onPress={submit} >
                    <Text style={styles.textLogin}>Connexion </Text>
                    {waintingDisplay}
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default index
