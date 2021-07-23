import {StyleSheet } from 'react-native'
import colors from '../../../assets/colors'

const styles = StyleSheet.create({
    body:{
        
        backgroundColor: "#FFFFFF",
        width:"100%",
        height: 220,
        borderRadius: 5,
        elevation: 2
    },
    pictureStyle:{
        width: "100%",
        height: 120,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    bodyBtn:{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        bottom: 5,
        paddingHorizontal:10,
        marginTop:20,
    },
    ProductName:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    ProductPrice:{
        fontSize: 20,
        fontWeight: "bold",
    },
    ProductCat:{
        marginStart: 5,
        fontStyle: "italic"
    },
    iconAdd:{
        backgroundColor: colors.textLink,
        borderRadius: 12,
        paddingHorizontal: 3
    }
    
})

export default styles