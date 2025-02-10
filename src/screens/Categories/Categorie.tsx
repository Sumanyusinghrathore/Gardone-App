import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import PlusIcon from '../../assets/Icons/PlusVector.svg';
import Minus from '../../assets/Icons/Divid.svg';
import Plus from '../../assets/Icons/Plus.svg';
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { RootStackParamList } from '../../routes/types';
import { useData } from '../../context/DataContext/DataContext';

const { width: screenWidth } = Dimensions.get('window');

type RouteParams = RouteProp<RootStackParamList, 'Categorie'>;
type NavigationProp = StackNavigationProp<RootStackParamList>;

const ArrivalscardData = [
  {
    title: 'Monstera',
    type: 'Indoor',
    age: '6 Months',
    price: '₹ 40.25',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg1.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg2.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg1.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg2.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg1.png'),
  },
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg2.png'),
  },
  {
    title: 'Snake Plant',
    type: 'Fertilizers',
    age: '8 Months',
    price: '₹ 35.50',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg1.png'),
  },
  {
    title: 'Succulent Pot',
    type: 'Pots & Planter',
    age: 'New',
    price: '₹ 25.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg2.png'),
  },
  {
    title: 'Organic Fertilizer',
    type: 'Fertilizers',
    age: 'New',
    price: '₹ 15.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg1.png'),
  },
  {
    title: 'Organic Fertilizer',
    type: 'Fertilizers',
    age: 'New',
    price: '₹ 15.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg2.png'),
  },
  {
    title: 'Organic Fertilizer',
    type: 'Fertilizers',
    age: 'New',
    price: '₹ 15.00',
    image: require('../../assets/Images/Houseplant.png'),
    Backgroungimg: require('../../assets/Images/Horizontalbg1.png'),
  },
];

const Categorie = () => {
  const route = useRoute<RouteParams>();
  const categoryName = route.params?.name;
  const navigation = useNavigation<NavigationProp>();
  const { setProductData, cardQuantities, handleAddButtonPress, handleIncreaseQuantity, handleDecreaseQuantity } = useData();

  // Use an object to keep track of each card's quantity by its index.
  // const [cardQuantities, setCardQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    navigation.setOptions({
      headerTitle: categoryName,
    });
  }, [navigation, categoryName]);

  // Filter the data based on the category name
  const filteredData = ArrivalscardData.filter((item) =>
    item.type.toLowerCase() === categoryName?.toLocaleLowerCase()
  );

  // Navigate to product detail and set the current product data
  const handleCardPress = (item: any) => {
    console.log('Product Data:', item);
    setProductData(item);
    navigation.navigate('ProductDetail', { name: 'Product Details' });
  };

  

  return (
    <View style={styles.container}>
      <FlatList
        key={categoryName}
        data={filteredData}
        renderItem={({ item, index }) => {
          const currentQuantity = cardQuantities[index] || 0;
          return (
            <TouchableOpacity
              onPress={() => handleCardPress(item)}
              activeOpacity={ACTIVE_OPACITY}
            >
              <ImageBackground
                source={item.Backgroungimg}
                style={styles.cardContainer}
                imageStyle={{ borderRadius: 15 }}
              >
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

                  {/* Conditionally render the "Add" button or the quantity controller */}
                  {currentQuantity > 0 ? (
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
                        <Text style={styles.quantityText}>{currentQuantity}</Text>
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
                      <PlusIcon width={20} height={20} fill="#fff" />
                    </TouchableOpacity>
                  )}
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: screenWidth * 0.9,
    height: 140,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 5,
    marginVertical: 10,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
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
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 3,
    marginTop: 'auto',
  },
  gradientBorder: {
    borderRadius: 5,
    padding: 2,
    marginTop: 'auto',
    marginBottom: 10,
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

export default Categorie;
