
import React,{useState} from 'react'
import Visitsupcoming from './Visitsupcoming'
import Visitshistory from './Visitshistory'
import { StyleSheet, Text, View ,StatusBar,SafeAreaView,
    TextInput,TouchableOpacity,Image,Modal,Dimensions} from 'react-native'
import { Display } from '../utils'
const Visits = () => {
    const [page,setPage]=useState(0)
  return (
    <SafeAreaView>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
        width:250,height:60,backgroundColor:'gainsboro',borderRadius:30}}>
              <TouchableOpacity style={{width:130,height:58,backgroundColor:page === 0?'#EC8F05':'gainsboro',justifyContent:'center',
            alignItems:'center',borderRadius:30}} 
            onPress={()=>setPage(0)}>
                  <Text style={{color:page===0?'#fff':'#000',fontWeight:'bold'}}>Upcoming</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:130,height:58,backgroundColor:page === 1?'#EC8F05':'gainsboro',justifyContent:'center',
            alignItems:'center',borderRadius:30}}
            onPress={()=>setPage(1)}>
                  <Text style={{color:page===1?'#fff':'#000',fontWeight:'bold'}}>History</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
        width:'100%',}}>
            {
                page === 0?(<Visitsupcoming/>):(null)
            }
            {
                page === 1?(<Visitshistory/>):(null)
            }
            
            </View>
          
            </View>
    </SafeAreaView>
  )
}

export default Visits

const styles = StyleSheet.create({})