import AsyncStorage from "@react-native-async-storage/async-storage";

async function salvar(tipo){
    AsyncStorage.getItem(tipo).then(res =>{
      const dados = JSON.parse(res) || []        
    if(JSON.stringify(tipo) != "{}"){
      if(id >= 0){
        dados.splice(id,1,tipo)
      } else {
        dados.push(tipo)
      }
      console.log(tipo);
      AsyncStorage.setItem(dados, JSON.stringify(dados))

    }
    })
}

export default salvar;