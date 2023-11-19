import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ClassesStack from './screens/classes/ClasssesStack';
import JogadoresStack from './screens/jogadores/JogadoresStack';
import PersonagensStack from './screens/personagens/PersonagensStack';
import PocoesStack from './screens/pocoes/PocoesStack';
import PoderesStack from './screens/poderes/PoderesStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
    
    <PaperProvider>       
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
      name='classes' 
      component={ClassesStack}
      options={{
        tabBarLabel: 'Classes',
      }}
       />
      <Tab.Screen 
       name='jogadores'
       component={JogadoresStack}
       options={{
        tabBarLabel: 'Jogadores',       
      }}
        />
      <Tab.Screen
       name='personagens' 
       component={PersonagensStack} 
       options={{
        tabBarLabel: 'personagens',    
      }}
       />
       <Tab.Screen
       name='pocoes' 
       component={PocoesStack} 
       options={{
        tabBarLabel: 'Poções',   
      }}
       />
       <Tab.Screen
       name='poderes' 
       component={PoderesStack} 
       options={{
        tabBarLabel: 'Poderes', 
      }}
       />
        
    </Tab.Navigator>

      </NavigationContainer>
   </PaperProvider>
    </>
    
  );
}