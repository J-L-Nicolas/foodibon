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
    },
    modalBody:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00000054",
    },
    modalCard:{
        width: "80%",
        height: 200,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 20,
        justifyContent: "space-between",
    },
    containerBtncard:{
        flexDirection: "row",
        justifyContent:"space-between",
    },
    modalBodyBtnCLoss:{
        backgroundColor: "#2453ff",
        height: 30,
        padding: 4,
        borderRadius: 4,
    },
    modalBodyBtnGoCard:{
        backgroundColor: "#c27100",
        height: 30,
        borderRadius: 4,
        padding: 4,
    },
    textbtnCard:{
        color: "#FFFFFF",
        fontWeight: "bold"
    }
    
})

export default styles