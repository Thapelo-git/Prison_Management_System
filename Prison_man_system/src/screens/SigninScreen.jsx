import React,{useState} from 'react'
import { StyleSheet, Text, View ,StatusBar,
    TextInput,TouchableOpacity,Image,Modal,Dimensions} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"

import Separator from '../components/Separator'
import { Images ,Colors} from '../contants'
import { Display } from '../utils'
import forgetPassword from './forgetPassword'
const deviceHeight=Dimensions.get("window").height
const SigninScreen = ({navigation}) => {
    const [isPasswordShow,setPasswordShow]=useState(false)
    const [modalopen,setModalopen]=useState(true)
    return (
        <View >
             <StatusBar
            barStyle="dark-content"
            style={{backgroundColor:'#EC8F05'}}
           translucent
            />
            <Separator
            height={StatusBar.currentHeight}
            />
            
            <Modal
   animationType='fade'
   transparent={true}
   visible={modalopen}>
       <View style={{flex:1,backgroundColor:'#EC8F05',justifyContent:"flex-end"}}>
       <View style={styles.headerContainer} 
            >
            <Ionicons name="chevron-back-outline" size={30}
            onPress={()=>navigation.goBack()}/>
            <Text style={styles.headerTitle}> </Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',  paddingVertical:30,}}>
            <Image source={require('../assets/Images/logo2.png')}/>
            </View>
        <View style={{backgroundColor:'#fff',width:'100%',borderTopLeftRadius:20,
    borderTopRightRadius:20,paddingHorizontal:10,
    maxHeight:deviceHeight * 0.9}}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.title}>SignIn</Text>
            </View>
            <View>
            <View style={{ paddingHorizontal:15,
        marginHorizontal:15,}}>
               <Text style={{fontWeight:'bold'}}>Email Address</Text>
        </View>
        
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather name="user" size={22}
      
                    style={{marginRight:10}}/>
                    
                    <TextInput placeholder="Email"
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    />
                </View>
            </View>
            <View style={{height:15}}></View>
            <View style={{ paddingHorizontal:15,
        marginHorizontal:15,}}>
            <Text style={{fontWeight:'bold'}}>Password</Text>
        </View>
            
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                <Feather name="lock" size={22} color="#000"
                    style={{marginRight:10}}/>
                 <TextInput
                 secureTextEntry={isPasswordShow? false :true}
                 placeholder="Password"
                 
                 selectionColor='gainsboro'
                 style={styles.inputText}/>
                 <Feather
                 name="eye" size={22}
                 style={{marginRight:10}}
                 onPress={()=>setPasswordShow(!isPasswordShow)}
                 />
                </View>
            </View>
            </View>
            <Text></Text>
            <View style={styles.forgotPasswordContainer}>
                <View>
                    <Text style={styles.rememberMeText}></Text>
                </View>
                <Text style={styles.forgotPasswordText}
                onPress={()=>navigation.navigate('forgetPassword')}
                >Forget Password</Text>
            </View>
    
            <TouchableOpacity style={styles.signinButton}
              onPress={()=>navigation.navigate('homeScreen')}>
                <Text style={styles.signinButtonText}
                
                >Sign in</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={styles.accountText}>
                    Don't have account?
                </Text>
                <Text style={styles.signupText}
                onPress={()=>navigation.navigate('Signup')}
                >Sign Up</Text>
            </View>
    
            </View>
    </View>
   </Modal>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fff'
        
    },
    headerContainer:{
       flexDirection:'row' ,
       alignItems:'center',
       justifyContent:'center',
       paddingVertical:10,
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
marginTop:20,
marginBottom:50,
marginHorizontal:20
    },
    content:{
        fontSize:20,
        marginTop:10,
        marginBottom:20,
        marginHorizontal:20,
    },
    inputContainer:{
        backgroundColor:'#fff',
        paddingHorizontal:20,
        marginHorizontal:20,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:'#000',
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
    forgotPasswordContainer:{
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    rememberMeText:{
        marginLeft:10,
        fontSize:12,
        lineHeight:12 * 1.4,
        color:'grey'
    },
    forgotPasswordText:{
        fontSize:12,
        lineHeight:12 * 1.4,
        color:'#EC8F05',
        fontWeight:'bold'
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
    orText:{
        fontSize:15,
        lineHeight:15 * 1.4,
        color:Colors.DEFAULT_BLACK,
        marginLeft:5,
        alignSelf:'center'
    },
    facebookButton:{
        backgroundColor:'blue',
        paddingVertical:15,
        marginHorizontal:20,
        borderRadius:8,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center'
    },
    googleButton:{
        backgroundColor:'#fff',
        paddingVertical:15,
        marginHorizontal:20,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    }

})
export default SigninScreen


