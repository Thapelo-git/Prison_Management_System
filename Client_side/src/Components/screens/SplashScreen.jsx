import React ,{useState,useEffect} from 'react'
import { StyleSheet, Text,TextInput,
  StatusBar,Image, View,Button } from 'react-native';
  import {Colors,Images} from '../contants';
  import Display from '../utils'
const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('Welcome')
    },2000)
  },[])
    return (
        <>
          <View style={styles.container}>
            <StatusBar barStyle="light-content"
            backgroundColor='#EC8F05'
            translucent/>
            <Image
            source={require('../assets/Images/logo.png')}
            resizeMode="contain"
            style={styles.image}/>
      <Text style={styles.titleText}>Prison Management System</Text>
      
    </View>  
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:30,
    },
    image:{
      height:80,
      width:100,
      borderRadius:90
    },
    titleText:{
      color:'#fff',
      fontSize:40
    }
  });

export default SplashScreen
