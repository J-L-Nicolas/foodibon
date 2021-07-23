import {StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
    body:{

        flex: 1,
        backgroundColor: colors.backGroundSecondary
    },
    bodyTiltes:{

        paddingHorizontal: 18,
        marginBottom: 30,
    },
    title:{
        
        color: "#FFFFFF",
        fontSize: 50,
        fontWeight: "bold",
        color: colors.textPrimary
    },
    subTitle:{
        
        color: "#FFFFFF",
        fontSize: 20,
        color: colors.textPrimary
    },
    bodyCategory:{

        paddingHorizontal: 18,
        flex: 1,
    },
    titleCategory:{

        color: "#FFFFFF",
        fontSize: 23,
        color: colors.textPrimary,

    },
    bodyCat:{

        marginTop: 15,
        marginHorizontal: 5,
        marginVertical: 20
    },
    bodyFlatlistProduct:{
        flex: 1
    },
    bodyPro:{
        width: "50%",
        padding: 7
    }
    
})

export default styles