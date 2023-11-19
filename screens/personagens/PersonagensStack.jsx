import React from 'react'
import Personagens from './PersonagensList'
import PersonagensForm from './PersonagensForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PersonagensStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='personagens' component={Personagens} options={{title: "Personagens"}} />
    <Stack.Screen name='form-personagens' component={PersonagensForm} options={{title: "Criar personagem"}} />
    </Stack.Navigator>
    </>
  )
}

export default PersonagensStack