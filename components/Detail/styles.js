import {StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: colors.backGroundSecondary
    },
    pictureproduct:{
        width: "100%",
        height: 300
    },
    bodyInfo:{
        width: "100%",
        paddingHorizontal: 10,
    },
    firstline:{
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    ProductName:{
        fontSize: 25,
        fontWeight: "bold",
    },
    ProductPrice:{
        fontSize: 25,
        fontWeight: "bold",
    },
    bodyBtnCount:{
        flexDirection: "row",
        marginTop: 30,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 35
    },
    TextCount:{
        backgroundColor: "#FFFFFF",
        color: "#000000",
        width: 80,
        textAlign: "center",
        marginHorizontal: 15,
        borderRadius: 3,
        height: 30,
        textAlignVertical: "center",
        elevation: 5,
    },
    btnCount:{

    },
    btnBody:{
        marginTop: 20,
        backgroundColor: colors.primary,
        width: "100%",
        borderRadius: 7,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    btnBodyText:{
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "bold",
        
    },
    titleDetail:{
        marginTop: 30,
        marginLeft: 60,
        borderBottomWidth: 2,
        borderBottomColor: colors.textLink,
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10
    }
    
})

export default styles