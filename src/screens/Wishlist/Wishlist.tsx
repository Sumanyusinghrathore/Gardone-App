import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground } from 'react-native';
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { useData } from '../../context/DataContext/DataContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import LinearGradient from 'react-native-linear-gradient';
import Minus from '../../assets/Icons/Divid.svg';
import Plus from '../../assets/Icons/Plus.svg';

const { width: screenWidth } = Dimensions.get('window');

const ArrivalscardData = [
  {
    title: 'Monstera',
    type: 'Indoor',
    age: '6 Months',
    price: '₹ 40.25',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Bgimg1.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Bgimg2.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Bgimg2.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Bgimg1.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Bgimg2.png'),
  },
];

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Wishlist = () => {
  const navigation = useNavigation<NavigationProp>();
  const { setProductData, cardQuantities, handleAddButtonPress, handleIncreaseQuantity, handleDecreaseQuantity } = useData();

  // Maintain a mapping from card index to its current quantity.
  // If a card does not have an entry or the value is 0, we show the "ADD" button.

  // When the user taps "ADD", set the card's quantity to 1

  return (
    <View style={styles.container}>
      <FlatList
        data={ArrivalscardData}
        numColumns={2}
        renderItem={({ item, index }) => {
          // Check if this card has a quantity > 0
          const quantity = cardQuantities[index] || 0;
          const showQuantity = quantity > 0;
          return (
            <TouchableOpacity
              activeOpacity={ACTIVE_OPACITY}
              onPress={() => {
                setProductData([item]);
                navigation.navigate("ProductDetail", { name: "Product Details" });
              }}
            >
              <ImageBackground
                // Use a static background image or, if you have a dynamic one, replace this with item.backgroundImage
                source={item.Backgroungimg}
                style={styles.cardContainer}
                imageStyle={{ borderRadius: 15 }} // This rounds the background image corners
              >
                <View style={styles.cardContent}>
                  {/* Image */}
                  <View style={styles.imageWrapper}>
                    <Image source={item.image} style={styles.image} />
                  </View>

                  {/* Text content */}
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subText}>{item.type}</Text>
                    <Text style={styles.subText}>{item.age}</Text>
                  </View>

                  <View style={styles.bottomRow}>
                    <Text style={styles.price}>{item.price}</Text>
                    {showQuantity ? (
                      <LinearGradient
                        colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
                        style={styles.gradientBorder}
                      >
                        <View style={styles.quantityContainer}>
                          <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => handleDecreaseQuantity(index)}
                          >
                            <Minus width={25} height={25} fill={COLORS.white} />
                          </TouchableOpacity>
                          <Text style={styles.quantityText}>{quantity}</Text>
                          <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => handleIncreaseQuantity(index)}
                          >
                            <Plus width={25} height={25} fill={COLORS.white} />
                          </TouchableOpacity>
                        </View>
                      </LinearGradient>
                    ) : (
                      <TouchableOpacity
                        onPress={() => handleAddButtonPress(item, index)}
                        style={styles.addButton}
                        activeOpacity={ACTIVE_OPACITY}
                      >
                        <Text style={styles.text}>ADD</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>

          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 15,
  },
  cardContainer: {
    width: screenWidth * 0.45,
    borderRadius: 15,
    overflow:'hidden',
    elevation:5,
    shadowColor:'#000',
    shadowOffset:{ width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius:3,
    padding: 5,
    margin: 10,
  },
  cardContent: {
    flexDirection: "column",
    marginHorizontal: 5,
    marginVertical: 10,
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
    flex: 1,
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
    fontSize: 14,
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
    zIndex: 0,
    padding: 5,
  },
  text: {
    fontSize: 12,
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONTS.AvenirDemi,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: COLORS.white,
    padding: 3,
  },
  gradientBorder: {
    borderRadius: 5,
    padding: 2,
    marginTop: 'auto',
    marginBottom: 0,
    marginHorizontal: 10,
  },
  quantityButton: {
    paddingVertical: 0,
  },
  quantityText: {
    fontSize: 14,
    marginHorizontal: 10,
    color: COLORS.black,
  },
});
