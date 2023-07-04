
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty } from './MyProductSlice';
import { addProductsToMyCart, deleteMyCartItem, removeProductTomyCart } from './MyCartSlice';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Cart = ({ navigation }) => {

    const mycartItems = useSelector(state => state.Cart);
    // console.log('my products : ', mycartItems)
    const dispatch = useDispatch();

    return (

        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />

            <View style={styles.container}>

                <View style={styles.top_area}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.addtocart}>B a c k</Text>
                    </TouchableOpacity>
                </View>

                <FlatList data={mycartItems}

                    renderItem={({ item, index }) => {

                        return (
                            <View style={styles.short_Container}>

                                <View>
                                    <Text style={styles.item_Name}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.item_Price}>
                                        {item.price}
                                    </Text>

                                    <View style={styles.btn_group}>

                                        <View style={styles.quantity}>

                                            {item.qty == 0 ? null : (
                                                <TouchableOpacity style={styles.quantity_here} onPress={() => {
                                                    dispatch(addProductsToMyCart(item))
                                                    dispatch(increaseQty(item.id))
                                                }}>
                                                    <Text style={styles.btn_Name}>+</Text>
                                                </TouchableOpacity>
                                            )}

                                            {item.qty == 0 ? null : (
                                                <Text style={styles.count}>{item.qty}</Text>
                                            )}

                                            {item.qty == 0 ? null : (
                                                <TouchableOpacity style={styles.quantity_here} onPress={() => {
                                                    if (item.qty > 1) {
                                                        dispatch(removeProductTomyCart(item))
                                                        dispatch(decreaseQty(item.id))
                                                    }
                                                    else {
                                                        dispatch(deleteMyCartItem(item.id))
                                                        dispatch(decreaseQty(item.id))
                                                    }
                                                }}>
                                                    <Text style={styles.btn_Name}> - </Text>
                                                </TouchableOpacity>
                                            )}

                                        </View>

                                    </View>

                                </View>

                                <View>
                                    <Image source={item.image} style={{ height: 100, width: 100, borderRadius: 5 }} />
                                </View>

                            </View>
                        )
                    }}
                />
            </View>

        </>
    )
}

export default Cart

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
    },

    top_area: {
        height: 70,
        paddingHorizontal: 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cart_count: {
        width: 100,
        padding: 5,
        borderRadius: 10,

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
        justifyContent: 'space-between',
    },

    addtocart: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },

    short_Container: {
        height: 110,
        width: '95%',
        borderRadius: 10,
        borderWidth: 0.1,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderColor: '#8e8e8e',
        backgroundColor: '#fff',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


    item_Name: {
        fontSize: 12,
        color: 'black',
        letterSpacing: 1,
    },

    item_Price: {
        marginTop: 10,
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
    },

    btn_Name: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
    },

    img: {
        width: 100,
        height: 100,
    },

    btn: {
        top: 5,
        width: 100,
        borderRadius: 4,
        paddingVertical: 8,
        backgroundColor: 'black',
    },

    btn_group: {
        width: 210,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    quantity: {
        top: 5,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    quantity_here: {
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#000',
    },

    count: {
        color: '#000',
        fontSize: 20
    }

})