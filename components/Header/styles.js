import {StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({

    body:{
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 18,
        marginTop: 18,
    },
    subBodyHeaderIcon:{
        flexDirection: "row",
    },
    iconheader:{
        marginHorizontal: 10
    },
    bodyModal:{
        flex: 1,
        backgroundColor: "#00073347",
        flexDirection: "row"
    },
    modalWindow:{
        width:"50%",
        flex: 1,
    },
    modalSelect:{
        width:"50%",
        flex: 1,
        backgroundColor: colors.backGroundSecondary
    },
    titleModal:{
        fontWeight: "bold",
        fontSize: 30,
    },
    modalBtn:{
        width: "100%",
        backgroundColor: "#fff",
        height: 100,
        justifyContent:'center',
        alignItems: "center",
        marginBottom: 2,
        elevation: 1,
        borderRadius: 5,
    },
    modalBtnText:{
        fontSize: 20,
        fontWeight: "bold"
    },
    modalBtnClose:{
        width: "100%",
        backgroundColor: "#c9c9c9",
        height: 35,
        justifyContent:'center',
        alignItems: "center",
        marginTop: 30
    },
    bodyCount: {
        position: "absolute",
        backgroundColor: "#ffad33",
        color: "#ffffff",
        width: 20,
        height: 20,
        textAlign: "center",
        borderRadius: 10
    }
})

export default styles