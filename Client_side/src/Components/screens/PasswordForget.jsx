import React,{useState} from 'react'
import { StyleSheet, Text, View ,StatusBar,TextInput,TouchableOpacity,
Alert} from 'react-native'
import {Separator} from './comp'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { Images ,Colors} from '../contants'
import { Display } from '../utils'
import { db,auth } from '../../../firebase'
const PasswordForget = ({navigation}) => {
    const [email,setEmail]=useState();
    const reset =async()=>{
        try{
            await auth
            .sendPasswordResetEmail(email)
            setEmail('')
        }catch(error){
            Alert.alert(error.message)
        }
    }
    return (
        <View style={styles.container}>
            {/* <StatusBar
            barStyle="dark-content"
            style={{backgroundColor:'#fff'}}
           translucent
            />
            <Separator
            height={StatusBar.currentHeight}
            /> */}
            <View style={styles.headerContainer} 
            >
            <Ionicons name="chevron-back-outline" size={30}
            onPress={()=>navigation.goBack()}/>
            <Text style={styles.headerTitle}>Forget password</Text>
            </View>
            <Text style={styles.title}>Forget Password</Text>
            <Text style={styles.content}>Enter your email, 
            so that we can help you to recover your password</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="mail" size={22}
                    color='gainsboro'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="email"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    value={email}
             onChangeText={(e)=>(setEmail(e))}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.signinButton} 
             onPress={()=>reset()}>
                <Text style={styles.signinButtonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PasswordForget

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
        
    },
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
            inputContainer:{
                backgroundColor:'#F5F5F5',
                paddingHorizontal:20,
                marginHorizontal:20,
                borderRadius:8,
                borderWidth:0.5,
                borderColor:'#F5F5F5',
                justifyContent:'center',
            },
            inputSubContainer:{
                flexDirection:'row',
                alignItems:'center'
            },
            inputText:{
                fontSize:18,
                textAlignVertical:'center',
                padding:0,
                height:Display.setHeight(6),
                color:Colors.DEFAULT_BLACK,
                flex:1
        
            },
            signinButton:{
                backgroundColor:Colors.DEFAULT_GREEN,
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
