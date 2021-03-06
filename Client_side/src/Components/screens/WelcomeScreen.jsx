import React,{useState,useRef,Component} from 'react'

import { StyleSheet, Text,TextInput,
    StatusBar,Image, View,Button,FlatList,TouchableOpacity} from 'react-native';

    import {Colors,General} from '../contants';
    import { WelcomeCard } from './comp';
    import Separator from './comp/Separator';
    import { Display } from '../utils';

  const pageStyle =isActive =>
    isActive
    ?styles.page 
    :{...styles.page,backgroundColor:Colors.DEFAULT_BLACK}
  

    const Pagination =({index})=>{
      return(<View style={styles.pageContainer}>
        {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_,i)=>i=== index ?(
          <View style={pageStyle(true)} key={i}/>
        ):(
          <View style={pageStyle(false)} key={i}/>
        ))}
        
        
        
      </View>)
    }
const WelcomeScreen = ({navigation}) => {
  const [welcomeListIndex,setwelcomeListIndex]=useState(0)
  const welcomeList = useRef()
  const onViewRef = useRef(({changed})=>{
    setwelcomeListIndex(changed[0].index);
  })
  const viewConfigRef =useRef({viewAreaCoveragePercentThreshold:50})
  const pageScoll =()=>{
    welcomeList.current.scrollToIndex({
      index:welcomeListIndex < 2 ? welcomeListIndex < 1:welcomeListIndex,
    })
  }

    return (
        <View style={styles.container}>
            <StatusBar
            barStyle="dark-content"
            //   backgroundColor: Colors.DEFAULT_GREEN,
            translucent
            />
            <Separator height={StatusBar.currentHeight}/>
            <Separator height={Display.setHeight(8)}/>
            <View style={styles.WelcomeListContainer}>
            <FlatList 
            ref={welcomeList}
            data={General.WELCOME_CONTENTS}
            keyExtractor={item => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            overScrollMode="never"
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}

            renderItem={({item})=> <WelcomeCard{...item}/>}
            />
            </View> 
            <Separator height={Display.setHeight(8)}/>
            <Pagination index={welcomeListIndex}/> 
            <Separator height={Display.setHeight(8)}/>
            {welcomeListIndex ===2?(
              <TouchableOpacity activeOpacity={8.0}
              style={styles.gettingsStartedButton}
              onPress={()=>navigation.navigate('Signin')}
              >
                <Text style={styles.gettingsStartedButtonText}>Get Started</Text>
              </TouchableOpacity>
            ):(
              <View style={styles.buttonContainer}>
              <TouchableOpacity activeOpacity={0.8}
              style={{marginLeft:10}}
              onPress={()=>welcomeList.current.scrollToEnd()}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}
              onPress={()=>pageScoll()}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
              </View> 
            )}  
                  
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: Colors.DEFAULT_GREEN,
      alignItems: 'center',
      justifyContent: 'center',
      padding:30,
    },
    WelcomeListContainer:{
      height:Display.setHeight(60)
    },
   pageContainer:{
    flexDirection:'row',

   },
   page:{
    height:8,
    width:15,
    backgroundColor:Colors.DEFAULT_GREEN,
    borderRadius:32,
    marginHorizontal:5
   },
   buttonContainer:{
     flexDirection:'row',
     justifyContent:'space-between',
     width:Display.setWidth(90),
     alignItems:'center'
   },
   buttonText:{
     fontSize:16,
     fontWeight:'bold',
     lineHeight:16 * 1.4
   },
   button:{
     backgroundColor:Colors.DEFAULT_GREEN,
     paddingVertical:20,
     paddingHorizontal:11,
     borderRadius:32,
   },
   gettingsStartedButton:{
    backgroundColor:Colors.DEFAULT_GREEN,
    paddingVertical:5,
    paddingHorizontal:40,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    elevation:2,
   },
   gettingsStartedButtonText:{
    fontSize:20,
    color:'#fff',
    lineHeight:20 *1.4,
   }
  });

export default WelcomeScreen
