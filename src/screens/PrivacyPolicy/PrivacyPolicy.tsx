import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../themes/theme'

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.lastUpdate}>Last update: 14/08/2024</Text>
        
        {/* Paragraphs */}
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a scelerisque neque, sed accumsan metus.
          </Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>
            Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim vel neque auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas nulla posuere neque tincidunt porta.
          </Text>
        </View>

        {/* Terms & Conditions Section */}
          <Text style={styles.heading}>Terms & Conditions</Text>
        <View style={styles.termsContainer}>

          <View style={styles.listItem}>
            <Text style={styles.number}>1.</Text>
            <Text style={styles.listText}>
              Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus ac turpis.
            </Text>
          </View>

          <View style={styles.listItem}>
            <Text style={styles.number}>2.</Text>
            <Text style={styles.listText}>
              Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus.
            </Text>
          </View>

          <View style={styles.listItem}>
            <Text style={styles.number}>3.</Text>
            <Text style={styles.listText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  lastUpdate: {
    fontSize: SIZES.h3,
    fontFamily: FONTS.AvenirRegular,
    color: COLORS.HeadingColor,
    marginBottom: 10
  },
  paragraphContainer: {
    marginVertical: 10
  },
  paragraph: {
    fontSize: SIZES.body4,
    fontFamily: FONTS.AvenirThin,
    color: COLORS.HeadingColor,
    textAlign: 'justify',
  },
  heading: {
    fontSize: SIZES.h2,
    fontFamily: FONTS.AvenirDemi,
    color: COLORS.HeadingColor,
    marginVertical: 10
  },
  termsContainer: {
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10
  },
  number: {
    fontSize: SIZES.body5,
    fontFamily: FONTS.AvenirDemi,
    color: COLORS.HeadingColor,
    marginRight: 5
  },
  listText: {
    fontSize: SIZES.body5,
    fontFamily: FONTS.AvenirThin,
    color: COLORS.HeadingColor,
    textAlign: 'justify',
    flex: 1
  }
})
