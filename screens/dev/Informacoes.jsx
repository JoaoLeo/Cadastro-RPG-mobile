import React from 'react'
import { ScrollView } from 'react-native'
import { Card, Divider, Text } from 'react-native-paper'

const Informacoes = () => {
  return (
    <>
     <ScrollView style={{
      margin: 10, 
    }}> 
     <Card style={{backgroundColor: "#695757"}}>
    <Card.Cover source={{ uri: 'https://www.dafont.com/forum/attach/orig/2/5/25141.jpg' }} />
    <Card.Content style={{margin: 5}}>
        <Divider/>
      <Text variant="titleLarge">Github: JoaoLeo</Text>
      <Text variant="bodyMedium">Email: joaoleonardo9921gmail.com</Text>
    </Card.Content>
    
  </Card>
  </ScrollView>
    </>
  )
}

export default Informacoes