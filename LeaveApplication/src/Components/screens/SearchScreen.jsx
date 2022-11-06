import { View, Text, SafeAreaView, ImageBackground ,
Dimensions,StyleSheet,TextInput,Image,TouchableOpacity,FlatList, ScrollView } from 'react-native'
import React,{useEffect,useState,Component} from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { db } from '../../../firebase'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Card } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
const screenHeight=Dimensions.get('screen').height
const imgContainer = screenHeight *0.5
const container =screenHeight *0.4
const SearchScreen = ({navigation}) => {
  const ReviewSchem=yup.object({
    IDnumber:yup.string().required().min(13).max(13),
    Name:yup.string().required().min(3),
    Initials:yup.string().required().min(1),
    EmployeeNumber:yup.string().required().min(2),

})
const addVehicle = (data) => {
  const {IDnumber,EmployeeNumber,Name,Initials} =data
    db.ref('EmployeeList').push({
    
      IDnumber,
      EmployeeNumber,
      Name,
      Initials,
    })
  //   navigation.goBack()

};
  

  return (
    <SafeAreaView>
      <View style={{height:80}}>
      <View style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
        <Text>Enter  Initials </Text>
    <View style={styles.inputInitials}>
      <TouchableOpacity onPress={()=>navigation.navigate("PolUserDetails")}>
        <Text>Employees</Text>
      </TouchableOpacity>
                    </View>
              
                    </View>
      </View>
      <View style={{width:'100%',height:imgContainer,}}>
      <Formik
        initialValues={{IDnumber:'',Name:'',EmployeeNumber:'',Initials:''}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
            addVehicle(values)
        }}
        >
            {(props)=>(<ScrollView>
                <View style={{display:'flex',}}>
                    <View>
        <Text>Enter   Surname </Text>
    <View style={styles.inputContainer}>
      {/* <View style={styles.iconContainer} >
                        <Feather name="user" size={22} style={{marginRight:10}}/></View> */}
                       <TextInput
                        style={styles.input}
                      
                        placeholder="Enter Surname"
                        onChangeText={props.handleChange('Name')}
             value={props.values.Name}
             onBlur={props.handleBlur('Name')}
                         />
                    </View>
                    <Text style={{color:'red',margin:10}}>{props.touched.Name && props.errors.Name}</Text>
                    </View>
                    <View style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
        <Text>Enter  Initials </Text>
    <View style={styles.inputInitials}>
      {/* <View style={styles.iconContainer} >
                        <Feather name="user" size={22} style={{marginRight:10}}/></View> */}
                       <TextInput
                        style={styles.input}
                      
                        placeholder="Initials"
                        onChangeText={props.handleChange('Initials')}
             value={props.values.Initials}
             onBlur={props.handleBlur('Initials')}
                         />
                    </View>
                    <Text style={{color:'red',marginTop:-10}}>{props.touched.Initials && props.errors.Initials}</Text>
                    </View>
                    </View>
    <Text>Enter  ID Number </Text>
    <View style={styles.inputContainer}>
      {/* <View style={styles.iconContainer} >
                        <Feather name="user" size={22} style={{marginRight:10}}/></View> */}
                       <TextInput
                        style={styles.input}
                    
                        placeholder="Enter ID Number"
                        onChangeText={props.handleChange('IDnumber')}
                        value={props.values.IDnumber}
                        onBlur={props.handleBlur('IDnumber')}/>
                    </View>
                    <Text style={{color:'red',margin:1}}>{props.touched.IDnumber && props.errors.IDnumber}</Text>
                    <Text>Enter  Employee Number</Text>
    <View style={styles.inputContainer}>
      {/* <View style={styles.iconContainer} >
                        <Feather name="user" size={22} style={{marginRight:10}}/></View> */}
                       <TextInput
                        style={styles.input}
                     
                        placeholder="Enter Employee Number"
                        onChangeText={props.handleChange('EmployeeNumber')}
                        value={props.values.EmployeeNumber}
                        onBlur={props.handleBlur('EmployeeNumber')} />
                    </View>
                    <Text style={{color:'red',margin:1}}>{props.touched.EmployeeNumber && props.errors.EmployeeNumber}</Text>
                                    <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                                    <TouchableOpacity style={styles.signinButton}
                                 onPress={props.handleSubmit}>
                              <Text style={styles.signinButtonText}>Submit</Text>
                          </TouchableOpacity>
                                   
                            </View></ScrollView>)}
                    </Formik>
                    </View>
      {/* <View style={{marginTop:imgContainer-container, backgroundColor:'#fff',padding:20,height:'100%'}}>
   
      </View> */}
    </SafeAreaView>
  )
}

export default SearchScreen
const styles =StyleSheet.create({
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
inputInitials:{
  flexDirection: "row",
  alignItems: "center",
  borderColor: "rgba(0,0,0,.2)",
  borderWidth: 1,
  height: 30,
  width:110,
  borderRadius: 15,
  paddingHorizontal: 15,
  marginVertical: 10 
},
signinButton:{
  backgroundColor:'#3EA055',
  
  marginHorizontal:20,
  height:40,
  justifyContent:'center',
  alignItems:'center',
  marginTop:20,
  width:'100%'
},
signinButtonText:{
  fontSize:18,
  lineHeight:18 * 1.4,
  color:'#fff',
  
},
})