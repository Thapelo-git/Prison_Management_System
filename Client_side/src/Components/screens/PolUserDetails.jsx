
import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    ImageBackground,ToastAndroid,
    Dimensions,ImageBackgroud,Animated,Pressable,TextInput
  } from "react-native";
  import Feather from 'react-native-vector-icons/Feather'
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign"
import { Card } from 'react-native-elements'
  const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const {height} = Dimensions.get('window')
const imgContainerHeight = screenHeight * 0.4;
const sub = imgContainerHeight * 0.2;
const PolUserDetails = ({navigation,route}) => {
const details=route.params.data;
  return (
    <SafeAreaView style={{flex:1}}>
       <View style={styles.imgContaner}>
      
      <ImageBackground  source={{uri:details.url}}style={{ width: "100%", height: "100%" }} >
      <View style={styles.headerContainer} 
          >
             <View style={{backgroundColor: 'white',
opacity: 0.7,width:30,
    height:30,justifyContent:'center',alignItems:'center',
    borderRadius:10,}}>
             <Feather name="arrow-left" size={30} color='black'
           onPress={()=>navigation.goBack()} /> 
           </View>
          <Text style={styles.headerTitle}></Text>
          </View>
      </ImageBackground>
    </View>
    <View style={styles.cardBox}>
        <Text>{details.name} {details.surname}</Text>
        <Text>{details.IDnumber} {details.age}</Text>
    <Card.Divider/>
    </View>
    </SafeAreaView>
  )
}

export default PolUserDetails

const styles = StyleSheet.create({
    cardBox: {
        paddingTop: 30,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        marginTop: imgContainerHeight - sub,
        backgroundColor: "white",
        flex:1,
    
      },
      imgContaner: {
        width: screenWidth,
        height: imgContainerHeight,
        position: "absolute",
        top: 0,
      },
      headerContainer:{
        top:10,
        flexDirection:'row',justifyContent:'space-between',
        alignContent:'center'
        
    
      },
      header:{
        backgroundColor:'#fff',
        shadowColor:'#333333',
        shadowOffset:{width:-1,height:-2},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    
      },
})