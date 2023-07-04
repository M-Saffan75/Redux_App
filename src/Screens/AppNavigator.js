import React from 'react';
import Cart from './Cart';
import MyProduct from './MyProduct';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Main = () => {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MyProduct'>
          <Stack.Screen name='MyProduct' component={MyProduct} />
          <Stack.Screen name='Cart' component={Cart} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
