import React, {useState} from 'react'
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native'

/* import components */
import Header from '../Header'

/* import redux */
import { useSelector } from 'react-redux'

const index = ({navigation}) => {

    /* init const redux */
    const Firebase = useSelector(state => state.Firebase)

    /* State */
    const [text, settext] = useState("")
    const [inSending, setInSending] = useState(false)

    /* Function send msg fireStore */
    const sending = () => {
        
        if (text != ""){

            setInSending(true)
            const sending = text
            settext('')
        
            Firebase.messaging().getToken().then(token => {
           
                Firebase.addMessage(sending, token).then(() => {

                    console.log('message add ok');
                    setInSending(false)
                });
            });
        }
    }

    /* display event sending msg */
    const displayBtn = inSending ? (
        <ActivityIndicator size="large" color="#00ff00" />
    ):(
        <Button 
            title="send Notif"
            onPress={sending}
        />
    )
    
    /* Render */
    return (
        <View>
            <Header navigation={navigation}/>
            <Text>Notif</Text>
            <TextInput
                value={text}
                onChangeText={settext}
                placeholder="Titre notif"
            />
            <View>
                {displayBtn}
            </View>
        </View>
    )
}

export default index
