import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
const CustomDrrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrrawer

const styles = StyleSheet.create({})