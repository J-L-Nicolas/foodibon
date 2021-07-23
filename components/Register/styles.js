import {StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
    body:{
        flex:1,
        width: "100%",
        backgroundColor: colors.backGroundPrimary,
        alignContent: "center"
    },
    TitleStyle:{

        color: "#FFFFFF",
        fontSize: 70,
        fontFamily: "LondrinaSolid-Regular",
        textAlign: "center",

    },
    bodyEnd:{
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 18,
        width: "100%",
    },
    secondeText:{
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:30
    },
    inputStyle:{
        width: "100%",
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        color: "#FFFFFF"
    },
    bodylink:{
        marginTop: 80,
        marginBottom:30,
        alignItems:"flex-start"
    },
    textLink:{
        color: "#ffffff",
        fontSize: 15,
    },
    btnRegister:{

        justifyContent: "center",
        width: "100%",
        height: 70,
        backgroundColor: "#FFFFFF",
        marginBottom: 18,
        borderRadius: 12,
    },
    textRegister:{

        color: "#000000",
        fontSize: 25,
        textAlign: "center",
        fontWeight:"bold"
    },
    
})

export default styles