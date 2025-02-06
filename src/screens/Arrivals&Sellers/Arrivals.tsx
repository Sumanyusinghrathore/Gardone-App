import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import { useData } from '../../context/DataContext/DataContext';
import Minus from '../../assets/Icons/Divid.svg'
import Plus from '../../assets/Icons/Plus.svg'
import LinearGradient from 'react-native-linear-gradient';
import BackgroundImg from '../../assets/Images/Backgroundimg.svg';

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
];

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Arrivals = () => {
  const navigation = useNavigation<NavigationProp>();
  const { setProductData } = useData();

  return (
    <View style={styles.container}>
      <FlatList
        data={ArrivalscardData}
        numColumns={2}
        renderItem={({ item }) => <ArrivalsCard item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const ArrivalsCard = ({ item, navigation }: { item: typeof ArrivalscardData[0]; navigation: NavigationProp }) => {
  const { setProductData } = useData();
  const [quantity, setQuantity] = useState(0);
  const [showQuantity, setShowQuantity] = useState(false);

  const handleAddButtonPress = (item: any) => {
    setProductData(item);
    setShowQuantity(true);
    setQuantity(1);
  };

  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);

  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 0));
    if (quantity === 1) {
      setShowQuantity(false);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={() => {
        setProductData(item);
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
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subText}>{item.type}</Text>
          <Text style={styles.subText}>{item.age}</Text>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.price}>{item.price}</Text>
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
                onPress={() => handleAddButtonPress(item)} // Pass the item data here
                style={styles.addButton}
                activeOpacity={ACTIVE_OPACITY}
              >
                <Text style={styles.text}>ADD</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>


      </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  cardContainer: {
    width: screenWidth * 0.45,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
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
    marginVertical: 10,
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
    fontSize: 16,
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
    padding: 5,
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
    marginTop: 'auto',
    marginBottom: 0,
    marginHorizontal: 10

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
  text: {
    fontSize: 12,
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONTS.AvenirDemi,
  },
});

export default Arrivals;
