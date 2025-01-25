import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DynamicText from '../../components/CustomText/DynamicText'
import { COLORS } from '../../themes/theme'

const Payment = () => {
  return (
    <View style={styles.container}>
      <DynamicText content='Credit & Debit Card'/>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    }
})