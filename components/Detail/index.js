import React, {useState} from 'react'
import { View, Text, Image , TouchableOpacity, Modal} from 'react-native'
import styles from './styles'
import colors from '../../assets/colors'

/* import redux */
import { useSelector, useDispatch } from 'react-redux'
import Action, {type} from '../../Redux/Action'

/* import components  */
import Header from '../Header'

/* import icon */
import Icon from 'react-native-vector-icons/FontAwesome';

const index = ({navigation}) => {

    /* init redux const */
    const SelProduct = useSelector(state => state.SelProduct)
    const authUser = useSelector(state => state.User)
    const dispatch = useDispatch()

    /* State */
    const [numberItems, setNumberItems] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);

    /* function change number */
    const handleChangeItems = (type) => {
        
        if (type){

            if (numberItems < 10){
                
                setNumberItems(numberItems + 1)
            }
        }else{

            if(numberItems > 1){

                setNumberItems(numberItems - 1)
            }
        }
    }
    
    /* function add cart product */
    const addCard = () => {

        dispatch(Action(type.CARD_ADD_PRODUCT,{idProduct: SelProduct.id, quantity: numberItems, user: authUser.uid}))
        setModalVisible(true)
    }

    /* function go to Card */
    const gotoCard = () => {
        navigation.navigate('card')
        setModalVisible(false)
    }
    
    
    /* display icon */
    const add = <Icon name="plus" size={20} color={colors.textLink} />;
    const remove = <Icon name="minus" size={20} color={colors.textLink} />;
    const cartIcon = <Icon name="cart-arrow-down" size={30} color="#ffffff" />;

    return (
        <View style={styles.body}>
            <Header navigation={navigation}/>
            <Image
                style={styles.pictureproduct}
                source={{
                    uri: SelProduct.url
                }}
            />
            <View style={styles.bodyInfo}>

                <View style={styles.firstline}>
                    <Text style={styles.ProductName}>{SelProduct.name}</Text>
                    <Text style={styles.ProductPrice}>{SelProduct.price}€</Text>
                </View>

                <View style={styles.bodyBtnCount}>
                    <TouchableOpacity style={styles.btnCount} onPress={()=>handleChangeItems(true)}>
                        {add}
                    </TouchableOpacity>
                    <Text style={styles.TextCount}>{numberItems}</Text>
                    <TouchableOpacity style={styles.btnCount} onPress={()=>handleChangeItems(false)}>
                        {remove}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnBody} onPress={addCard}>
                    <Text style={styles.btnBodyText}>Add to Card {cartIcon}</Text>
                </TouchableOpacity>
                <Text  style={styles.titleDetail}>Food Details</Text>
                <Text>{SelProduct.description}</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalBody}>
                    <View style={styles.modalCard} >
                        <Text>Félicitation votre article est dans votre panier</Text>
                        <View style={styles.containerBtncard}>
                            <TouchableOpacity style={styles.modalBodyBtnCLoss} onPress={() => setModalVisible(false)}>
                                <Text style={styles.textbtnCard}>Continuer vos achats</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalBodyBtnGoCard} onPress={gotoCard}>
                                <Text style={styles.textbtnCard} >Voir votre panier</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

export default index