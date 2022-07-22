import { View, Text, SafeAreaView, ImageBackground ,
Dimensions,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { db } from '../../firebase'
import { Card } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
const screenHeight=Dimensions.get('screen').height
const imgContainer = screenHeight *0.3
const container =screenHeight *0.3
const SearchScreen = ({navigation}) => {
  const [searchtext,setSearchtext]=useState('')
  const [Pusers,setPusers]=useState([])
  const [filteredDataSource,setFilteredDataSource]=useState([])
  const [masterDataSource,setMasterDataSource]=useState([])
  useEffect(()=>{
    db.ref('/Puser').on('value',snap=>{
          
      const Pusers=[]
         snap.forEach(action=>{
             const key=action.key
             const data =action.val()
             Pusers.push({
                 key:key,
                surname:data.surname,
                 name:data.name,
                 url:data.url,
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
      // setFilteredDataSource(Pusers);
     setMasterDataSource(Pusers);
     })
  },[])
  const searchFilterFunction=(text)=>{
    if(text){
      const newData = masterDataSource.filter(function(item){
        const itemData = item.name?item.name.toUpperCase():''.toUpperCase()
        const textData=text.toUpperCase()
        return itemData.indexOf(textData)>-1;
      }

      )
      setFilteredDataSource(newData)
      setSearchtext(text)
    }else{
      // setFilteredDataSource(masterDataSource)
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
      <TouchableOpacity onPress={()=>navigation.navigate("PolUserDetails",{data:item})}>
<View style={{flexDirection:'row'}} >
    
      <View style={{padding:10}}>
    <Image source={{uri:item.url}} style={{height:80,width:80,borderRadius:40}}/>
    </View>
    <View style={{marginTop:20,}}>
    <View style={{flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}>
    <Text
      style={{color:'#032B7A',fontWeight:'bold',fontSize:20}}
      onPress={() => getItem(item)}>
        
       Name:  {item.name}

    </Text>
 
    </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        
      <Text> Surname: {item.surname}</Text>
    </View>
 
    </View>
    </View>
    <Card.Divider/>
    </TouchableOpacity>
    </View>
    );
  };
  return (
    <SafeAreaView>
      <ImageBackground source={require('../assets/Images/RectangleP.png')}
      style={{width:'100%',height:imgContainer}}>
        <Text>Prison Management System</Text>
      </ImageBackground>
      <View style={{marginTop:imgContainer-container, backgroundColor:'#fff',padding:20,height:'100%'}}>
      <View> 
      <View style={styles.inputContainer}>
           <View style={styles.inputSubContainer}>
               <FontAwesome name="search" size={15}
 
               style={{marginRight:10}}/>
               
               <TextInput placeholder="Search by Prisoner ID Number"
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
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
const styles =StyleSheet.create({
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