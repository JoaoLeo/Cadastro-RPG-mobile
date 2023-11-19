import React from 'react'
import salvarDados from '../../utils/Salvar'

const ClassesForm = ({navigation, route}) => {
  function salvar(dados){
    salvarDados(dados);
    navigation.goBack();
  }
  return (
    <>
    
    </>
  )
}

export default ClassesForm