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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InfoStack from './screens/dev/InfoStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
    
    <PaperProvider>       
      <NavigationContainer>
      <Tab.Navigator barStyle={{backgroundColor: "#695757"}}>
      <Tab.Screen 
      name='Classes' 
      component={ClassesStack}
      options={{
        tabBarLabel: 'Classes',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bookshelf" color={color} size={26} />
        ),
      }}
       />
      <Tab.Screen 
       name='Jogadores'
       component={JogadoresStack}
       options={{
        tabBarLabel: 'Jogadores',       
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="controller-classic" color={color} size={26} />
        ),
      }}
        />
      <Tab.Screen
       name='Personagens' 
       component={PersonagensStack} 
       options={{
        tabBarLabel: 'Personagens',    
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="shield-account" color={color} size={26} />
        ),
      }}
       />
       <Tab.Screen
       name='Pocoes' 
       component={PocoesStack} 
       options={{
        tabBarLabel: 'Poções',   
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bowl-mix" color={color} size={26} />
        ),
      }}
       />
       <Tab.Screen
       name='Poderes' 
       component={PoderesStack} 
       options={{
        tabBarLabel: 'Poderes', 
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="fire" color={color} size={26} />
        ),
      }}
       />
       <Tab.Screen
       name='Dev' 
       component={InfoStack} 
       options={{
        tabBarLabel: 'Dev', 
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
       />
        
    </Tab.Navigator>

      </NavigationContainer>
   </PaperProvider>
    </>
    
  );
}