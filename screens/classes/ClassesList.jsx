import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Button, Card, Dialog, Divider, FAB, IconButton, Portal, Text } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClassesList = ({navigation}) => {
  const [classes, setClasses] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0)

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  function get(){
    AsyncStorage.getItem('classes').then(res =>{
      res = JSON.parse(res) || []
      setClasses(res);
    })
  }

  function confirmDelete(i){
    setId(i);
    showDialog()
  }
  function excluir(){
    classes.splice(id,1);
    AsyncStorage.setItem('classes', JSON.stringify(classes));
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
       classes.map((c,i) =>(
          <View key={i}>  
         <Card mode='outlined' style={{backgroundColor: '#708090', marginBottom: 10 }}>
            <Card.Content>
            <Text variant="titleLarge">{c.nome}</Text>
                <Text variant="bodyMedium">Maestria: {c.maestria}</Text>
                <Text variant="bodyMedium">Tipo de combate: {c.combate}</Text>
              </Card.Content>
              <Card.Actions>
            <IconButton icon="trash-can" containerColor='#695757'
            iconColor='red' onPress={()=>{confirmDelete(i)}}></IconButton>
            <IconButton
            containerColor='#695757'
            iconColor='white'
            icon="grease-pencil"
            onPress={() => navigation.push('form-classes', {id : i, obj : c})}></IconButton>
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
    onPress={() => navigation.push('form-classes')}
  /> 
    </>
  )
}

export default ClassesList