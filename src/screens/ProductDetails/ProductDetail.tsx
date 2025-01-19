import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, REMOVESTRING } from '../../themes/theme';
import Swiper from 'react-native-swiper';
import Star from '../../assets/Icons/Star.svg';
import DynamicText from '../../components/CustomText/DynamicText';
import { ScrollView } from 'react-native-gesture-handler';
import Minus from '../../assets/Icons/Divid.svg'
import Plus from '../../assets/Icons/Plus.svg'
import Collapsible from 'react-native-collapsible';
import { Divider } from '@rneui/themed';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedPlanter, setSelectedPlanter] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<null | number>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(prev => (prev === index ? null : index));
  };

  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
  const handleDecreaseQuantity = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  const formattedQuantity = quantity.toString().padStart(2, '0');

  return (
    <View style={styles.container}>
     <ScrollView>
     <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={false}
        autoplayTimeout={3}
        loop={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {[...Array(3)].map((_, index) => (
          <View style={styles.slide} key={index}>
            <Image
              source={require('../../assets/Images/Product_details.png')}
              style={styles.bannerimg}
            />
          </View>
        ))}
      </Swiper>

      <View style={styles.productDetails}>
        <Text style={styles.Header}>Product Name</Text>
        <Star width={100}/>
        <View style={styles.priceContainer}>
        <Text style={styles.discountedPrice}>{REMOVESTRING(450)}</Text>
        <Text style={styles.price}>1999.00</Text>
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>21% OFF</Text>
        </View>
      </View>
        <DynamicText content="Select Planter:" />
        <View style={styles.planterButtonsContainer}>
          <TouchableOpacity
            style={[styles.planterButton, selectedPlanter === 'Lotus Bowl' && styles.selectedButton]}
            onPress={() => setSelectedPlanter('Lotus Bowl')}
          >
            <Text style={[styles.planterButtonText, selectedPlanter === 'Lotus Bowl' && styles.selectedButtonText]}>Lotus Bowl</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.planterButton, selectedPlanter === 'Ceramic Bowl' && styles.selectedButton]}
            onPress={() => setSelectedPlanter('Ceramic Bowl')}
          >
            <Text style={[styles.planterButtonText, selectedPlanter === 'Ceramic Bowl' && styles.selectedButtonText]}>Ceramic Bowl</Text>
          </TouchableOpacity>
        </View>

        <DynamicText content="Plant Age:" />
        <View style={styles.ageButtonsContainer}>
          <TouchableOpacity
            style={[styles.planterButton, selectedAge === '1 Month' && styles.selectedButton]}
            onPress={() => setSelectedAge('1 Month')}
          >
            <Text style={[styles.ageButtonText, selectedAge === '1 Month' && styles.selectedButtonText]}>1 Month</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.planterButton, selectedAge === '3 Months' && styles.selectedButton]}
            onPress={() => setSelectedAge('3 Months')}
          >
            <Text style={[styles.ageButtonText, selectedAge === '3 Months' && styles.selectedButtonText]}>3 Months</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.planterButton, selectedAge === '6 Months' && styles.selectedButton]}
            onPress={() => setSelectedAge('6 Months')}
          >
            <Text style={[styles.ageButtonText, selectedAge === '6 Months' && styles.selectedButtonText]}>6 Months</Text>
          </TouchableOpacity>
        </View>

        <DynamicText content="Quantity:" />
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecreaseQuantity}>
            <Minus/>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{formattedQuantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncreaseQuantity}>
          <Plus/>
          </TouchableOpacity>
        </View>
      </View>
      {/* Accordion 1 */}
      <View style={{marginVertical:10}}>
        <TouchableOpacity
          onPress={() => toggleAccordion(1)}
          style={styles.header}
        >
          <Text style={styles.headerText}>Description</Text>
          <Text style={styles.icon}>{activeAccordion === 1 ? '↑' : '↓'}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={activeAccordion !== 1}>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              Add a touch of vibrant tradition to your jewelry collection with
              our Authentic Maasai Beaded Bracelet. Handcrafted by skilled
              Maasai artisans, this stunning bracelet showcases the rich
              cultural heritage and artistry of the Maasai people of East
              Africa.
            </Text>
          </View>
        </Collapsible>
      </View>
      <Divider />
      {/* Accordion 2 */}
      <View style={{marginVertical:10}}>
        <TouchableOpacity
          onPress={() => toggleAccordion(2)}
          style={styles.header}
        >
          <Text style={styles.headerText}>Details</Text>
          <Text style={styles.icon}>{activeAccordion === 2 ? '↑' : '↓'}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={activeAccordion !== 2}>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              Our bracelets are made with high-quality beads and materials to
              ensure durability and longevity. Available in various colors and
              sizes to suit your personal style.
            </Text>
          </View>
        </Collapsible>
      </View>
     </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
    paddingVertical:10
  },
  bannerimg: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  wrapper: {
    height: 300, 
  },
  dotStyle: {
    backgroundColor: COLORS.secondary, 
    width: 20,
    height: 10,
    borderRadius: 4,
    margin: 3,
    top: 50,
  },
  activeDotStyle: {
    backgroundColor: COLORS.primary,
    width: 30,
    height: 10,
    borderRadius: 6,
    margin: 3,
    top: 50,
  },
  slide: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice:{
fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal:5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal:5,
    textDecorationLine: 'line-through',
  },
  discountContainer: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal:5,
  
  },
  discountText: {
    fontSize: 16,
    color: '#fff',
  },

  Header: {
    fontSize: 24,
    color: '#000',
    fontFamily: FONTS.AvenirBold,
    marginVertical: 10,
  },
  
  productDetails: {
    marginTop: 20,
  },
  planterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    width:250
  },
  planterButton: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    borderColor:COLORS.MoodyBlue,
    borderWidth:1
  },
  selectedButton: {
    backgroundColor: COLORS.primary,
  },
  planterButtonText: {
    color: '#000',
    fontSize: 16,
  },
  selectedButtonText: {
    color: '#fff',
  },
  ageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width:300
  },
  ageButton: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  ageButtonText: {
    color: '#000',
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal:10
  },
  quantityButton: {
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
    color:COLORS.HeadingColor,
    marginVertical:5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    backgroundColor: '#fff',
    padding: 15,
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});
