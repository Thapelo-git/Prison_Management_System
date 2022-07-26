import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import { Display } from '../../utils'
import {Images} from '../../contants'
const WelcomeCard = ({title,content,image}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images[image]} 
            resizeMode="contain"/>
           <Text style={styles.titleText}>{title}</Text> 
           <Text style={styles.contentText}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:Display.setWidth(100),
    },
    image:{
        height:80,
        width:100,
        
    },
    titleText:{
        fontSize:22,
        fontWeight:'bold'
    },
    contentText:{
        fontSize:18,
        
        textAlign:'center',
        marginHorizontal:20,
    }
})

export default WelcomeCard
