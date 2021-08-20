import React, {Fragment, useState} from 'react'
import { View, Modal, Text, Pressable } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors'

/* import redux */
import { useSelector, useDispatch } from 'react-redux';
import Action, {type} from '../../Redux/Action'

const index = ({navigation, backAction}) => {

    /* init redux */
    const Firebase = useSelector(state => state.Firebase)
    const Card = useSelector(state => state.Card)
    const dispatch = useDispatch()

    /* State */
    const [modalEtat, setmodalEtat] = useState(false)

    /* function log out */
    const logOut = () => {
        Firebase.signOut().then( () => {
            dispatch(Action(type.USER_CHANGE, null))
        })
    }

    /* function goback */
    const GoBack = () => {
        navigation.goBack()
    }
    
    /* function move view account */
    const gotoAccount = () => {
        setmodalEtat(false)
        navigation.navigate("account")
    }

    /* function move view card */
    const gotoCard = () => {
        setmodalEtat(false)
        navigation.navigate("card")
    }

    /* navigation notification layout */
    const gotoNotif = () => {
        setmodalEtat(false)
        navigation.navigate("notif")
    }
    
    /* displayCard */
    const viewBack = backAction ? (<View></View>): (<Icon name="arrow-left" size={30} color={colors.textLink} onPress={GoBack}/>)
    
    /* display icons */
    const menu = <Icon name="navicon" size={30} color={colors.textLink} style={styles.iconheader}  onPress={()=>{setmodalEtat(true)}}/>;
    const removeIcon = <Icon name="remove" size={30} color="#000000" />;
    const signOut = <Icon name="sign-out" size={30} color="#000000" />;
    const cart = <Icon name="shopping-cart" size={30} color={colors.textLink} style={styles.iconheader} />;

    const CountDisplayCard = (Card.length > 0) && (<Text style={styles.bodyCount}>{Card.length}</Text>)
    
    return (
        <View style={styles.body}>
            {viewBack}
            <View style={styles.subBodyHeaderIcon}>
                <Pressable  onPress={gotoCard}>
                    {cart}
                    {CountDisplayCard}
                </Pressable>
                {menu}
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEtat}
                animationType="fade"
            >
                <View style={styles.bodyModal}>

                    <Pressable style={styles.modalWindow} onPress={()=>{setmodalEtat(false)}}/>

                    <View style={styles.modalSelect}>
                        <Text style={styles.titleModal}>Menu</Text>

                        <Pressable style={styles.modalBtn } onPress={gotoAccount}>
                            <Text style={styles.modalBtnText}>My Account</Text>
                            <Icon name="user" size={30} color="#000000" />
                        </Pressable>

                        <Pressable style={styles.modalBtn } onPress={gotoAccount}>
                            <Text style={styles.modalBtnText}>My Order</Text>
                            <Icon name="cube" size={30} color="#000000" />
                        </Pressable>

                        <Pressable style={styles.modalBtn } onPress={gotoNotif}>
                            <Text style={styles.modalBtnText}>Send Notif</Text>
                            <Icon name="send-o" size={30} color="#000000" />
                        </Pressable>

                        <Pressable style={styles.modalBtn} onPress={logOut}>
                            <Text style={styles.modalBtnText}>logOut</Text>{signOut}
                        </Pressable>
                    
                        <Pressable style={styles.modalBtnClose} onPress={()=>{setmodalEtat(false)}}>
                            <Text style={styles.modalBtnText}>{removeIcon}</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </Modal>
        </View>
    )
}

export default index
