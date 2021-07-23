import {StyleSheet } from 'react-native'
import colors from '../../../assets/colors'

const styles = StyleSheet.create({
    body:{
       width: 150,
       height: 75,
        elevation: 5,
       borderColor: "#000000",
       borderStyle: "solid",
       borderRadius: 5
    },
    backGroundCard:{
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems:'center',
       borderRadius: 5

    },
    textCat:{
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight:"bold",
        elevation: 10,
        position: "absolute",
        top: 20,
        left: 50
    }
    
})

export default styles