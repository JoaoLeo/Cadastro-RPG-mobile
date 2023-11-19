import React from 'react'
import { ScrollView } from 'react-native';
import jogadorValidator from '../../validators/jogadorValidator';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mask } from 'remask';

const JogadoresForm = ({navigation, route}) => {
  const jogador = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('jogadores').then(res =>{
      const jogadores = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        jogadores.splice(id,1,dados)
      } else {
        jogadores.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('jogadores', JSON.stringify(jogadores))
      navigation.goBack();
    }
    })

  }
  return (
    <>
    <ScrollView style={{
      margin: 10
    }}> 
    <Text> Formulário de jogador </Text>
    <Formik
     initialValues={jogador}
     validationSchema={jogadorValidator}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Nome do jogador" 
    mode='outlined' 
    value={values.nome}
    onChangeText={handleChange("nome")}
    
    />
    {(errors.nome && touched.nome) && <Text style={{color: 'red'}}> {errors.nome} </Text>}
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
    label="Email" 
    mode='outlined' 
    value={values.email}
    onChangeText={handleChange("email")}
    />
    {(errors.email && touched.email) && <Text style={{color: 'red'}}> {errors.email} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="CPF" 
    mode='outlined' 
    value={values.cpf}
    onChangeText={value => setFieldValue('cpf',mask(value, '999.999.999-99'))}
    />
    {(errors.cpf && touched.cpf) && <Text style={{color: 'red'}}> {errors.cpf} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Telefone" 
    mode='outlined' 
    value={values.telefone}
    onChangeText={value => setFieldValue('telefone',mask(value, '(99)999999999'))}
    />
    {(errors.telefone && touched.telefone) && <Text style={{color: 'red'}}> {errors.telefone} </Text>}
    <Divider/>
    <Button  mode="contained" buttonColor='#695757' onPress={handleSubmit}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default JogadoresForm