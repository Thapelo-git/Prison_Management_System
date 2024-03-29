import { SafeAreaView, StyleSheet, Text, View ,Dimensions,TouchableOpacity,
Image,TextInput,Alert} from 'react-native'
import React,{useState,useEffect,} from 'react'
import { db,auth } from '../../../firebase'
import { Card } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import moment from 'moment'
//Visitshistory
const deviceWidth=Dimensions.get("window").width
const Visitsupcoming = ({navigation}) => {
  const user = auth.currentUser.uid;
    const [Visits,setVisits]=useState([])
    const [EmployeeNumber,setEmployeeNumber]=useState('')
    useEffect(()=>{
      db.ref(`/EmployeeUser/`+ user).on('value',snap=>{
        setEmployeeNumber(snap.val() && snap.val().EmployeeNumber);
  
      })
    
        db.ref('/EmployeeList').on('value',snap=>{
              
          const Visits=[]
             snap.forEach(action=>{
                 const key=action.key
                 const data =action.val()
                 Visits.push({
                     key:key,
                     Initials:data.Initials,
                     Name:data.Name,
                     
                     IDnumber:data.IDnumber,
                     EmployeeNumber:data.EmployeeNumber,
  
                 })
                })
                console.log(Visits)
            
                  setVisits(Visits)
             
                 
                }
              
        )
         
         
      },[])
      const[Grievance,setGrievance]=useState('')
      const[Complaint,setComplaint]=useState('Does')
      const addBooking = (IDnumber,Name,
        Initials,EmployeeNumber) => {
        if (
          Grievance == '' 
  
        ) {
          Alert.alert("Error", "Enter all the fields", [
            {
              text: "ok",
            },
          ]);
        } else {
          db.ref('Grievance').push({
            Grievance,
            Complaint,
            IDnumber, 
            Name,Initials,
            EmployeeNumber,
            userId:user
          })
          setGrievance('')
          
        }
      };
  return (
    <SafeAreaView>
        {
              Visits.map(item=>
                item.EmployeeNumber==EmployeeNumber?(
                  <>
                  <View style={{padding:5}}>
                 
                <Text>I {item.IDnumber} wish to raise formal complaint.</Text>
                <View
                      style={{
                        flexDirection: "row",
                        // alignItems: "center",
                        borderColor: "rgba(0,0,0,.2)",
                        borderWidth: 1,
                        Minheight: 100,
                        borderRadius: 15,
                        paddingHorizontal: 5,
                        marginVertical: 10
                      }}
                    >
                       <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          // backgroundColor: "#DEEDF0" ,
                          width: 40,
                          height: 40,
                          borderRadius: 10
                        }}
                      >
                         <Image source={require("../assets/Images/note.png")} style={{height:20,width:20}}/>
                      </View>
                      <TextInput
                        style={{
                          padding: 10,
                          margin: 10,
                          borderColor: "rgba(0,0,0,.2)",
                          
                          flex: 1,
                          
                          textAlign: "auto",
                         
                        }}
                        placeholder="Enter details here"
                        multiline={true}
                        numberOfLines={3}
                        textAlignVertical={"top"}
                        onChangeText={(desc)=>setGrievance(desc)}
                        
                        value={Grievance}
                      />
                    </View>
                    <View>
<Text style={styles.titles}>My Complain </Text>

<Picker
     selectedValue={Complaint}
     style={{ width: 180, height: 50, backgroundColor: '#eee' }}
     onValueChange={(text)=>setComplaint(text)}   >
    <Picker.Item label="Does" value="Does" />
    <Picker.Item label="Does_Not" value="Does_Not" />
  
</Picker>
<Text> include a complain of Bulling ,Harassment,Race,Transgender,etc</Text>
</View>
<Text>I would like to have a meeting with you to discuss my complain and look forward to hearing frm you</Text>

           <View style={{flexDirection:'row'}} >
               
                
               <View style={{marginTop:20,}}>
               <Text style={{color:'#032B7A',fontWeight:'bold',fontSize:15}}>
Yours sincerely       </Text>
               <View style={{flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}>
                <Text>Employee Number:</Text>
               <Text
                 style={{color:'#032B7A',fontWeight:'bold',fontSize:15}} >
                   
                   {item.EmployeeNumber}
           
               </Text>
            
               </View>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                   
                 <Text> Surname: {item.Name} {item.Initials}</Text>
               </View>
            
               </View>
               </View>
               <Card.Divider/>
              
               <TouchableOpacity onPress={()=>addBooking(item.IDnumber,item.Name,
               item.Initials,item.EmployeeNumber)}
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
                      <Text style={{fontWeight:'bold',fontSize:20}}>Submit</Text>
                    </View>
                       
                    </TouchableOpacity>
               </View>
                  </>
                ):(<></>)
                
                )
            }
    </SafeAreaView>
  )
}

export default Visitsupcoming

const styles = StyleSheet.create({})