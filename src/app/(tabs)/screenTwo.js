import { StyleSheet, Text, View } from 'react-native'
import NavBar from '../../component/topNavbar'
import { router } from 'expo-router'
const screenTwo = () => {
  return (
    <View>
      <NavBar home={() => router.push('/')} />
      <Text>screenTwo</Text>
    </View>
  )
}

export default screenTwo

const styles = StyleSheet.create({})