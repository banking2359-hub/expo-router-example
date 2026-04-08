import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import NavBar from '../../Component/topNavbar'

const screenThree = () => {
  return (
    <View>
      <NavBar home={() => router.push('/')} />
      <Text>screenThree</Text>
    </View>
  )
}

export default screenThree

const styles = StyleSheet.create({})