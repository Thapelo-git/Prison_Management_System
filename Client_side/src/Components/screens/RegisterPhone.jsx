
import React,{useState,useEffect,Component} from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Separator} from './comp/Separator'
import { Images,Colors } from '../contants'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { Display } from '../utils'
import { db } from '../../../firebase'
const RegisterPhone = () => {
    const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [displayDate, setDisplayDate] = useState();
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
        setDateIsSet(true);
        console.log(currentDate, "-------");
        if (mode === "date") {
          showMode("time");
          const d = moment(currentDate).format("d MMM");
          setDisplayDate(d);
          console.log(d, "<<<------->>>>>");
    
          setShow(false);
        }
    
      };
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode("date");
      };
    
      const showTimepicker = () => {
        showMode("time");
      };
      const DateShow = () => (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      );
      const _myDate = date.toString();
     
    
        let startDateone= moment(_myDate).format("DD-MM-YYYY");
        let time= moment(_myDate).format("LT");
        const addBooking = () => {
           
              db.ref('Visits').push({
                startDateone,
               time
              })
            
          };
    return (
        <View style={styles.container}>
            
            
            <Text style={styles.title}>Update Visits Date and Time</Text>
            <Text>Select Date and Time</Text>
      <View style={{flexDirection:'row',alignItems:'center',padding:20,justifyContent:'space-around'}}>
     <View>{show && <DateShow/>}</View>
        <TouchableOpacity style={styles.datebutton} 
        onPress={()=>showDatepicker()} >
        <Text>Date</Text>
        <Image source={require("../assets/Images/date.jpg")} style={{height:20,width:20}}/>
        {/* <FontAwesome name='calendar' size={20}/> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.datebutton}
        onPress={()=>showTimepicker()} >
          <Text>Time</Text>
          <Image source={require("../assets/Images/clock.png")} style={{height:20,width:20}}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signinButton}
                       onPress={()=>addBooking()}
              >
                <Text style={styles.signinButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
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
