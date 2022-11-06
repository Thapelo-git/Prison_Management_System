
import React,{useState,useEffect,Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,ToastAndroid,
  Dimensions,ImageBackgroud,Animated,Pressable,TextInput
} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { db,auth } from '../../../firebase';
import { Card } from 'react-native-elements'
  const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const {height} = Dimensions.get('window')
const imgContainerHeight = screenHeight * 0.4;
const sub = imgContainerHeight * 0.2;
const UserDetails = ({route,navigation}) => {
  const [Prisoners,setPrisoners]=useState([])
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [PrisonIdnumber,setPrisonIdnumber]=useState('')
  const [uid,setUid]=useState('')
  const user = auth.currentUser.uid;
  useEffect(()=>{
    db.ref(`/Pfamily/`+ user).on('value',snap=>{
      setName(snap.val() && snap.val().name);
  setEmail(snap.val().email)
  setPhonenumber(snap.val().phonenumber)
  setPrisonIdnumber(snap.val().PrisonId)
setUid(snap.val().uid)
    })
    db.ref('Puser').on('value',snap=>{
          
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
                 caseDesc:data.caseDesc,
                 mentality:data.mentality,
                 Arrestdesc:data.Arrestdesc,
                 sentence:data.sentence,
                 PrisonDeath:data.PrisonDeath,
                 Transfed:data.Transfed,
                 illness:data.illness,
             })
       })
     

      if (PrisonIdnumber) {
        const newData = Pusers.filter(function (element) {
          const itemData = element.IDnumber ? element.IDnumber : ''
          return itemData.indexOf(PrisonIdnumber) > -1
        })
        setPrisoners(newData)
      }
     
     
         
     })
  },[])
  console.log(PrisonIdnumber,'new one')
  return (
    <SafeAreaView style={{flex:1}}>
      {
        Prisoners.map(details=>
          <>
    <View style={styles.imgContaner}>
   
   <ImageBackground  source={{uri:details.url}}style={{ width: "100%", height: "100%" }} >
   <View style={styles.headerContainer} 
       >
          <View style={{backgroundColor: 'white',
opacity: 0.7,width:30,
 height:30,justifyContent:'center',alignItems:'center',
 borderRadius:10,}}>
          <Feather name="arrow-left" size={30} color='black'
        onPress={()=>navigation.goBack()} /> 
        </View>
       <Text style={styles.headerTitle}></Text>
       </View>
   </ImageBackground>
 </View>
 <View style={styles.cardBox}>
   
     <Text style={{fontSize:30,fontWeight:'bold',color:'gray'}}>{details.name} {details.surname}</Text>
     <Text>{details.IDnumber} {details.age}</Text>
     <Card.Divider/>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch'}}>
       <Text>{details.Arrestdesc}</Text>
       <Text>{details.sentence}</Text>
       <Text>{details.caseDesc}</Text>
     </View>
 <Card.Divider/>
 </View>
 </>
 )
}
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
cardBox: {
  paddingTop: 30,
  borderTopRightRadius: 40,
  borderTopLeftRadius: 40,
  padding: 20,
  marginTop: imgContainerHeight - sub,
  backgroundColor: "white",
  flex:1,

},
imgContaner: {
  width: screenWidth,
  height: imgContainerHeight,
  position: "absolute",
  top: 0,
},
headerContainer:{
  top:10,
  flexDirection:'row',justifyContent:'space-between',
  alignContent:'center'
  

},
header:{
  backgroundColor:'#fff',
  shadowColor:'#333333',
  shadowOffset:{width:-1,height:-2},
  shadowRadius:2,
  shadowOpacity:0.4,
  paddingTop:20,
  borderTopLeftRadius:20,
  borderTopRightRadius:20

},
})