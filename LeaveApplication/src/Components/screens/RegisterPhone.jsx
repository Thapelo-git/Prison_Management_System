
import React,{useState,useEffect,Component} from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Separator} from './comp/Separator'
import { Images,Colors } from '../contants'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
//SplashScreen
import { Card } from 'react-native-elements'
import { Display } from '../utils'
import { db } from '../../../firebase'
const RegisterPhone = () => {
  const [Resignation,setResignation]=useState([])
 
  useEffect(()=>{
  
      db.ref('/Resignation').on('value',snap=>{
            
        const Visits=[]
           snap.forEach(action=>{
               const key=action.key
               const data =action.val()
               Visits.push({
                   key:key,
                   Initials:data.Initials,
                   Name:data.Name,
                   Position:data.Position,
                   IDnumber:data.IDnumber,
                   EmployeeNumber:data.EmployeeNumber,
                  ResignDate:data.ResignDate,
               })
              })
              
          
                setResignation(Visits)
           
               
              }
            
      )
       
       
    },[])
    const NewCard = ({ item, index }) => {
      return (
         
              <>
              <View style={{ margin: 5,backgroundColor: '#fff',elevation: 3 }}>
         <View style={{width:250,padding:10}}>
         <Text>I {item.IDnumber} would like to inform you that I am 
                  resigning from my position {item.Position}</Text>
   
                      <View>
  <Text style={styles.titles}>select Effective Date </Text>
  
  <Text>{item.ResignDate}</Text>
  <Card.Divider/>
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
                
              
                  </View>
                </View>
              </>
         
      )
        
  }
    return (
      <FlatList
      keyExtractor={(_, key) => key.toString()}
     horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
      data={Resignation}
      renderItem={({ item, index }) => <NewCard item={item} index={index} />}
  />
    )
}

export default RegisterPhone

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
    ,
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
     title:{
        fontSize:20,
        lineHeight:20 * 1.4,
        marginTop:50,
        marginBottom:10,
        marginHorizontal:20
            },
            content:{
                fontSize:20,
                marginTop:10,
                marginBottom:20,
                marginHorizontal:20,
            },
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
