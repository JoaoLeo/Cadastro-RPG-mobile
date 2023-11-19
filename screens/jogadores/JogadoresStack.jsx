import React from 'react'
import Jogadores from './JogadoresList'
import JogadoresForm from './JogadoresForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const JogadoresStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='jogadores' component={Jogadores} options={{title: "Jogadores"}} />
    <Stack.Screen name='form-jogadores' component={JogadoresForm} options={{title: "Crie um jogador"}} />
    </Stack.Navigator>
    </>
  )
}

export default JogadoresStack