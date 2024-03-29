import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import PoliceSignUp from './PoliceSignUp'
import RegisterPhone from './RegisterPhone'
import SplashScreen from './SplashScreen'
import { auth } from '../../../firebase'
const Location = ({navigation}) => {
    const [page,setPage]=useState(0)
    const onSignout =()=>{
      auth.signOut()
      // navigation.navigate('Welcome')
      
  }
  return (
    <View>
       {/* <View style={styles.headerContainer}>
     <Text style={styles.headerTitle}></Text>
            </View> */} 
         <View style={styles.headerContainer}
        >
          <TouchableOpacity style={{
            backgroundColor: 'white',
            opacity: 0.7, width: '100%',
            height: 30, justifyContent: 'center', alignItems: 'center',
            borderRadius: 10,
          }}>
           <Text style={styles.headerTitle}
          onPress={()=>onSignout()}>Logout</Text>
          </TouchableOpacity>
          
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
    width:250,height:60,}}>
          <TouchableOpacity style={{width:130,height:45,borderColor:page === 0?'#3EA055':'gainsboro',justifyContent:'center',
        alignItems:'center',borderWidth:1}} 
        onPress={()=>setPage(0)}>
              <Text style={{color:page===0?'#3EA055':'gainsboro',fontWeight:'bold'}}>Leave</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:130,height:45,borderColor:page === 1?'#3EA055':'gainsboro',justifyContent:'center',
        alignItems:'center',borderWidth:1}} 
        onPress={()=>setPage(1)}>
              <Text style={{color:page===1?'#3EA055':'gainsboro',fontWeight:'bold'}}>Resignation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:130,height:45,borderColor:page === 2?'#3EA055':'gainsboro',justifyContent:'center',
        alignItems:'center',borderWidth:1}}
        onPress={()=>setPage(2)}>
              <Text style={{color:page===2?'#3EA055':'gainsboro',fontWeight:'bold'}}>Grievance</Text>
          </TouchableOpacity>
      </View>
      <View style={{
    width:'100%',}}>
          {
            page === 0?(<PoliceSignUp navigation={navigation}/>):(null)
        }
      {
            page === 1?(<RegisterPhone/>):(null)
        }
    
         {
            page === 2?(<SplashScreen/>):(null)
        }
        
        </View>
      
        </View>
  
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
    signinButton:{
        backgroundColor:'#000',
        borderWidth:1,
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
 
  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20
},
headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,  
    textAlign: 'center'

},
})