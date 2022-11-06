
import React,{useEffect,useState,Component} from 'react'
import { db,auth } from '../../../firebase'
import { View, Text, SafeAreaView, ImageBackground ,FlatList,ScrollView,
  Dimensions,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native'
import { Display } from '../utils' 
import Feather from "react-native-vector-icons/Feather"
import { Card } from 'react-native-elements'
const screenHeight=Dimensions.get('screen').height
const imgContainer = screenHeight *0.2
const container =screenHeight *0.1
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
    db.ref(`/EmployeeUser/`+ user).on('value',snap=>{
      setName(snap.val() && snap.val().EmployeeNumber);
  setEmail(snap.val().email)
  setPhonenumber(snap.val().phonenumber)
  // setPrisonIdnumber(snap.val().PrisonId)
setUid(snap.val().uid)
    })
    db.ref('/EmployeeList').on('value',snap=>{
          
      const Pusers=[]
         snap.forEach(action=>{
             const key=action.key
             const data =action.val()
             Pusers.push({
                 key:key,
                Initials:data.Initials,
                 Name:data.Name,
                 
                 IDnumber:data.IDnumber,
                 EmployeeNumber:data.EmployeeNumber,
                 
             })
       })
       setPrisoner(Pusers)
      //  if (PrisonIdnumber) {
      //   const newData = Pusers.filter(function (element) {
      //     const itemData = element.IDnumber ? element.IDnumber : ''
      //     return itemData.indexOf(PrisonIdnumber) > -1
      //   })
      //   setPusers(newData)
      // }
      
      
     })
  },[])
  console.log(Prisoner,'details.....')
  const [NewPrisoner,setNewPrisoner]=useState([])
  const [searchtext,setSearchtext] = useState('');
  const [Prisonidnumber,setPrisonidnumber]=useState('')
  const FilterFunction =(text)=>{
    if(text){
        const newData = Prisoner.filter(function(item){
            const itemData = IDnumber.name? item.IDnumber.toUpperCase()
            :''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf( textData)>-1;

        })
        setNewPrisoner(newData)
        setSearchtext(text)
    }}
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
    <SafeAreaView style={{backgroundColor:'#fff'}}>
      
     
      <View 
      style={{width:'100%',height:imgContainer,backgroundColor:'#000',
      justifyContent:'center',alignItems:'center',borderBottomLeftRadius:50,
      borderBottomRightRadius:50}}>
       <View
       style={{justifyContent:'center',alignItems:'center',width:200,height:200,backgroundColor:'#fff',
       marginTop:imgContainer,borderRadius:20}}>
         <Text style={{fontWeight:'bold',color:'gray',fontSize:30}}>Request for</Text>
         <Text style={{fontWeight:'bold',color:'gray',fontSize:30}}>Leave?</Text>
       </View>
      </View>
      <View style={{marginTop:imgContainer-container, backgroundColor:'#fff',padding:20,height:'100%'}}>
      {/* 22758486 */}
     {/* <Text style={{fontWeight:'bold'}}>Enter Prisoner Id number</Text> */}

     
       {/* <Text style={{color:'red'}}>{error}</Text>
       <TouchableOpacity style={styles.signinButton}
                       onPress={()=>updateID()}
              >
                <Text style={styles.signinButtonText}
                
                >Submit</Text>
            </TouchableOpacity> */}
            {
              Prisoner.map(item=>
                item.EmployeeNumber==name?(
                  <>
                  <View style={{padding:5}}>
                 
                
           <View style={{flexDirection:'row'}} >
               
                 {/* <View style={{padding:10}}>
               <Image source={{uri:item.url}} style={{height:80,width:80,borderRadius:40}}/>
               </View> */}
               <View style={{marginTop:20,}}>
               <View style={{flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}>
               <Text
                 style={{color:'#032B7A',fontWeight:'bold',fontSize:20}}
                 >
                   
                   Number: {item.EmployeeNumber}
           
               </Text>
            
               </View>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                   
                 <Text> Surname: {item.Name}</Text>
               </View>
            
               </View>
               </View>
               <Card.Divider/>
              
               <TouchableOpacity onPress={()=>navigation.navigate("Interviews",{data:item})}
                      style={{
                        justifyContent:'center',
                        alignItems: "center",
                        borderColor: "rgba(0,0,0,.2)",
                        borderWidth: 1,
                        height: 60,
                        borderRadius: 15,
                        paddingHorizontal: 5,
                        marginVertical: 10
                      }}
                    >
                    <View>
                      <Text style={{fontWeight:'bold',fontSize:20}}>Request</Text>
                    </View>
                       
                    </TouchableOpacity>
               </View>
                  </>
                ):(<></>)
                
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