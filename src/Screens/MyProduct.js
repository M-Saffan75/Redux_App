
import React from 'react';
import { decreaseQty, increaseQty } from './MyProductSlice';
import { addProductsToMyCart, deleteMyCartItem, removeProductTomyCart } from './MyCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// const items = [
//     {
//         id: 0,
//         qty: 0,
//         name: 'shoes 1',
//         price: 'PKR 2300',
//         image: require('../../images/1.jpg'),
//     },

//     {
//         id: 1,
//         qty: 0,
//         name: 'shoes 2',
//         price: 'PKR 2500',
//         image: require('../../images/2.jpg'),
//     },

//     {
//         id: 2,
//         qty: 0,
//         name: 'shoes 3',
//         price: 'PKR 2100',
//         image: require('../../images/3.jpg'),
//     },

//     {
//         id: 3,
//         qty: 0,
//         name: 'shoes 4',
//         price: 'PKR 1400',
//         image: require('../../images/4.jpg'),
//     },

//     {
//         id: 4,
//         qty: 0,
//         name: 'shoes 5',
//         price: 'PKR 3050',
//         image: require('../../images/5.jpg'),
//     },

//     {
//         id: 5,
//         qty: 0,
//         name: 'shoes 6',
//         price: 'PKR 1700',
//         image: require('../../images/6.jpg'),
//     },

//     {
//         id: 6,
//         qty: 0,
//         name: 'shoes 7',
//         price: 'PKR 1900',
//         image: require('../../images/8.jpg'),
//     }
// ]

const MyProduct = ({ navigation }) => {

    const myproducts = useSelector(state => state.product);
    const mycartItems = useSelector(state => state.Cart);
    console.log('my products : ', mycartItems)
    const dispatch = useDispatch();

    const getTotal = () => {
        let total = 0;
        mycartItems.map(item => {
            total = total + item.qty * item.price;
        });
        return total;
    }

    return (

        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />

            <View style={styles.container}>

                <View style={styles.top_area}>
                    <Text style={styles.addtocart}>Redux App</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <View style={styles.cart_count}>

                            <View>
                                <Image source={require('../../images/lock.png')} style={{ height: 30, width: 30, borderRadius: 5 }} />
                            </View>

                            <View>
                                <Text style={{ color: '#000', fontSize: 25, }}>
                                    {/* {items.Cart.length} */}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                <FlatList data={myproducts}

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

                                        {item.qty == 0 ? (
                                            <TouchableOpacity activeOpacity={0.7} style={styles.btn}
                                                onPress={() => {
                                                    dispatch(addProductsToMyCart(item))
                                                    dispatch(increaseQty(item.id));
                                                }}
                                            >
                                                <Text style={styles.btn_Name}>
                                                    Add To Cart
                                                </Text>
                                            </TouchableOpacity>
                                        ) : null}


                                        <View style={styles.quantity}>

                                            {item.qty == 0 ? null : (
                                                <TouchableOpacity style={styles.quantity_here} onPress={() => {
                                                    dispatch(increaseQty(item.id));
                                                    // dispatch(addProductsToMyCart(item))

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
                                                }}

                                                >
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

                {mycartItems.length > 0 ? (
                    <View style={{ height: 60, width: '100%', backgroundColor: '#fff', position: 'absolute', bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 17, fontWeight: '700' }}> {'Added Items' + '( ' + mycartItems.length + ' ) '}</Text>
                            <Text style={{ color: 'grey' }}>{'Total : ' + getTotal()} </Text>
                        </View>

                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cart')}>
                                <Text style={styles.btn_Name}> View Cart </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}


            </View>

        </>
    )
}

export default MyProduct

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