import React,{useState} from 'react'
import { StyleSheet, Text, View ,StatusBar,TextInput,
TouchableOpacity,Image,Dimensions} from 'react-native'

import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import {Separator} from '../components/Separator'
import { Images,Colors } from '../contants'
import { Display } from '../utils'
const deviceHeight=Dimensions.get("window").height
const SignupScreen = ({navigation}) => {
    const [isPasswordShow,setPasswordShow]=useState(false)
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
            {/* <View style={styles.headerContainer} 
            >
            <Ionicons name="chevron-back-outline" size={30}
            onPress={()=>navigation.goBack()}/>
            <Text style={styles.headerTitle}></Text>
            </View> */}
            <View style={{flex:1,justifyContent:'center',alignItems:'center', }}>
            <Image style={{height:100,width:100}} source={require('../assets/Images/logo2.png')}/>
            </View>
            {/* <Text style={styles.title}>Create Account</Text>
            <Text style={styles.content}>Enter your Username and password</Text>
            <View style={{height:15}}></View> */}
            <View style={{backgroundColor:'#fff',width:'100%',borderTopLeftRadius:20,
    borderTopRightRadius:20,paddingHorizontal:10,
    maxHeight:deviceHeight * 0.9}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.title}>SignUp</Text>
            </View>
            <View style={{ paddingHorizontal:15,
        marginHorizontal:15,}}>
            <Text style={{fontWeight:'bold'}}>FirstName</Text>
        </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="user" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="FirstName"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    />
                </View>
            </View>
           
            <View style={{height:7}}></View>
            <View style={{ paddingHorizontal:15,
        marginHorizontal:15,}}>
            <Text style={{fontWeight:'bold'}}>Email Address</Text>
        </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="mail" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="email@gmail.com"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    />
                </View>
            </View>
            <View style={{height:7}}></View>
            <View style={{ paddingHorizontal:15,
        marginHorizontal:15,}}>
            <Text style={{fontWeight:'bold'}}>Phone Number</Text>
        </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="phone" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="Phone number"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    />
                </View>
            </View>
            <View style={{height:7}}></View>
            <View style={{ paddingHorizontal:15,
        marginHorizontal:15,}}>
            <Text style={{fontWeight:'bold'}}>Password</Text>
        </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                <Feather name="lock" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                 <TextInput
                 secureTextEntry={isPasswordShow? false :true}
                 placeholder="Password"
                 selectionColor='gainsboro'
                 style={styles.inputText}/>
                 <Feather
                 name="eye" size={22}
                 color='#000'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />
                </View>
            </View>
            <View style={{height:7}}></View>
            <View style={{ paddingHorizontal:15,
        marginHorizontal:15,}}>
            <Text style={{fontWeight:'bold'}}>Confirm Password</Text>
        </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                <Feather name="lock" size={22}
                    color='#000'
                    style={{marginRight:10}}/>
                 <TextInput
                 secureTextEntry={isPasswordShow? false :true}
                 placeholder=" confirm Password"
                 selectionColor='gainsboro'
                 style={styles.inputText}/>
                 <Feather
                 name="eye" size={22}
                 color='#000'
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />
                </View>
            </View>
            <TouchableOpacity style={styles.signinButton}
            onPress={()=>navigation.navigate('RegisterPhone')}
            >
                <Text style={styles.signinButtonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={styles.accountText}>
                    Already have account?
                </Text>
                <Text style={styles.signupText}
                onPress={()=>navigation.navigate('Signin')}
                >Sign In</Text>
            </View>
            </View>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EC8F05'
    } ,
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
            title:{
                fontSize:20,
                lineHeight:20 * 1.4,
                marginTop:20,
                marginBottom:30,
                marginHorizontal:20
                    },
                    signupContainer:{
                        marginHorizontal:20,
                        justifyContent:'center',
                        paddingVertical:20,
                        flexDirection:'row',
                        alignItems:'center'
                    },
                    accountText:{
                        fontSize:13,
                        lineHeight:13 * 1.4,
                        color:Colors.DEFAULT_BLACK
                    },
                    signupText:{
                        fontSize:13,
                        lineHeight:13 * 1.4,
                        color:'#EC8F05',
                        marginLeft:5,
                
                    },
})
