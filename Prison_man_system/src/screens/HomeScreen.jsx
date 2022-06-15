
import React,{useEffect,useState} from 'react'
import { db } from '../../firebase'
import { View, Text, SafeAreaView, ImageBackground ,
  Dimensions,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native'
import { Display } from '../utils'
import Feather from "react-native-vector-icons/Feather"
const screenHeight=Dimensions.get('screen').height
const imgContainer = screenHeight *0.3
const container =screenHeight *0.3
const HomeScreen = ({navigation,route}) => {
  const [error,setError]=useState('')
  const [Pusers,setPusers]=useState([])
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
  console.log(Pusers)
  const [Pidnumber,setPidnumber]=useState()
  const Search=(text)=>{
    {
      Pusers.map( (element)=>{
        if(element.IDnumber === text){
          setPidnumber(text)
          navigation.navigate('UserDetails',{IDnumber:Pidnumber})
        }else{
          setError('No such ID Number in our Place')
      }
  })
    }
  }
  return (
    <SafeAreaView>
      {
        Pusers.map(element=>
          <>
     
      <ImageBackground 
      source={{ uri: 'https://images.vexels.com/media/users/3/140759/isolated/preview/328ff48684eef92268d8e22b173925ac-man-cartoon-thinking.png'}}
      style={{width:'100%',height:imgContainer}}>
       
      </ImageBackground>
      <View style={{marginTop:imgContainer-container, backgroundColor:'#fff',padding:20,height:'100%'}}>
      
     <Text style={{fontWeight:'bold'}}>Enter Prisoner ID number</Text>

       <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "rgba(0,0,0,.2)",
                        borderWidth: 1,
                        height: 60,
                        borderRadius: 15,
                        paddingHorizontal: 5,
                        marginVertical: 10
                      }}
                    >
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#DEEDF0",
                          width: 40,
                          height: 40,
                          borderRadius: 10
                        }}
                      ><Feather name="user" size={22}
 
                      style={{marginRight:10}}/></View>
                       <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        placeholder="Title"
                        onChangeText={(text) => Search(text)}

                      />
                    </View>
       <Text style={{color:'red'}}>{error}</Text>
      
     
      </View>
      </>
           )
          }
    </SafeAreaView>
  )
}

export default HomeScreen

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
signinButton:{
  backgroundColor:'#000',
  borderRadius:8,
  marginHorizontal:20,
  height:Display.setHeight(6),
  justifyContent:'center',
  alignItems:'center',
  marginTop:20,
},
signinButtonText:{
  fontSize:18,
  lineHeight:18 * 1.4,
  color:'#fff',
  
},
})