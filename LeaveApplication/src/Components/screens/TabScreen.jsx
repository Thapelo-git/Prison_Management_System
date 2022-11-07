import { View, Text } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import SearchScreen from './SearchScreen'
import PolProfile from './PolProfile'
import PolLocation from './PolLocation'
import PoliceSignUp from './PoliceSignUp';
import RegisterPhone from './RegisterPhone';
import Location from './Location';
const Tab = createMaterialBottomTabNavigator()
const TabScreen = () => {
  return (
    <Tab.Navigator
    initialRouteName="Search"
    activeColor="#EC8F05"
    barStyle={{
      backgroundColor:'#fff',
        borderRadius: 15, elevation: 6, alignItems:'center', justifyContent: 'center', position:'absolute', marginVertical:20,marginHorizontal:25, height:65,paddingBottom:10, paddingLeft:10, paddingRight:10,bottom:20, paddingTop:10
    }}
    
  >
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Home',
        // tabBarIcon: ({ color }) => (
        // <FontAwesome name="search" color={color} size={24} />
        // ),
      }}
    />
   
    <Tab.Screen
      name="PolLocation"
      component={Location}
      options={{
        tabBarLabel: 'Notifications',
        // tabBarIcon: ({ color }) => (
        // <Icon name="location-sharp" color={color} size={24} />
        // ),
      }}
    />
    <Tab.Screen
      name="Visits"
      component={RegisterPhone}
      options={{
        tabBarLabel: 'Visits',
        // tabBarIcon: ({ color }) => (
        // <FontAwesome name="user" color={color} size={24} />
        // ),
      }}
    />
     {/* <Tab.Screen
      name="PolProfile"
      component={PolProfile}
      options={{
        tabBarLabel: 'Profile',
        // tabBarIcon: ({ color }) => (
        // <FontAwesome name="user" color={color} size={24} />
        // ),
      }}
    /> */}
    </Tab.Navigator>
  )
}

export default TabScreen