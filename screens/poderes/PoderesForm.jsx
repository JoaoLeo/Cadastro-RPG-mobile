import React from 'react'
import { ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import poderesValidators from '../../validators/poderesValidator';

const PoderesForm = ({navigation, route}) => {
  const poder = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('poderes').then(res =>{
      const poderes = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        poderes.splice(id,1,dados)
      } else {
        poderes.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('poderes', JSON.stringify(poderes))
      navigation.goBack();
    }
    })

  }
  return (
    <>
    <ScrollView style={{
      margin: 10
    }}> 
    <Text> Formulário de Poções </Text>
    <Formik
     initialValues={poder}
     validationSchema={poderesValidators}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome do Poder" 
    mode='outlined' 
    value={values.nome}
    onChangeText={handleChange("nome")}
    />
    {(errors.nome && touched.nome) && <Text style={{color: 'red'}}> {errors.nome} </Text>}
    <Divider/>
    <Picker
  selectedValue={values.elemento}
  onValueChange={handleChange('elemento')}
>
<Picker.Item label="Elemento" value="" />
  <Picker.Item label="Fogo" value="Fogo" />
  <Picker.Item label="Agua" value="Agua" />
  <Picker.Item label="Raio" value="Raio" />
  <Picker.Item label="Gelo" value="Gelo" />
</Picker>
    {(errors.elemento && touched.elemento) && <Text style={{color: 'red'}}> {errors.elemento} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nível de dano" 
    mode='outlined' 
    value={values.dano}
    onChangeText={handleChange("dano")}
    
    />
<Divider/>

{(errors.dano && touched.dano) && <Text style={{color: 'red'}}> {errors.dano} </Text>}
   
    <Button  mode="contained" buttonColor='#695757' onPress={handleSubmit}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default PoderesForm