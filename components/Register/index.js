import React, {useState, useRef} from 'react'
import { View, Text, TextInput , Pressable, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles'

/* import redux */
import { useSelector } from 'react-redux'

const index = ({navigation}) => {

    /* Ref */
    const refEmail = useRef(null)
    const refPass = useRef(null)
    const refVerPass = useRef(null)

    /* init redux */
    const Firebase = useSelector(state => state.Firebase)

    /* State */
    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [confPassWord, setConfPassWord] = useState("")
    const [waintView, setWaintView] = useState(false)

    
    /* Functions submit */
    const submit = () => {
        
        if(pseudo != "" && passWord != "" && email != "" && confPassWord == passWord){
            
            setWaintView(true)
            Firebase.register(email, passWord).then(result => {

                // navigation.navigate("home")

                Firebase.queryUser().doc(result.user.uid).set(
                   
                    {   
                        name: pseudo,
                        url: "https://www.francetvinfo.fr/pictures/RXMvwN335gV1l3-S4ZwA-RBbAeE/752x423/2021/06/01/phpYKxkS7.jpg"
                    }
                )

            }).catch(error => {
                
                setWaintView(false)
                console.log(error)
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

                <Text style={styles.secondeText}>Rejoignez-Nous</Text>
                
                <TextInput 
                    style={styles.inputStyle}
                    placeholder="Pseudo"
                    onChangeText={setPseudo}
                    value={pseudo}
                    placeholderTextColor="#1d1aff"
                    returnKeyType="next"
                    onSubmitEditing={() => refEmail.current.focus()}
                />

                <TextInput 
                    style={styles.inputStyle}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    placeholderTextColor="#1d1aff"
                    keyboardType="email-address"
                    returnKeyType="next"
                    ref={ (e)=>{refEmail.current = e}}
                    onSubmitEditing={() => refPass.current.focus()}
                />

                <TextInput 
                    style={styles.inputStyle}
                    placeholder="Password"
                    onChangeText={setPassWord}
                    value={passWord}
                    secureTextEntry={true}
                    placeholderTextColor="#1d1aff"
                    returnKeyType="next"
                    ref={ (e)=>{refPass.current = e}}
                    onSubmitEditing={() => refVerPass.current.focus()}
                />

                <TextInput 
                    style={styles.inputStyle}
                    placeholder="Confirm Password"
                    onChangeText={setConfPassWord}
                    value={confPassWord}
                    secureTextEntry={true}
                    placeholderTextColor="#1d1aff"
                    ref={ (e)=>{refVerPass.current = e}}
                    onSubmitEditing={submit}
                />  

                <Pressable style={styles.bodylink} onPress={()=>navigation.navigate("login")}>
                    <Text style={styles.textLink}>Connexion</Text>
                </Pressable>

                <TouchableOpacity style={styles.btnRegister} onPress={submit} >
                    <Text style={styles.textRegister}>Inscription</Text>
                    {waintingDisplay}
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default index
