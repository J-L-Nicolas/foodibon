import {StyleSheet } from 'react-native'
import colors from '../../assets/colors'


const styles = StyleSheet.create({

    body:{
        flex:1,
        backgroundColor: colors.backGroundSecondary,
    },
    bodySecondary:{
        alignItems: 'center'

    },
    pictureBody:{
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: "#FFFFFF",
        marginTop: 30,
    },
    imageUser:{
        width: 300,
        height: 300,
        borderRadius: 150,
    },
    btn:{
        marginTop: 60,
        height:40,
        alignItems: "center",
        justifyContent:"center",
        width: "100%",
        borderBottomWidth: 1,
        elevation: 1
        
    },
    btnText:{
        fontWeight: "bold",
        fontSize: 25
    }
})

export default styles