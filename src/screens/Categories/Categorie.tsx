import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import React Navigation hooks
import { COLORS, FONTS } from '../../themes/theme';
import { RootStackParamList } from '../../routes/types';
import { RouteProp } from '@react-navigation/native';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import PlusIcon from '../../assets/Icons/PlusVector.svg';
import { Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useData } from '../../context/DataContext/DataContext';
import LinearGradient from 'react-native-linear-gradient';
import Minus from '../../assets/Icons/Divid.svg'
import Plus from '../../assets/Icons/Plus.svg'

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
  const route = useRoute<RouteParams>(); // Type the route hook with RouteParams
  const categoryName = route.params?.name;
  const [quantity, setQuantity] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);
  const navigation = useNavigation<NavigationProp>();
  const { setProductData } = useData();  // Use setProductData from context
  useEffect(() => {
    navigation.setOptions({
      headerTitle: categoryName,
    });
  }, [navigation, categoryName]);

  // Filter the data based on the category name
  const filteredData = ArrivalscardData.filter(item =>
    item.type.toLowerCase() === categoryName?.toLocaleLowerCase()
  );
  const handleCardPress = (item: any) => {
    console.log("Product Data:");
    setProductData(item);
    navigation.navigate('ProductDetail', { name: 'Product Details' });
  };

  const handleAddButtonPress = (item: any) => {
    setProductData(item);
    setShowQuantity(true);
    setQuantity(1);
  };

  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 0 ? prev - 1 : 0));
    if (quantity === 1) {
      setShowQuantity(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Render a list of items based on the filtered data */}
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleCardPress} activeOpacity={ACTIVE_OPACITY}>
          <ImageBackground source={item.Backgroungimg}
        style={styles.cardContainer}
        imageStyle={{ borderRadius: 15 }}>
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
              {showQuantity ? (
              <LinearGradient
                              colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
                              style={styles.gradientBorder}
                            >
                              
              <View style={styles.quantityContainer}>
                {/* <Text style={styles.quantityText}>Qty:</Text> */}
                <TouchableOpacity style={styles.quantityButton} onPress={handleDecreaseQuantity}>
                  <Minus width={25} height={25} fill={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={handleIncreaseQuantity}>
                  <Plus width={25} height={25} fill={COLORS.white} />
                </TouchableOpacity>
              </View>
              </LinearGradient>
            ) : (
              <TouchableOpacity 
                onPress={handleAddButtonPress} 
                style={styles.addButton} 
                activeOpacity={ACTIVE_OPACITY}
              >
                <PlusIcon width={20} height={20} fill="#fff" />
              </TouchableOpacity>
            )}
            </View>
          </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: COLORS.primary
  },
  cardContainer: {
    width: screenWidth * 0.9,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    padding: 5,
    height: 140,
    marginVertical: 10
  },
  cardContent: {
    flexDirection: 'row', // Align image and text side by side
    alignItems: 'center',
  },
  imageWrapper: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10, // Space between image and text
    marginVertical: 15,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1, // Take up remaining space
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
  addButtonText: {
    fontSize: 20,
    color: COLORS.primary,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: "auto",
    borderRadius: 5,
    backgroundColor: COLORS.white,
    padding: 3,
  },
  gradientBorder: {
    borderRadius: 5,
    padding: 2,
    marginTop:'auto',
    marginBottom:10,
    marginHorizontal:10
    
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
});

export default Categorie;
