import React,{useState} from 'react'
import { TouchableOpacity,StyleSheet, Animated, View ,Easing} from 'react-native'


const containerStyle =(size)=>({
    backgroundColor:'#0225A1',
        height:32 * size,
        width:64 * size,
        borderRadius:32,
        padding:4 * size,
})
const toggleStyle =(size,animatedValue)=>({
    height:24 * size,
    width:24 * size,
    backgroundColor:'#fff',
    borderRadius:32,
    transform:[{
        translatex:animatedValue 
    }]
})
const ToggleButton = ({size}) => {
    const [isActive, setIsActive]=useState(false)
    const [animatedValue,setAnimatedValue]=useState(new Animated.Value(0))
    const toggleHandle=()=>{
        Animated.timing(animatedValue,{
            toValue:isActive?0:32 * size,
            duration:250,
            easing:Easing.bounce,
            delay:0,
            useNativeDriver:true
        }).start()
        setIsActive(!isActive)
    }
    return (
        <TouchableOpacity style={containerStyle(size)}
        onPress={()=>toggleHandle()}>
          <Animated.View style={toggleStyle(size,animatedValue)}/>
        </TouchableOpacity>
    )
}

export default ToggleButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0225A1',
        height:32,
        width:64,
        borderRadius:32,
        padding:4,
    },
    toggle:{
        height:24,
        width:24,
        backgroundColor:'#fff',
        borderRadius:32
    }
})
