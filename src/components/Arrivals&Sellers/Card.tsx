import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import PlusIcon from '../../assets/Icons/PlusVector.svg';
import Minus from '../../assets/Icons/Divid.svg';
import Plus from '../../assets/Icons/Plus.svg';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { COLORS, FONTS, SIZES } from '../../themes/theme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import { useData } from '../../context/DataContext/DataContext';
import LinearGradient from 'react-native-linear-gradient';

type CardProps = {
  index: any; // Added index prop to identify the card in the context
  title: string;
  type: string;
  age: string;
  price: any;
  image: any;
  Backgroundimg: any;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Card: React.FC<CardProps> = ({
  index,
  title,
  type,
  age,
  price,
  image,
  Backgroundimg,
}) => {
  const navigation = useNavigation<NavigationProp>();
  const {
    handleAddButtonPress,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    cardQuantities,
  } = useData();
  const scrollViewRef = useRef<ScrollView>(null);

  // Navigate to the product details screen
  const handleCardPress = () => {
    navigation.navigate("ProductDetail", { name: "Product Details" });
  };

  // Get the current quantity for this card from the context.
  const quantity = cardQuantities[index] || 0;
  const showQuantity = quantity > 0;

  // Create an object representing the item data (you can adjust this to suit your needs)
  const itemData = { title, type, age, price, image, Backgroundimg };

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollViewContent}>
      <TouchableOpacity onPress={handleCardPress} activeOpacity={ACTIVE_OPACITY}>
        <ImageBackground
          source={Backgroundimg}
          style={styles.cardContainer}
          imageStyle={{ borderRadius: 15 }} // Rounds the background image corners
        >
          <View style={styles.cardContent}>
            <View style={styles.imageWrapper}>
              <Image source={image} style={styles.image} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subText}>{type}</Text>
              <Text style={styles.subText}>{age}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>

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
                onPress={() => handleAddButtonPress(itemData, index)}
                style={styles.addButton}
                activeOpacity={ACTIVE_OPACITY}
              >
                <PlusIcon width={20} height={20} fill="#fff" />
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 10,
  },
  cardContainer: {
    width: 350,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 5,
    height: 140,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.h4,
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
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 90,
    right: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    borderRadius: 5,
    backgroundColor: COLORS.white,
    padding: 2,
  },
  gradientBorder: {
    borderRadius: 5,
    padding: 2,
    marginTop: 'auto',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  quantityButton: {
    paddingVertical: 0,
  },
  quantityText: {
    fontSize: 14,
    marginHorizontal: 10,
    color: COLORS.black,
    marginVertical: 0,
  },
  heading: {
    fontSize: 16,
    color: COLORS.white,
    marginRight: 10,
  },
});
