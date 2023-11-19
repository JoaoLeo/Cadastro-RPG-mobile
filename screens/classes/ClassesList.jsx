import React, { useState } from 'react'
import get from '../../utils/Get';
import { useFocusEffect } from '@react-navigation/native';

const ClassesList = () => {
  const [cursos, setCursos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0)

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);


  function pegarDados(){
    setCursos(get('classes'));
  }
  useFocusEffect(
    React.useCallback(() => {
      pegarDados();
    }, [])
  );

  return (
    <>ClassesList</>
  )
}

export default ClassesList