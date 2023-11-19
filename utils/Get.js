import AsyncStorage from "@react-native-async-storage/async-storage";

function get(tipo){
    AsyncStorage.getItem(tipo).then(res =>{
      res = JSON.parse(res) || []
      return res;
    })
  }

  export default get