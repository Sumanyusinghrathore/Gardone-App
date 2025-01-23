import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/theme'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',
    alignItems: 'center',
    padding: 10,}}>
      <Image source={require('../../assets/Images/Profile.png')} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>Sumanyu Singh Rathore</Text>
        <Text style={styles.email}>sumanyu@example.com</Text>
      </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.white,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Makes the image circular
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
})
