import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import React Navigation hooks
import { COLORS, FONTS } from '../../themes/theme';
import { RootStackParamList } from '../../routes/types';
import { RouteProp } from '@react-navigation/native';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import PlusIcon from '../../assets/Icons/PlusVector.svg';
import { Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
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
  {
    title: 'Fiddle Leaf',
    type: 'Indoor',
    age: '1 Year',
    price: '₹ 50.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#2f702a',
  },
  {
    title: 'Snake Plant',
    type: 'Fertilizers',
    age: '8 Months',
    price: '₹ 35.50',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#4a8b3c',
  },
  {
    title: 'Succulent Pot',
    type: 'Pots & Planter',
    age: 'New',
    price: '₹ 25.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#b4c94c',
  },
  {
    title: 'Organic Fertilizer',
    type: 'Fertilizers',
    age: 'New',
    price: '₹ 15.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#ff8c00',
  },
  {
    title: 'Organic Fertilizer',
    type: 'Fertilizers',
    age: 'New',
    price: '₹ 15.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#ff8c00',
  },
  {
    title: 'Organic Fertilizer',
    type: 'Fertilizers',
    age: 'New',
    price: '₹ 15.00',
    image: require('../../assets/Images/Houseplant.png'),
    backgroundColor: '#ff8c00',
  },
];

 

  

const Categorie = () => {
  const route = useRoute<RouteParams>(); // Type the route hook with RouteParams
  const categoryName = route.params?.name;
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
  const handleAddButtonPress = (item: any) => {
    console.log("Product Data:");
    setProductData(item);
    navigation.navigate('ProductDetail', { name: 'Product Details' });
  };

  return (
    <View style={styles.container}>
      {/* Render a list of items based on the filtered data */}
      <FlatList
        data={filteredData}
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
              <TouchableOpacity
                onPress={() => handleAddButtonPress(item)}
                style={styles.addButton}
                activeOpacity={ACTIVE_OPACITY}
              >
                <PlusIcon width={20} height={20} fill="#fff" />
              </TouchableOpacity>
            </View>
          </View>
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
});

export default Categorie;
