import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE ,Marker} from "react-native-maps";
import Feather from 'react-native-vector-icons/Feather'
const Location = () => {
  const coordinates = {  latitude:-23.896172,
    longitude:29.448626,
    // latitudeDelta:0.015,
    // longitudeDelta:0.0121,
  }
  return (
    
     
            <View style={{flex:1,
            backgroundColor:"#fff",alignItems:'center',justifyContent:'center'}}>
                <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
              
              // region={coordinates}
              initialRegion={{
                latitude: -23.896172,
                longitude: 29.448626,
                latitudeDelta:0.015,
                longitudeDelta:0.0121,
              }}
              >
                  <Marker coordinate={{ latitude: -23.896172,
                longitude: 29.448626,}} title='Prison'
                image={{uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.favpng.com%2F20%2F24%2F7%2Fmap-drawing-pin-clip-art-png-favpng-Kun5RxqQpnjJhamZ9aztsSGh2.jpg&imgrefurl=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fmap-marker-map-drawing-pin-clip-art-png%2FcZ9kWjCd&tbnid=5Mqy4OOJeX3N3M&vet=12ahUKEwi26cDFwsv4AhUSTRoKHVgYC1IQMygFegUIARDwAQ..i&docid=Ywp1K0sKfRshMM&w=820&h=720&q=marker%20pin&ved=2ahUKEwi26cDFwsv4AhUSTRoKHVgYC1IQMygFegUIARDwAQ'}}
                  />
               
                </MapView>
            </View>
   
  )
}

export default Location

const styles = StyleSheet.create({
  headerContainer:{
    top:10,
    flexDirection:'row',justifyContent:'space-between',
    alignContent:'center',
    height:60,
    

  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height,
  },
//   map:{...StyleSheet.absoluteFillObject},
//  buttonstyle:{
// borderRadius:10,
// paddingVertical:10,
// width:200,
// backgroundColor:'#4A1DD6',


// },
})