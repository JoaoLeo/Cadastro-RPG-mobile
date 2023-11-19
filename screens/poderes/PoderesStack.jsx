import React from 'react'
import Poderes from './PoderesList'
import PoderesForm from './PoderesForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PoderesStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='classes' component={Poderes} options={{title: "Poderes"}} />
    <Stack.Screen name='form-classes' component={PoderesForm} options={{title: "form-classes"}} />
    </Stack.Navigator>
    </>
  )
}

export default PoderesStack