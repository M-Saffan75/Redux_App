import React, { useEffect } from 'react'
import AppNavigator from './AppNavigator'
import { addMyProducts } from './MyProductSlice'
import { Provider, useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { mystore } from './Screens/React-Redux/MyStore'

const items = [
  {
    id: 0,
        qty: 0,
        name: 'shoes 1',
        price: 'PKR 2300',
        image: require('../../images/1.jpg'),
    },

    {
        id: 1,
        qty: 0,
        name: 'shoes 2',
        price: 'PKR 2500',
        image: require('../../images/2.jpg'),
    },

    {
        id: 2,
        qty: 0,
        name: 'shoes 3',
        price: 'PKR 2100',
        image: require('../../images/3.jpg'),
    },

    {
        id: 3,
        qty: 0,
        name: 'shoes 4',
        price: 'PKR 1400',
        image: require('../../images/4.jpg'),
    },

    {
        id: 4,
        qty: 0,
        name: 'shoes 5',
        price: 'PKR 3050',
        image: require('../../images/5.jpg'),
    },

    {
        id: 5,
        qty: 0,
        name: 'shoes 6',
        price: 'PKR 1700',
        image: require('../../images/6.jpg'),
    },

    {
        id: 6,
        qty: 0,
        name: 'shoes 7',
        price: 'PKR 1900',
        image: require('../../images/8.jpg'),
    }
]



const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    items.map(item => {
      dispatch(addMyProducts(item))
    });
  }, []);



  return (
    <>
      <AppNavigator />
    </>
  )
}

export default Main

const styles = StyleSheet.create({})