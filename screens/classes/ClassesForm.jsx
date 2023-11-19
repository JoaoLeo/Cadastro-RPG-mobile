import React from 'react'
import { ScrollView } from 'react-native';
import classeValidator from '../../validators/classesValidator';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClassesForm = ({navigation, route}) => {
  const classe = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('classes').then(res =>{
      const classes = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        classes.splice(id,1,dados)
      } else {
        classes.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('classes', JSON.stringify(classes))
      navigation.goBack();
    }
    })

  }
  return (
    <>
    <ScrollView style={{
      margin: 10
    }}> 
    <Text> Formulário de classe </Text>
    <Formik
     initialValues={classe}
     validationSchema={classeValidator}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome da classe" 
    mode='outlined' 
    value={values.nome}
    onChangeText={handleChange("nome")}
    
    />
    {(errors.nome && touched.nome) && <Text style={{color: 'red'}}> {errors.nome} </Text>}
    <Divider/>
    <Picker
  selectedValue={values.maestria}
  onValueChange={handleChange('maestria')}
>
<Picker.Item label="Maestria" value="" />
  <Picker.Item label="Inteligência" value="inteligencia" />
  <Picker.Item label="Força" value="forca" />
  <Picker.Item label="Velocidade" value="velocidade" />
</Picker>
{(errors.maestria && touched.maestria) && <Text style={{color: 'red'}}> {errors.maestria} </Text>}
<Divider/>
<Picker
  selectedValue={values.combate}
  onValueChange={handleChange('combate')}
>
<Picker.Item label="Tipo de combate" value="" />
  <Picker.Item label="Fisico" value="fisico" />
  <Picker.Item label="Mágico" value="magico" />
</Picker>
{(errors.combate && touched.combate) && <Text style={{color: 'red'}}> {errors.combate} </Text>}
   
    <Button  mode="contained" buttonColor='#695757' onPress={handleSubmit}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default ClassesForm