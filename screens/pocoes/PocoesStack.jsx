import React from 'react'
import Pocoes from './PocoesList'
import PocoesForm from './PocoesForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PocoesStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='pocoes' component={Pocoes} options={{title: "Poções"}} />
    <Stack.Screen name='form-pocoes' component={PocoesForm} options={{title: "form-pocoes"}} />
    </Stack.Navigator>
    </>
  )
}

export default PocoesStack