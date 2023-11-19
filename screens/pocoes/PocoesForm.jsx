import React from 'react'
import { ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pocoesValidators from '../../validators/pocoesValidator';

const PocoesForm = ({navigation, route}) => {
  const pocao = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('pocoes').then(res =>{
      const pocoes = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        pocoes.splice(id,1,dados)
      } else {
        pocoes.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('pocoes', JSON.stringify(pocoes))
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
     initialValues={pocao}
     validationSchema={pocoesValidators}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome da Poção" 
    mode='outlined' 
    value={values.nome}
    onChangeText={handleChange("nome")}
    
    />
    {(errors.nome && touched.nome) && <Text style={{color: 'red'}}> {errors.nome} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Quantidade" 
    mode='outlined' 
    value={values.quantidade}
    onChangeText={handleChange("quantidade")}
    
    />
    {(errors.quantidade && touched.quantidade) && <Text style={{color: 'red'}}> {errors.quantidade} </Text>}
    <Divider/>
<Divider/>
<Picker
  selectedValue={values.perigo}
  onValueChange={handleChange('perigo')}
>
<Picker.Item label="Perigo" value="" />
  <Picker.Item label="Inovensivo" value="Inovensivo" />
  <Picker.Item label="Mediano" value="Mediano" />
  <Picker.Item label="Mortal" value="Mortal" />
</Picker>
{(errors.perigo && touched.perigo) && <Text style={{color: 'red'}}> {errors.perigo} </Text>}
   
    <Button  mode="contained" buttonColor='#695757' onPress={handleSubmit}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default PocoesForm