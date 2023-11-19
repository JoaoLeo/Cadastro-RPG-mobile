import React from 'react'
import { ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mask } from 'remask';
import personagemValidator from '../../validators/personagemValidator';

const PersonagensForm = ({navigation, route}) => {
  const personagem = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('personagens').then(res =>{
      const personagens = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        personagens.splice(id,1,dados)
      } else {
        personagens.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('personagens', JSON.stringify(personagens))
      navigation.goBack();
    }
    })

  }
  return (
    <>
    <ScrollView style={{
      margin: 10
    }}> 
    <Text> Formulário de personagem </Text>
    <Formik
     initialValues={personagem}
     validationSchema={personagemValidator}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome do personagem" 
    mode='outlined' 
    value={values.nome}
    onChangeText={handleChange("nome")}
    
    />
    {(errors.nome && touched.nome) && <Text style={{color: 'red'}}> {errors.nome} </Text>}
        <Picker
      selectedValue={values.raca}
      onValueChange={handleChange('raca')}
    >
          <Picker.Item label="Raça" value="" />
          <Picker.Item label="Humano" value="Humano" />  
          <Picker.Item label="Elfo" value="Elfo" />
          <Picker.Item label="Draconato" value="Draconato" /> 
          <Picker.Item label="Goblin" value="Goblin" />
          <Picker.Item label="Halfling" value="Halfling" /> 
          <Picker.Item label="Tiefling" value="Tiefling" /> 
</Picker>
{(errors.raca && touched.raca) && <Text style={{color: 'red'}}> {errors.raca} </Text>}
<Divider/>
<Picker
      selectedValue={values.alinhamento}
      onValueChange={handleChange('alinhamento')}
    >
      <Picker.Item label="Alinhamento" value="" />
          <Picker.Item label="Leal e Bom" value="Leal e Bom" />
          <Picker.Item label="Neutro e Bom" value="Neutro e Bom" />  
          <Picker.Item label="Caótico e Bom" value="Caótico e Bom" />
          <Picker.Item label="Leal e Neutro" value="Leal e Neutro" /> 
          <Picker.Item label="Neutro" value="Neutro" />
          <Picker.Item label="Caótico e Neutro" value="Caótico e Neutro" /> 
          <Picker.Item label="Leal e Mau" value="Leal e Mau" /> 
          <Picker.Item label="Neutro e Mau" value="Neutro e Mau" /> 
          <Picker.Item label="Caótico e Mau" value="Caótico e Mau" /> 
</Picker>
{(errors.alinhamento && touched.alinhamento) && <Text style={{color: 'red'}}> {errors.alinhamento} </Text>}
<Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Idade" 
    mode='outlined' 
    value={values.idade}
    onChangeText={handleChange("idade")}
    />
    {(errors.idade && touched.idade) && <Text style={{color: 'red'}}> {errors.idade} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Aparência Fiśica" 
    mode='outlined' 
    value={values.aparencia}
    onChangeText={handleChange("aparencia")}
    />
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="História" 
    mode='outlined' 
    value={values.historia}
    onChangeText={handleChange("historia")}
    />
    <Divider/>
    <Button  mode="contained" buttonColor='#695757' onPress={handleSubmit}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default PersonagensForm