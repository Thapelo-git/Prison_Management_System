import { SafeAreaView, StyleSheet, Text, View,Dimensions ,Alert,TouchableOpacity} from 'react-native'
import React,{useEffect,useState,Component} from 'react'
import { db,auth } from '../../../firebase';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Notification = () => {
  const user = auth.currentUser.uid;
    const [notification,setNotification]=useState([])
    useEffect(()=>{
        
        db.ref('Interview').on('value',snap=>{
          let item = [];
          const a_ =snap.val();
          for (let x in a_){
            item.push({Status:a_[x].Status,key:x,title:a_[x].title,userId:a_[x].userId,
              desc:a_[x].desc,email:a_[x].email,interviewDate:a_[x].interviewDate,
              interviewTime:a_[x].interviewTime ,phonenumber:a_[x].phonenumber,})
          }
          if(user){
            const userinfor = item.filter(function(item){
             const itemData = item.userId?
    
(  item.userId)
             :   ( '') 
             const textData = user;
             return itemData.indexOf( textData)>-1;

         })
         setNotification(userinfor)
        }
         
        })
 
},[])
const updateBooking = (key, status) => {
  Alert.alert('Confirm','Your Interview will be cancelled?',[
    {text:'Yes',
   onPress:()=>db.ref('Interview').child(key).update({Status:status})
   .then(()=>db.ref('Interview').once('value'))
   .then(snapshot=>snapshot.val())
   .catch(error => ({
     errorCode: error.code,
     errorMessage: error.message
   })),
  },
  {text:'No'},
  ]);
  

  
};
const handleDelete=(key)=>{
  Alert.alert('Confirm','Are you sure you want to delete?',[
    {text:'Yes',
   onPress:()=>db.ref('Interview').child(key).remove(),
  },
  {text:'No'},
  ]);
  

  }
  return (
    <SafeAreaView style={{height:height, width:width}}>
     {
         notification.map(element=>
            <>
             <View style={styles.boxcontainer}>

<View style={styles.inputSubContainer}>

   <View style={{flexDirection:'row', position:'relative', width:'80%'}}>
      <View >
        {
          element.Status == "Cancelled" || element.Status == "Rejected"?(
            <Text style={{fontWeight:'bold',color:'red'}}>{element.Status}</Text>
          ):(
            <Text style={{fontWeight:'bold',color:'blue'}}>{element.Status}</Text>
          )
        }
   
        <Text >You booked your interview for {element.title} </Text>
        
        <Text> Date: {element.interviewDate} time: {element.interviewTime}</Text>
        {
          element.Status === "Pending"?(
            <TouchableOpacity style={{height:30,width:70,justifyContent:'center',borderColor:'red',
            alignItems:'center',borderWidth:0.5}}  onPress={()=>updateBooking(element.key,'Cancelled')}>
            <Text style={{color:'red'}}>Cancel</Text>
            </TouchableOpacity>
          ):(
            <TouchableOpacity style={{height:30,width:70,justifyContent:'center',borderColor:'red',
            alignItems:'center',borderWidth:0.5}}  onPress={()=>handleDelete(element.key)}>
            <Text style={{color:'red'}}>Delete</Text>
            </TouchableOpacity>
          )
        }
    
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