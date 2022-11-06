
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground, ToastAndroid,
  Dimensions, ImageBackgroud, Animated, Pressable, TextInput
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { db } from '../../../firebase';
import { Card } from 'react-native-elements'
import { useState } from 'react';
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const { height } = Dimensions.get('window')
const imgContainerHeight = screenHeight * 0.4;
const sub = screenHeight * 0.3;
//UserDetails
const PolUserDetails = ({ navigation, route }) => {
  const details = route.params.data;

  const [illness,setIllness]=useState('')
  const [Transfed,setTransfed]=useState('')
  const updateAccept = () => {
    db.ref('Puser').child(details.key).update({Transfed:Transfed,illness:illness})
      .then(()=>db.ref('Puser').once('value'))
      .then(snapshot=>snapshot.val())
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
 

}
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.imgContaner}>

        {/* <ImageBackground source={{ uri: details.url }} style={{ width: "100%", height: "100%" }} >
          <View style={styles.headerContainer}
          >
            <View style={{
              backgroundColor: 'white',
              opacity: 0.7, width: 30,
              height: 30, justifyContent: 'center', alignItems: 'center',
              borderRadius: 10,
            }}>
              <Feather name="arrow-left" size={30} color='black'
                onPress={() => navigation.goBack()} />
            </View>
            <Text style={styles.headerTitle}></Text>
          </View>
        </ImageBackground> */}
      </View>
      <View style={styles.cardBox}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Text style={{ color: '#032B7A', fontWeight: 'bold', fontSize: 20 }} >

            Name:  {details.name}

          </Text>
          <Text style={{ color: '#032B7A', fontWeight: 'bold', fontSize: 20 }} >

Surname:  {details.surname}

</Text>
        </View>

        <Card.Divider />
        <Text>ID Number: {details.IDnumber} </Text>
        <Card.Divider style={{width:0}}/>
        <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
        <Text>Age: {details.age}</Text>
        <Card.Divider style={{width:10}}/>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <View>
        <Text style={{ color: '#032B7A', fontWeight: 'bold', fontSize: 20 }} >
Case Details
</Text>

<Text>Case Description: {details.caseDesc}</Text>
<Text>Life Sentence: {details.sentence}</Text>
<Text>Mental Health: {details.mentality}</Text>
<Text>Arrest Description: </Text>
<Text>{details.Arrestdesc}</Text>
</View>
<View>
{/* <Text style={{ color: '#032B7A', fontWeight: 'bold', fontSize: 20 }} >
Health Details
</Text>
<Text>Illness: {details.illness}</Text>
<Text>Death: {details.PrisonerDeath}</Text>
<Text>Transfed: {details.Transfed}</Text> */}
</View>
        </View>
        <View style={{ backgroundColor: '#fff', justifyContent:'flex-start', flexDirection: 'row', padding: 8, alignItems:'center'}}>
      <View>
<Text style={styles.titles}>Any Illness ?</Text>

<Picker
     selectedValue={illness}
     style={{ width: 160, height: 50, backgroundColor: '#eee' }}
     onValueChange={(text)=>setIllness(text)}   >
    <Picker.Item label="select" value="" />
    <Picker.Item label="No" value="No" />
    <Picker.Item label="Yes" value="Yes" />
    
</Picker>
</View>
<View>
<Text style={styles.titles}>Transfed</Text>

<Picker
     selectedValue={Transfed}
     style={{ width: 160, height: 50, backgroundColor: '#eee' }}
     onValueChange={(text)=>setTransfed(text)}   >
    <Picker.Item label="select" value="" />
    <Picker.Item label="No" value="No" />
    <Picker.Item label="Yes" value="Yes" />
   
</Picker>
</View>
      </View>
      <TouchableOpacity style={ { borderWidth:2,
                            backgroundColor:'#fff',marginHorizontal:10,
                            borderColor:'red',width:70,height:40,
                            justifyContent:'center',alignItems:'center'
                          }}  
                          onPress={()=>updateAccept()}
                        >
                        <Text style={{color:'red'}}>Submit</Text>   
                        </TouchableOpacity>
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
    flex: 1,

  },
  imgContaner: {
    width: screenWidth,
    height: imgContainerHeight,
    position: "absolute",
    top: 0,
  },
  headerContainer: {
    top: 10,
    flexDirection: 'row', justifyContent: 'space-between',
    alignContent: 'center'


  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -2 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20

  },
})