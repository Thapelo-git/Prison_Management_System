import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,TextInput,
Button,Alert,Image} from 'react-native'
import React,{useState,useEffect,Component} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import Icon from "react-native-vector-icons/Ionicons"
import { Display } from '../utils'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { db,auth } from '../../../firebase'
const Interviews = ({route,navigation}) => {
  const data=route.params.data
  const [email,setEmail]=useState()
  const [phonenumber,setPhonenumber]=useState()
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [displayDate, setDisplayDate] = useState();
  const [uid,setUid]=useState('')
  const user = auth.currentUser.uid;
 
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
 

    let interviewDate = moment(_myDate).format("YYYY/MM/DD");
    // let interviewTime = moment(_myDate).format("LT");
    let interviewTime = moment(_myDate).format("DD-MM-YYYY");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [checkout,setCheckout]=useState(moment(new Date()).add(1,'days').format('YYYY/MM/DD'))
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setCheckout(moment(date).format('YYYY/MM/DD') )
      // console.warn("A date has been picked: ", date);//8152486760 pin:2022
      hideDatePicker();
    };
    const [Department,setDepartment]=useState('')
    const [Supervisor,setSupervisor]=useState('')
    const [LeaveReason,setLeaveReason]=useState('')
    const addBooking = () => {
      if (
      
        LeaveReason == '' ||
        Supervisor == '' ||
        Department == ''

      ) {
        Alert.alert("Error", "Enter all the fields", [
          {
            text: "ok",
          },
        ]);
      } else {
        db.ref('LeaveRequest').push({
          Status:'Pending',
          LeaveReason,
          Department,
          Supervisor, 
          interviewDate,Surname:data.Name,
          checkout,diff,EmployeeNumber:data.EmployeeNumber,
          userId:user
        })
        setSupervisor('')
        setDepartment('')
        setLeaveReason('')
      }
    };
    var a =moment(checkout)
    var b =moment(interviewDate)
    
   var diff=0
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}
        >
          <View style={{
            backgroundColor: 'white',
            opacity: 0.7, width: 30,
            height: 30, justifyContent: 'center', alignItems: 'center',
            borderRadius: 10,
          }}>
            <Text onPress={() => navigation.goBack()} style={styles.headerTitle}>back</Text>
          </View>
          
        </View>
      <View style={{flexDirection:'row',}}>
      <View style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start'}}>
<Text> Employee No: {data.EmployeeNumber}</Text>
</View>
      <View style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
      <Text> Surname: {data.Name}</Text>
      </View>
      </View>
      <Text>Select Date and Time</Text>
      <View style={{flexDirection:'row',alignItems:'center',padding:20,justifyContent:'space-around'}}>
     <View>{show && <DateShow/>}</View>
        <TouchableOpacity style={styles.datebutton} 
        onPress={()=>showDatepicker()} >
        <Text>From:</Text>
        <Image source={require("../assets/Images/date.jpg")} style={{height:20,width:20}}/>
        {/* <FontAwesome name='calendar' size={20}/> */}
        <Text>{interviewDate}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.datebutton}
        // onPress={()=>showTimepicker()}
        onPress={()=>showDatePicker()}>
          <Text>To:</Text>
          <Image source={require("../assets/Images/date.jpg")} style={{height:20,width:20}}/>
          <Text>{checkout}</Text>
          
        </TouchableOpacity>
        
                        <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode="date"
                          minimumDate={new Date()}
                          onConfirm={handleConfirm}
                          onCancel={hideDatePicker}
                        />
      </View>

      <Text>{diff=(a.diff(b,'days'))} days</Text>       
      <View>
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
                      >
                     <Image source={require("../assets/Images/note.png")} style={{height:20,width:20}}/>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        placeholder="Enter your Department"
                        onChangeText={(title)=>setDepartment(title)}
                   
                        value={Department}
                      />
                    </View>
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
                      >
                     <Image source={require("../assets/Images/note.png")} style={{height:20,width:20}}/>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        placeholder="Enter Supervisor Name"
                        onChangeText={(title)=>setSupervisor(title)}
                   
                        value={Supervisor}
                      />
                    </View>
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
                        placeholder="Enter Reason for leave"
                        multiline={true}
                        numberOfLines={3}
                        textAlignVertical={"top"}
                        onChangeText={(desc)=>setLeaveReason(desc)}
                        
                        value={LeaveReason}
                      />
                    </View>
                    {/* <Button
                        
                        // disabled={!isValid || !dateIsSet || !optionpicker}

                        title="+Add to list "
                        buttonStyle={{ backgroundColor: 'blue' }}
                        containerStyle={{ width: 150, marginVertical: 10 }}
                      ></Button> */}
                       <TouchableOpacity style={styles.signinButton}
                       onPress={()=>addBooking()}
              >
                <Text style={styles.signinButtonText}>Submit</Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Interviews

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