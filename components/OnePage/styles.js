import {StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
    body:{

        flex:1,
        width: "100%",
        backgroundColor: colors.backGroundPrimary,
    },
    imageCover:{

        width: "100%",
        marginTop: -200
    },
    bodySecond:{

        alignItems: "center"
    },
    TitleStyle:{

        color: "#FFFFFF",
        fontSize: 70,
        fontFamily: "LondrinaSolid-Regular"
    },
    bodyTreery:{

        width: "100%",
        alignItems: "center",
        position: 'absolute',
        bottom: 0,
        padding: 18
    },
    btnLogin:{

        justifyContent: "center",
        width: "100%",
        height: 70,
        backgroundColor: "#FFFFFF",
        marginBottom: 18,
        borderRadius: 12,
    },
    textLogin:{

        color: "#000000",
        fontSize: 25,
        textAlign: "center",
        fontWeight:"bold",
    },
    btnRegister:{

        justifyContent: "center",
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
        marginBottom: 18,
        borderRadius: 12,
    },
    textRegister:{

        color: "#ffffff",
        fontSize: 25,
        textAlign: "center",
        fontWeight:"bold",
    },
   

})

export default styles