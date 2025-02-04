import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PlusIcon from '../../assets/Icons/PlusVector.svg'
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { COLORS, FONTS, SIZES } from '../../themes/theme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';

type CardProps = {
  title: string;
  type: string;
  age: string;
  price: string;
  image: any;
  backgroundColor: string;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;
const Card: React.FC<CardProps> = ({ title, type, age, price, image, backgroundColor }) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={styles.cardContent}>
        {/* Image on the left side */}
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} />
        </View>

        {/* Text content on the right side */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subText}>{type}</Text>
          <Text style={styles.subText}>{age}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        {/* Add button */}
        <TouchableOpacity onPress={()=> {navigation.navigate("ProductDetail", { name: "Product Details" })}} style={styles.addButton} activeOpacity={ACTIVE_OPACITY}>
          <PlusIcon width={20} height={20} fill="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
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
    marginVertical: 15
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
    fontFamily:FONTS.AvenirBold
  },
  subText: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily:FONTS.AvenirRegular,
    marginVertical:3
  },
  price: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily:FONTS.AvenirBold,
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
});
