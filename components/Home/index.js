import React, {Fragment} from 'react'
import { View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native'
import styles from './styles'

/* import redux */
import { useSelector, useDispatch } from 'react-redux'
import Action, {type} from '../../Redux/Action'

/* import components  */
import Header from '../Header'
import Cat from './Cat'
import Product from './Product'

let myProducts = []

const index = ({navigation}) => {

    /* init redux const */
    const Categories = useSelector(state => state.Categories)
    const Products = useSelector(state => state.Products)
    const Filter = useSelector(state => state.Filter)
    const dispatch = useDispatch()

    /* function add filter */
    const addFilter = (elements) => {
        dispatch(Action(type.FILTER_UPDATE, elements))
    }

    /* function delete filter */
    const delFilter = () => {
        dispatch(Action(type.FILTER_CLEAN, true))
    }

    /* action filter */
    if (Filter != null){

        myProducts = Products.filter(product => product.cat == Filter.id)
    }else{

        myProducts = Products
    }

    /* function flatlist category*/
    const renderItem = ({ item }) =>(
        <TouchableOpacity style={styles.bodyCat} onPress={()=>addFilter(item)}>
            <Cat name={item.name} img={item.url} />
        </TouchableOpacity>
    )
     


    /* displayer filter */
    const displayFilterCat = (Filter != null) ? (

        <TouchableOpacity style={styles.bodyCat} onPress={delFilter}>
            <Cat name={Filter.name} img={Filter.url} />
        </TouchableOpacity>
    ):(
        <FlatList
            data={Categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
        />
    )

    /* function go destail */
    const goDetail = (item) => {

        dispatch(Action(type.SELPRODUCT_UPDATE, item))
        navigation.navigate('detail')
    }
    
    /* function flatlist Product*/
    const renderItemProduct = ({ item }) => {

        const nameCat = Categories.filter(value => item.cat == value.id)
        return(
            <Pressable style={styles.bodyPro} onPress={()=>goDetail(item)} >
                <Product properties={item} nameCat={nameCat[0].name}/>
            </Pressable>
        );
    }

    /* display header product flat list */
    const headerHome = () => (
        <Fragment>
           <View style={styles.bodyTiltes}>
                <Text style={styles.title}>Bonjour User</Text>
                <Text style={styles.subTitle}>Une petite Faim?</Text>
            </View>

            <View style={styles.bodyCategory}>
                
                <Text style={styles.titleCategory}>Sélection des catégories?</Text>

                <View>
                {displayFilterCat}
                </View>

                <Text style={styles.titleCategory}>Nos petit plats</Text>
            </View> 

        </Fragment>
    
    )
        
    return (
        <View style={styles.body}>

        <Header navigation={navigation} backEvent={false} backAction={true}/>

            <View style={styles.bodyFlatlistProduct}>
                <FlatList
                    ListHeaderComponent={headerHome}
                    data={myProducts}
                    renderItem={renderItemProduct}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
            
        </View>

    )
}

export default index
