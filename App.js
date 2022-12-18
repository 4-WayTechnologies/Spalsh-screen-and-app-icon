import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import React,{useEffect} from 'react'
useEffect(()=>{
    SplashScreen.hide();
  },2000)
const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})