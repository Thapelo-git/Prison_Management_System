import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,TextInput,
Button,Alert} from 'react-native'
import React,{useState,useEffect,Component} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import Icon from "react-native-vector-icons/Ionicons"
import { Display } from '../utils'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { db,auth } from '../../../firebase'
const Interviews = ({route}) => {
  
  const [email,setEmail]=useState()
  const [phonenumber,setPhonenumber]=useState()
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [displayDate, setDisplayDate] = useState();
  const [uid,setUid]=useState('')
  const user = auth.currentUser.uid;
  useEffect(()=>{
    db.ref(`/Pfamily/`+ user).on('value',snap=>{
  setEmail(snap.val().email)
  setPhonenumber(snap.val().phonenumber)
  setUid(snap.val().uid)
    })

  },[])
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
 

    let interviewDate = moment(_myDate).format("DD-MM-YYYY");
    let interviewTime = moment(_myDate).format("LT");
    const [title,setTitle]=useState('')
    const [desc,setDescription]=useState('')
    const addBooking = () => {
      if (
      
        title == '' ||
        desc == '' 

      ) {
        Alert.alert("Error", "Enter all the fields", [
          {
            text: "ok",
          },
        ]);
      } else {
        db.ref('Interview').push({
          Status:'Pending',
          title,
          desc, 
          interviewDate,
          interviewTime,email,phonenumber,
          userId:uid
        })
        setDescription('')
        setTitle('')
      
      }
    };
  return (
    <SafeAreaView>
      <Text>Select Date and Time</Text>
      <View style={{flexDirection:'row',alignItems:'center',padding:20,justifyContent:'space-around'}}>
     <View>{show && <DateShow/>}</View>
        <TouchableOpacity style={styles.datebutton} 
        onPress={()=>showDatepicker()} >
        
        <FontAwesome name='calendar' size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.datebutton}
        onPress={()=>showTimepicker()} >
        <FontAwesome name='clock-o' size={20}/>
        </TouchableOpacity>
      </View>
{/*       
                    <Text style={{  fontWeight: "bold" }}>
                      {todoDate}
                    </Text>
                  
                    <Text style={{ fontWeight: "bold" }}>{todoTime}</Text> */}
                  
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
                      ><SimpleLineIcons
                      name="note"
                      type="material"
                    /></View>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        placeholder="Title"
                        onChangeText={(title)=>setTitle(title)}
                   
                        value={title}
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
                        <SimpleLineIcons name="note" type="material" />
                      </View>
                      <TextInput
                        style={{
                          padding: 10,
                          margin: 10,
                          borderColor: "rgba(0,0,0,.2)",
                          
                          flex: 1,
                          
                          textAlign: "auto",
                         
                        }}
                        placeholder="Add description"
                        multiline={true}
                        numberOfLines={5}
                        textAlignVertical={"top"}
                        onChangeText={(desc)=>setDescription(desc)}
                        
                        value={desc}
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
                <Text style={styles.signinButtonText}
                
                >Submit</Text>
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