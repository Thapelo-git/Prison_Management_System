import React,{useEffect,useState} from 'react'
import {
    SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
    FlatList, Dimensions, ImageBackground, StatusBar,  ActivityIndicator
} from 'react-native'
import { Divider } from 'react-native-elements'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import {Separator} from './comp/Separator'
import { Images,Colors } from '../contants'
import { Display } from '../utils'
import { Formik } from 'formik'
import * as yup from 'yup'
import { auth,db } from '../../../firebase'
const deviceHeight=Dimensions.get("window").height
const deviceWidth=Dimensions.get("window").width
const PoliceSignUp = () => {
    const [Student, setStudent] = useState([])
    const user = auth.currentUser.uid;
    useEffect(() => {
        db.ref('/LeaveRequest').on('value', snap => {

            const Student = []
            snap.forEach(action => {
                const key = action.key
                const data = action.val()
                Student.push({
                    key:key,desc:data.desc,diff:data.diff,
                    Status:data.Status,Department:data.Department,interviewDate:data.interviewDate,
                    LeaveReason:data.LeaveReason,Supervisor:data.Supervisor,checkout:data.checkout,
                   EmployeeNumber:data.EmployeeNumber,Surname:data.Surname,
                })
          
              

            })
            setStudent(Student)
        })
    }, [])
    const updateAccept = (key,status) => {
        db.ref('LeaveRequest').child(key).update({Status:status})
          .then(()=>db.ref('LeaveRequest').once('value'))
          .then(snapshot=>snapshot.val())
          .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message
          }));
     
  
    }
    const NewCard = ({ element, index }) => {
        return (
           
                <>
                <View style={{ margin: 5,backgroundColor: '#fff',elevation: 3 }}>
           <View style={{width:'100%'}}>
                      <View style={{ backgroundColor: '#fff', justifyContent: 'flex-start', flexDirection: 'row', padding: 8, alignItems:'center', borderBottomRightRadius:10}}>
                       
                        <Text style={{fontWeight:'bold'}}>
                          Department:
                        </Text>
                        <Text style={{color: 'blue'}}>
                          {" "}{element.Department}
                        </Text>
                      </View>
                    </View>

                    <Divider style={{width: 90, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                    {/* event type */}
                    <View style={{flexDirection:'row',}}>
                    <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8, alignItems:'center'}}>
                      {/* <Ionicons name="documents" color='#333' size={20} /> */}
                      <Text style={{paddingHorizontal: 5,color:'#333'}}>
                       Effective date: {element.interviewDate}
                      </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', justifyContent:'flex-start', flexDirection: 'row', padding: 8, alignItems:'center'}}>
                    
                      <Text style={{paddingHorizontal: 5,color:'#333'}}>
                     Supervisor {element.Supervisor}
                      </Text>
                    </View>
                    </View>
                    <Divider style={{width: 120, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                    {/* date */}
                    <View style={{ backgroundColor: '#fff', justifyContent: 'flex-end', flexDirection: 'row', padding: 8, alignItems:'center' }}>
                      {/* <Feather
                        name="calendar" size={20}
                        style={{ paddingHorizontal: 5 }}
                        color='blue'
                      /> */}
                      <Text> : </Text>
                      <Text style={{color:'blue', fontSize:12}}>
                        {element.diff} days
                      </Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', justifyContent: 'flex-start', flexDirection: 'row', padding: 8, alignItems:'center' }}>
                      {/* <Feather
                        name="calendar" size={20}
                        style={{ paddingHorizontal: 5 }}
                        color='blue'
                      /> */}
                      <Text> Finish date: </Text>
                      <Text style={{color:'blue', fontSize:12}}>
                        {element.checkout} 
                      </Text>
                    </View>

                    <Divider style={{width: 170, justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}/>

                  {/* location */}
                  <View style={{ backgroundColor: '#fff', justifyContent:'flex-start', flexDirection: 'row', padding: 8, alignItems:'center'}}>
                    
                    <Text style={{paddingHorizontal: 5,color:'#333'}}>
                   Reason for Leave: {element.LeaveReason}
                    </Text>
                  </View>
                  {/* description */}
                  <Text style={{color:'#032B7A',fontWeight:'bold',fontSize:15}}>
  Yours sincerely       </Text>
                 <View style={{flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}>
                  <Text>Employee Number:</Text>
                 <Text
                   style={{color:'#032B7A',fontWeight:'bold',fontSize:15}} >
                     
                     {element.EmployeeNumber}
             
                 </Text>
              
                 </View>
                   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                     
                   <Text> Surname: {element.Surname}</Text>
                 </View>
                  {
                    element.Status =='Pending'?(
                        <View style={{justifyContent:'center',flexDirection:'row',marginVertical:10,}}>
                        <TouchableOpacity style={{borderWidth:2,
                            backgroundColor:'#fff',marginHorizontal:10,
                            borderColor:'green',width:70,height:40,
                            justifyContent:'center',alignItems:'center'
                          }} 
                          onPress={()=>updateAccept(element.key,'Accepted')}
                        >
                        <Text style={{color:'green'}}>Accept</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={ { borderWidth:2,
                            backgroundColor:'#fff',marginHorizontal:10,
                            borderColor:'red',width:70,height:40,
                            justifyContent:'center',alignItems:'center'
                          }}  
                          onPress={()=>updateAccept(element.key,'Rejected')}
                        >
                        <Text style={{color:'red'}}>Reject</Text>   
                        </TouchableOpacity>
                         </View>
                    ):(
                        
                        <Text style={{color:'red'}}>{element.Status}</Text>
                        
                    )
                  }
           
                  </View>
                </>
           
        )
          
    }
  return (
    <View>
      {/* <View style={styles.headerContainer}
            >
     <Text style={styles.headerTitle}>Interviews</Text>
            </View> */}
            <FlatList
                    keyExtractor={(_, key) => key.toString()}
                   horizontal
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20 }}
                    data={Student}
                    renderItem={({ item, index }) => <NewCard element={item} index={index} />}
                />
    </View>
  )
}

export default PoliceSignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EC8F05'
    } ,
    headerContainer:{
        flexDirection:'row' ,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:40,
        paddingHorizontal:20
     },
     headerTitle:{
       fontSize:20,
       lineHeight:20 * 1.4,
       width:Display.setWidth(80),
       textAlign:'center'  
 
     },
     
            content:{
                fontSize:20,
                marginTop:10,
                marginBottom:20,
                marginHorizontal:20,
            },
            inputContainer:{
                backgroundColor:'#F5F5F5',
                paddingHorizontal:20,
                marginHorizontal:20,
                borderRadius:8,
                borderWidth:0.5,
                borderColor:'#F5F5F5',
                justifyContent:'center',
            },
            inputSubContainer:{
                flexDirection:'row',
                alignItems:'center'
            },
            inputText:{
                fontSize:18,
                textAlignVertical:'center',
                padding:0,
                height:Display.setHeight(6),
                color:Colors.DEFAULT_BLACK,
                flex:1
        
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
            title:{
                fontSize:20,
                lineHeight:20 * 1.4,
                marginTop:20,
                marginBottom:30,
                marginHorizontal:20
                    },
                    signupContainer:{
                        marginHorizontal:20,
                        justifyContent:'center',
                        paddingVertical:20,
                        flexDirection:'row',
                        alignItems:'center'
                    },
                    accountText:{
                        fontSize:13,
                        lineHeight:13 * 1.4,
                        color:Colors.DEFAULT_BLACK
                    },
                    signupText:{
                        fontSize:13,
                        lineHeight:13 * 1.4,
                        color:'#EC8F05',
                        marginLeft:5,
                
                    },
})