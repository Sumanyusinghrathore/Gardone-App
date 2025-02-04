import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/theme'

const Updateprofile = () => {
  return (
    <View style={styles.container}>
      <Text>Update_profile</Text>
    </View>
  )
}

export default Updateprofile  

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
})