import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox' // Import CheckBox from the community package
import { COLORS, FONTS } from '../../themes/theme'
import DynamicText from '../../components/CustomText/DynamicText'
import Slider from '@react-native-community/slider'
import { Divider } from '@rneui/themed'
import { ACTIVE_OPACITY } from '../../themes/genericStyles'
import { ScrollView } from 'react-native-gesture-handler'

type CheckboxKey = 'airPlant' | 'floweringPlant' | 'focalPlants' | "GroundsCovers" | "Creepers"
type SortByKey = 'popularity' | 'customerRating' | 'discount'

const Filter = () => {
  const [range, setRange] = useState(0)
  const [checkboxes, setCheckboxes] = useState<{
    airPlant: boolean
    floweringPlant: boolean
    focalPlants: boolean
    GroundsCovers: boolean
    Creepers: boolean
  }>({
    airPlant: false,
    floweringPlant: false,
    focalPlants: false,
    GroundsCovers: false,
    Creepers: false
  })

  const [sortBy, setSortBy] = useState<{
    popularity: boolean
    customerRating: boolean
    discount: boolean
  }>({
    popularity: false,
    customerRating: false,
    discount: false,
  })

  const toggleCheckbox = (key: CheckboxKey) => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleSortBy = (key: SortByKey) => {
    setSortBy((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const renderCheckbox = (key: CheckboxKey, label: string) => (
    <View style={styles.checkboxRow}>
      <CheckBox
        value={checkboxes[key]}
        onValueChange={() => toggleCheckbox(key)}
        tintColors={{
          true: COLORS.primary, // Checkbox border and check color when selected
          false: COLORS.MoodyBlue, // Checkbox border color when not selected
        }}
      />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </View>
  )

  const renderSortByCheckbox = (key: SortByKey, label: string) => (
    <View style={styles.checkboxRow}>
      <CheckBox
        value={sortBy[key]}
        onValueChange={() => toggleSortBy(key)}
        tintColors={{
          true: COLORS.primary,
          false: COLORS.MoodyBlue,
        }}
      />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
    <ScrollView>
    <DynamicText content="Price" />
      <Text style={styles.header}>Selected Range</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={999}
            value={range}
            onValueChange={(value) => setRange(value)}
            step={1}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.secondary}
            thumbTintColor={COLORS.primary}
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>{range}</Text>
          <Text style={styles.label}>999</Text>
        </View>
      </View>
      <Divider style={styles.dividercontainer}/>
      {/* Category Section */}
      <View style={styles.checkboxContainer}>
        <Text style={styles.header}>Categories</Text>
        {renderCheckbox('airPlant', 'Air Plant')}
        {renderCheckbox('floweringPlant', 'Flowering Plant')}
        {renderCheckbox('focalPlants', 'Focal Plants')}
        {renderCheckbox('GroundsCovers', 'Grounds Covers')}
        {renderCheckbox('Creepers', 'Creepers')}
      </View>
      <Divider style={styles.dividercontainer}/>
      {/* Sort By Section */}
      <View style={styles.checkboxContainer}>
        <Text style={styles.header}>Sort By</Text>
        {renderSortByCheckbox('popularity', 'Popularity')}
        {renderSortByCheckbox('customerRating', 'Customer Rating')}
        {renderSortByCheckbox('discount', 'Discount')}
      </View>

      {/* Apply and Cancel Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={[styles.button, styles.applyButton]}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical:20
  },
  header: {
    fontSize: 16,
    color: COLORS.primary,
    marginHorizontal: 15,
    marginVertical: 15,
    fontFamily: FONTS.AvenirDemi,
  },
  sliderContainer: {
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 14,
    color: COLORS.primary,
  },
  slider: {
    marginHorizontal: 0,
  },
  progressBarContainer: {
    paddingHorizontal: 20,
    paddingVertical:10
  },
  checkboxContainer: {
    paddingHorizontal: 20,
    paddingVertical:10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: COLORS.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    bottom: 10,
    marginHorizontal: 25
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: COLORS.secondary,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.AvenirDemi,
  },
  dividercontainer:{
      borderColor: COLORS.MoodyBlue, 
      borderWidth: 0.5, // Adjust thickness
      marginVertical: 10, // Adds padding (top and bottom)
      marginHorizontal:20
  }
})
