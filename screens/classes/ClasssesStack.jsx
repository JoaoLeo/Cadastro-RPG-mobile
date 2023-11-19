import React from 'react'
import Classes from './ClassesList'
import ClassesForm from './ClassesForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ClassesStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='classes' component={Classes} options={{title: "Classes"}} />
    <Stack.Screen name='form-classes' component={ClassesForm} options={{title: "form-classes"}} />
    </Stack.Navigator>
    </>
  )
}

export default ClassesStack