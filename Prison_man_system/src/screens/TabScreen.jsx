import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import SearchScreen from './SearchScreen'
import PolProfile from './PolProfile'
import PolLocation from './PolLocation'
const Tab = createMaterialBottomTabNavigator()
const TabScreen = () => {
  return (
    <Tab.Navigator
    initialRouteName="Search"
    activeColor="#fff"
    barStyle={{
      backgroundColor:'#0225A2',
        borderRadius: 15, elevation: 6, alignItems:'center', justifyContent: 'center', position:'absolute', marginVertical:20,marginHorizontal:25, height:65,paddingBottom:10, paddingLeft:10, paddingRight:10,bottom:20, paddingTop:10
    }}
    
  >
    <Tab.Screen
      name="Home"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
        <Icon name="ios-home" color={color} size={24} />
        ),
      }}
    />
   
    <Tab.Screen
      name="PolLocation"
      component={PolLocation}
      options={{
        tabBarLabel: 'Location',
        tabBarIcon: ({ color }) => (
        <Icon name="ios-chatbox" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="PolProfile"
      component={PolProfile}
      options={{
        tabBarLabel: 'profile',
        tabBarIcon: ({ color }) => (
        <Icon name="ios-settings" color={color} size={24} />
        ),
      }}
    />
    </Tab.Navigator>
  )
}

export default TabScreen