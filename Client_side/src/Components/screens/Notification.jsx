import { SafeAreaView, StyleSheet, Text, View,Dimensions } from 'react-native'
import React,{useEffect,useState} from 'react'
import { db } from '../../../firebase';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Notification = () => {
    const [notification,setNotification]=useState([])
    useEffect(()=>{
        
        db.ref('Interview').on('value',snap=>{
          let item = [];
          const a_ =snap.val();
          for (let x in a_){
            item.push({Status:a_[x].Status,key:x,title:a_[x].title,
              desc:a_[x].desc,email:a_[x].email,interviewDate:a_[x].interviewDate,
              interviewTime:a_[x].interviewTime ,phonenumber:a_[x].phonenumber,})
          }
          setNotification(item)
        })
 
},[])
  return (
    <SafeAreaView style={{height:height, width:width}}>
     {
         notification.map(element=>
            <>
             <View style={styles.boxcontainer}>

<View style={styles.inputSubContainer}>

   <View style={{flexDirection:'row', position:'relative', width:'80%'}}>
      <View >
        <Text style={{fontWeight:'bold'}}>{element.Status}</Text>
        <Text >You booked your interview for {element.title} </Text>
        
        <Text> Date: {element.interviewDate} time: {element.interviewTime}</Text>
        
      </View>
     
  </View>
</View>
         </View>   
            </>)
     }
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({
    boxcontainer:{
        backgroundColor:'#DADADA',
       //  width:'100%',
        marginHorizontal:15, 
        marginVertical:10,
        borderRadius:6
    },
    inputContainer:{
     backgroundColor:'#F5F5F5',
     paddingHorizontal:10,
     marginHorizontal:20,
     borderRadius:8,
     borderWidth:0.5,
     borderColor:'black',
     justifyContent:'center',
     borderWidth:1,
     padding:10,
    marginBottom:-10
 },
 inputSubContainer:{
     flexDirection:'row',
     alignItems:'center',
     padding:10,
 },

})