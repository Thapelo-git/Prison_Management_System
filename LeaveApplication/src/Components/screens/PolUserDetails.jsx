
import React,{useEffect,useState,Component} from 'react'
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

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const { height } = Dimensions.get('window')
const imgContainerHeight = screenHeight * 0.4;
const sub = screenHeight * 0.3; 
const PolUserDetails = ({ navigation, route }) => {
  const [searchtext,setSearchtext]=useState('')
  const [Pusers,setPusers]=useState([])
  const [filteredDataSource,setFilteredDataSource]=useState([])
  const [masterDataSource,setMasterDataSource]=useState([])
  useEffect(()=>{
    db.ref('/EmployeeList').on('value',snap=>{
          
      const Pusers=[]
         snap.forEach(action=>{
             const key=action.key
             const data =action.val()
             Pusers.push({
                 key:key,
                 EmployeeNumber:data.EmployeeNumber,
                 
                 Name:data.Name,
                 IDnumber:data.IDnumber,
                 Arrestdesc:data.Arrestdesc,
                 age:data.age,
                 caseDesc:data.caseDesc,
                 mentality:data.mentality,
                 sentence:data.sentence,
                 Transfed:data.Transfed,
                 illness:data.illness,
                 PrisonerDeath:data.PrisonerDeath,
             })
  
         })
         setPusers(Pusers)
      setFilteredDataSource(Pusers);
     setMasterDataSource(Pusers);
     })
  },[])
  const searchFilterFunction=(text)=>{
    if(text){
      const newData = masterDataSource.filter(function(item){
        const itemData = item.EmployeeNumber?item.EmployeeNumber.toUpperCase():''.toUpperCase()
        const textData=text.toUpperCase()
        return itemData.indexOf(textData)>-1;
      }

      )
      setFilteredDataSource(newData)
      setSearchtext(text)
    }else {
      setFilteredDataSource(masterDataSource);
      setSearchtext(text)
  }
  }
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  const ItemView = ({item}) => {
      
    return (
      
      <View style={{padding:5}}>
      <TouchableOpacity >
<View style={{flexDirection:'row'}} >
    
      <View style={{padding:10}}>
    <Image source={{uri:item.url}} style={{height:80,width:80,borderRadius:40}}/>
    </View>
    <View style={{marginTop:20,}}>
    <View style={{flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}>
    <Text
      style={{color:'#032B7A',fontWeight:'bold',fontSize:20}}
      >
        
       Number:  {item.EmployeeNumber}

    </Text>
 
    </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        
      <Text> Surname: {item.Name}</Text>
    </View>
 
    </View>
    </View>
    <Card.Divider/>
    </TouchableOpacity>
    </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{height:50}}></View>
         <View> 
      <View style={styles.inputContainer}>
           <View style={styles.inputSubContainer}>
              
               
               <TextInput placeholder="Search by  Employee Number"
               selectionColor='gainsboro'
               onChangeText={(text) => searchFilterFunction(text)}
               style={styles.inputText}
               />
           </View>
       </View>
      </View>
      <FlatList
      data={filteredDataSource}
      keyExtractor={(index)=>index.toString()}
      ItemSeparatorComponent={ItemSeparatorView}
      renderItem={ItemView}
      />
  
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
  inputContainer:{
    backgroundColor:'#fff',
    
    borderRadius:8,
    borderWidth:0.5,
    borderColor:'#000',
    justifyContent:'center',
   
},
inputSubContainer:{
    flexDirection:'row',
    alignItems:'center'
},
})