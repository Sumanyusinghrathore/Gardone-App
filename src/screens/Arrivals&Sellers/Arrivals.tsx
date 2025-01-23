import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';

const { width: screenWidth } = Dimensions.get('window');

const ArrivalscardData = [
  {
    title: 'Monstera',
    type: 'Indoor',
    age: '6 Months',
    price: '₹ 40.25',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#1c5e4a',
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#2f702a',
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#2f702a',
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#2f702a',
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#2f702a',
  },
];

const Arrivals = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ArrivalscardData}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={[styles.cardContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.cardContent}>
              {/* Image on the left side */}
              <View style={styles.imageWrapper}>
                <Image source={item.image} style={styles.image} />
              </View>

              {/* Text content on the right side */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subText}>{item.type}</Text>
                <Text style={styles.subText}>{item.age}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>

              {/* Add button */}
              <TouchableOpacity style={styles.addButton} activeOpacity={ACTIVE_OPACITY}>
               <Text style={styles.text}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  cardContainer: {
    width: screenWidth * 0.45, // Adjust width to fit 2 cards in a row
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    padding: 5,
    margin: 10, // Add margin between cards
  },
  cardContent: {
    flexDirection: "column", // Align image and text side by side
    marginHorizontal:5,
    marginVertical:10
  },
  imageWrapper: {
    width: "100%",
    height: 150,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 15,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1, // Take up remaining space
  },
  title: {
    fontSize: 18,
    color: COLORS.white,
    marginBottom: 5,
    fontFamily: FONTS.AvenirBold,
  },
  subText: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.AvenirRegular,
    marginVertical: 3,
  },
  price: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.AvenirBold,
    marginTop: 5,
  },
  addButton: {
    width: "40%",
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 10,
    zIndex:0,
    padding:5
  },
  text: {
    fontSize: 16,
    color:COLORS.primary,
    textAlign:"center",
    fontFamily:FONTS.AvenirDemi
  },
});

export default Arrivals;
