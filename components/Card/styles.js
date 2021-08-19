import {StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor: colors.backGroundSecondary
    },
    bodyContainer:{
        width: "100%",
        padding: 18,
        flex:1,
    },
    Titlecard:{
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 10,
    },
    bodyItemsContainer:{
        flexDirection: 'row',
       
        alignItems: 'center',
        borderRadius: 5,
        paddingStart: 5,
        marginVertical: 3,
        backgroundColor: "#ffffff",
        elevation: 3
    },
    ImageItem:{
        height:100,
        width: 100,
        borderRadius: 8,
        margin:5,
    },
    ender0:{

        paddingLeft: 20,
        flex: 1
    },
    ender1:{

        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10, 
    },
    ender2:{

        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        height: 35,
        backgroundColor: colors.backGroundSecondary,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    TextCount:{
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
        marginHorizontal: 30
    },
    bodyPricesList:{
        backgroundColor: "#fff",
        borderRadius: 20,
        height: 100,
        padding: 10,
        elevation: 1,
        marginTop: 15,
    },
    textPay:{
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 20,
    },
    bodyPay:{
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        elevation: 1,
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center'
        
    },
    msgClearCard:{
        fontSize: 50,
        fontStyle: "italic",
        color: "#444444",
        fontWeight: "bold",
        paddingTop: 100,
        textAlign: "center"
    }
    
    
})

export default styles