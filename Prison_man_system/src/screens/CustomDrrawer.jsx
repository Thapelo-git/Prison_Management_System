import { StyleSheet, Text, View ,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth,db } from '../../firebase'
const CustomDrrawer = (props) => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [img,setImg]=useState('')
  const [uid,setUid]=useState('')
  const user = auth.currentUser.uid;
  useEffect(()=>{
      db.ref(`/Pfamily&police/`+ user).on('value',snap=>{
        
        setName(snap.val() && snap.val().name);
    setEmail(snap.val().email)
    setPhonenumber(snap.val().phonenumber)
 
  setUid(snap.val().uid)
      })
 
    },[])

  const onSignout =()=>{
      auth
      .signOut()
      
  }
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}
    contentContainerStyle={{backgroundColor:'#fff'}}>
      <View style={{padding:20,flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../assets/Images/logo.png')}
      style={{height:100,width:100,borderRadius:50}}/>
      <Text>{email}</Text>
      </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc',
  backgroundColor:'red'}}>
      <TouchableOpacity  onPress={()=>onSignout() }>
      <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default CustomDrrawer

const styles = StyleSheet.create({})