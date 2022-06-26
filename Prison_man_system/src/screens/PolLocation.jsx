import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE ,Marker} from "react-native-maps";
import Feather from 'react-native-vector-icons/Feather'
const PolLocation = () => {
  const coordinates = {  latitude:-23.896172,
    longitude:29.448626,
    // latitudeDelta:0.015,
    // longitudeDelta:0.0121,
  }
  return (
    <View>
 
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
                  <Marker coordinate={coordinates}
                  />
               
                </MapView>
            </View>
    </View>
  )
}

export default PolLocation

const styles = StyleSheet.create({
  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
//   map:{...StyleSheet.absoluteFillObject},
//  buttonstyle:{
// borderRadius:10,
// paddingVertical:10,
// width:200,
// backgroundColor:'#4A1DD6',


// },
})