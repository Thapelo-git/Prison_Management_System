import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
const CustomDrrawer = (props) => {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}
    contentContainerStyle={{backgroundColor:'#fff'}}>
      <View style={{padding:20,flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../assets/Images/logo.png')}
      style={{height:100,width:100,borderRadius:50}}/>
      <Text>Mol@gmail.com</Text>
      </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
      <TouchableOpacity  onPress={()=>{}}>
      <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default CustomDrrawer

const styles = StyleSheet.create({})