import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Button, Card, Dialog, Divider, FAB, IconButton, Portal, Text } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PoderesList = ({navigation}) => {
  const [poderes, setPoderes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0)

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  function get(){
    AsyncStorage.getItem('poderes').then(res =>{
      res = JSON.parse(res) || []
      setPoderes(res);
    })
  }

  function confirmDelete(i){
    setId(i);
    showDialog()
  }
  function excluir(){
    poderes.splice(id,1);
    AsyncStorage.setItem('poderes', JSON.stringify(poderes));
    get();
    hideDialog();
  }

  useFocusEffect(
    React.useCallback(() => {
      get();
    }, [])
  );

  return (

    <>
    <ScrollView style={{margin: 10}}> 

    <View> 

     {
       poderes.map((c,i) =>(
          <View key={i} > 
         <Card mode='outlined' style={{backgroundColor: '#708090', marginBottom: 10 }}>
            <Card.Content>
            <Text variant="titleLarge">{c.nome}</Text>
                <Text variant="bodyMedium">Elemento: {c.elemento}</Text>
                <Text variant="bodyMedium">Nível de dano: {c.dano}</Text>
              </Card.Content>
              <Card.Actions>
            <IconButton icon="trash-can" containerColor='#695757'
            iconColor='red' onPress={()=>{confirmDelete(i)}}></IconButton>
            <IconButton
            containerColor='#695757'
            iconColor='white'
            icon="grease-pencil"
            onPress={() => navigation.push('form-poderes', {id : i, obj : c})}></IconButton>
          </Card.Actions>
          </Card>
          </View>
        ))
      }
      <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </View>
      </ScrollView>
      <FAB
    icon="plus"
    size="small"
    style={{position: 'absolute', right: 5, bottom: 0, margin: 5}}
    onPress={() => navigation.push('form-poderes')}
  /> 
    </>
  )
}

export default PoderesList