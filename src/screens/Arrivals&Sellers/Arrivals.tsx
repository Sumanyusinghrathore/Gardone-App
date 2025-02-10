import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import { useData } from '../../context/DataContext/DataContext';
import Minus from '../../assets/Icons/Divid.svg';
import Plus from '../../assets/Icons/Plus.svg';
import LinearGradient from 'react-native-linear-gradient';

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
  return (
    <View style={styles.container}>
      <FlatList
        data={ArrivalscardData}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ArrivalsCard item={item} navigation={navigation} index={index} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

type ArrivalsCardProps = {
  item: typeof ArrivalscardData[0];
  navigation: NavigationProp;
  index: number;
};

const ArrivalsCard = ({ item, navigation, index }: ArrivalsCardProps) => {
  const {
    setProductData,
    cardQuantities,
    handleAddButtonPress,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useData();

  // Get the current quantity for this card; if none exists, it defaults to 0.
  const quantity = cardQuantities[index] || 0;
  const showQuantity = quantity > 0;

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={() => {
        setProductData(item);
        navigation.navigate('ProductDetail', { name: 'Product Details' });
      }}
    >
      <ImageBackground
        source={item.Backgroungimg}
        style={styles.cardContainer}
        imageStyle={{ borderRadius: 15 }} // Rounds the background image corners
      >
        <View style={styles.cardContent}>
          <View style={styles.imageWrapper}>
            <Image source={item.image} style={styles.image} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subText}>{item.type}</Text>
            <Text style={styles.subText}>{item.age}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
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
    flexDirection: 'column',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  imageWrapper: {
    width: '100%',
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
    width: '40%',
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: COLORS.white,
    padding: 3,
    alignItems: 'center',
  },
  gradientBorder: {
    borderRadius: 5,
    padding: 2,
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
  text: {
    fontSize: 12,
    color: COLORS.primary,
    textAlign: 'center',
    fontFamily: FONTS.AvenirDemi,
  },
});

export default Arrivals;
