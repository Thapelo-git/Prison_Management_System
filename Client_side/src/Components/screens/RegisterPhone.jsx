
import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Separator} from './comp/Separator'
import { Images,Colors } from '../contants'
import { Display } from '../utils'
const RegisterPhone = () => {
   
    return (
        <View style={styles.container}>
            
            
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.content}>Enter your Registered Phone
            number to login</Text>
            
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
})
