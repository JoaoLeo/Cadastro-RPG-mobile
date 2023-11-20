import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Informacoes from './Informacoes';

const Stack = createNativeStackNavigator();

const InfoStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='Info' component={Informacoes} options={{title: "DEV"}} />
    </Stack.Navigator>
    </>
  )
}

export default InfoStack