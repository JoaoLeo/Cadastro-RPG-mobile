import React from 'react'
import Poderes from './PoderesList'
import PoderesForm from './PoderesForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PoderesStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='poderes' component={Poderes} options={{title: "Poderes"}} />
    <Stack.Screen name='form-poderes' component={PoderesForm} options={{title: "Crie um poder"}} />
    </Stack.Navigator>
    </>
  )
}

export default PoderesStack