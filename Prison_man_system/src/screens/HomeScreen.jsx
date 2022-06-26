
import React,{useEffect,useState} from 'react'
import { db,auth } from '../../firebase'
import { View, Text, SafeAreaView, ImageBackground ,FlatList,ScrollView,
  Dimensions,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native'
import { Display } from '../utils'
import Feather from "react-native-vector-icons/Feather"
import { Card } from 'react-native-elements'
const screenHeight=Dimensions.get('screen').height
const imgContainer = screenHeight *0.3
const container =screenHeight *0.3
const HomeScreen = ({navigation,route}) => {
  const [error,setError]=useState('')
  const [Pusers,setPusers]=useState([])
  const [Prisoner,setPrisoner]=useState([])
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
       setPrisoner(Pusers)
       if (PrisonIdnumber) {
        const newData = Pusers.filter(function (element) {
          const itemData = element.IDnumber ? element.IDnumber : ''
          return itemData.indexOf(PrisonIdnumber) > -1
        })
        setPusers(newData)
      }
      
      
     })
  },[])
  console.log(Prisoner,'details.....')
  const [searchtext,setSearchtext] = useState('');
  const [Prisonidnumber,setPrisonidnumber]=useState('')

  const updateID=()=>{
    
    {
      Prisoner.map( (element)=>{
        if(element.IDnumber === Prisonidnumber){
         
          
          db.ref('Pfamily').child(user).set({PrisonId:Prisonidnumber,
          email:email,name:name,phonenumber:phonenumber,uid:uid})
           navigation.navigate('UserDetails')
        }else{
          setError('No such ID Number in our Place')
      }
  })
    }
  }
 

 

  return (
    <SafeAreaView>
      
     
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
                        // onChangeText={(text) => Search(text)}
                        onChangeText={(text) => setPrisonidnumber(text)}
                      />
                    </View>
       <Text style={{color:'red'}}>{error}</Text>
       <TouchableOpacity style={styles.signinButton}
                       onPress={()=>updateID()}
              >
                <Text style={styles.signinButtonText}
                
                >Submit</Text>
            </TouchableOpacity>
            {
              Pusers.map(item=>
                <View style={{padding:5}}>
                <TouchableOpacity onPress={()=>navigation.navigate("PolUserDetails",{data:item})}>
          <View style={{flexDirection:'row'}} >
              
                <View style={{padding:10}}>
              <Image source={{uri:item.url}} style={{height:80,width:80,borderRadius:40}}/>
              </View>
              <View style={{marginTop:20,}}>
              <View style={{flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}>
              <Text
                style={{color:'#032B7A',fontWeight:'bold',fontSize:20}}
                >
                  
                 Name:  {item.name}
          
              </Text>
           
              </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  
                <Text> Surname: {item.surname}</Text>
              </View>
           
              </View>
              </View>
              <Card.Divider/>
              </TouchableOpacity>
              </View>
                )
            }
      </View>
     
      
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