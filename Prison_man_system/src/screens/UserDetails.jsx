import { SafeAreaView, StyleSheet, Text, View ,Dimensions,ImageBackground} from 'react-native'
import React,{useState,useEffect} from 'react'
import { db } from '../../firebase'
const screenHeight=Dimensions.get('screen').height
const imgContainer = screenHeight *0.3
const container =screenHeight *0.3
const UserDetails = ({route}) => {
  // const [Idnumber,setIdnumber]=useState(route.params)
  useEffect(()=>{
    db.ref('/Puser').on('value',snap=>{
          
      const Pusers=[]
         snap.forEach(action=>{
             const key=action.key
             const data =action.val()
             Pusers.push({
                 key:key,
                surname:data.surname,
                 name:data.name,
                 url:data.url,
                 IDnumber:data.IDnumber,
                
             })
       })
       setPusers(Pusers)
     
         
     })
  },[])
  return (
    <SafeAreaView>
      <ImageBackground 
      source={{ uri: 'https://images.vexels.com/media/users/3/140759/isolated/preview/328ff48684eef92268d8e22b173925ac-man-cartoon-thinking.png'}}
      style={{width:'100%',height:imgContainer}}>
       
      </ImageBackground>
      <View style={{marginTop:imgContainer-container, backgroundColor:'#fff',padding:20,height:'100%'}}>

      </View>
    </SafeAreaView>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  inputContainer:{
    backgroundColor:'#fff',
    
    borderRadius:8,
    borderWidth:0.5,
    borderColor:'#000',
    justifyContent:'center',
   
},
inputSubContainer:{
    flexDirection:'row',
    alignItems:'center'
},
})