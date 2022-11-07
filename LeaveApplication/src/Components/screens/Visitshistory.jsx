import { SafeAreaView, StyleSheet, Text, View ,Dimensions,TouchableOpacity,
  Image,TextInput,Alert} from 'react-native'
  import React,{useState,useEffect,} from 'react'
  import { db,auth } from '../../../firebase'
  import { Card } from 'react-native-elements'
  import {Picker} from '@react-native-picker/picker';
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import moment from 'moment'
  
  const deviceWidth=Dimensions.get("window").width
  const Visitshistory = ({navigation}) => {
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
        const[Position,setPosition]=useState('')
        const [ResignDate,setResignDate]=useState(moment(new Date()).format('YYYY/MM/DD'))
        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    
      const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        setResignDate(moment(date).format('YYYY/MM/DD') )
        // console.warn("A date has been picked: ", date);
        hideDatePicker();
      };
        const[Complaint,setComplaint]=useState('Does')
        const addBooking = (IDnumber,Name,
          Initials,EmployeeNumber) => {
          if (
            Position == '' 
    
          ) {
            Alert.alert("Error", "Enter all the fields", [
              {
                text: "ok",
              },
            ]);
          } else {
            db.ref('Resignation').push({
              Position,
              ResignDate,
              IDnumber, 
              Name,Initials,
              EmployeeNumber,
              userId:user
            })
            setPosition('')
            
          }
        };
    return (
      <SafeAreaView>
          {
                Visits.map(item=>
                  item.EmployeeNumber==EmployeeNumber?(
                    <>
                    <View style={{padding:5}}>
                   
                  <Text>I {item.IDnumber} would like to inform you that I am 
                  resigning from my position</Text>
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
                          placeholder="Enter your Position"
                          // multiline={true}
                          // numberOfLines={3}
                          // textAlignVertical={"top"}
                          onChangeText={(desc)=>setPosition(desc)}
                          
                          value={Position}
                        />
                      </View>
                      <View>
  <Text style={styles.titles}>select Effective Date </Text>
  <TouchableOpacity style={styles.datebutton} 
        onPress={()=>showDatePicker()} >
  <Image source={require("../assets/Images/date.jpg")} style={{height:20,width:20}}/>
        </TouchableOpacity>
  <Text>{ResignDate}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
  <Text>Thank you for the opportunities for professional and personal development
    that you have provided me .
  </Text>
  </View>
  <Text>I have enjoyed working for your organization and appreciate the support
    provided to me during my tenure with the company .
  </Text>
  
             <View style={{flexDirection:'row'}} >
                 
                  
                 <View style={{marginTop:20,}}>
                 <Text>If I can be of any help during this transition,please let me know.
  </Text>
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
  
  export default Visitshistory
  
  const styles = StyleSheet.create({
    datebutton:{
      height:60,
      width:100,
      borderRadius:10,
      borderWidth:1,
      borderColor: "rgba(0,0,0,.2)",
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
  
    },
  })