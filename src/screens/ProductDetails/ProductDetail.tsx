import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, REMOVESTRING } from '../../themes/theme';
import Swiper from 'react-native-swiper';
import Star from '../../assets/Icons/Star.svg';
import { ScrollView } from 'react-native-gesture-handler';
import Minus from '../../assets/Icons/Divid.svg'
import Plus from '../../assets/Icons/Plus.svg'
import Collapsible from 'react-native-collapsible';
import { Divider } from '@rneui/themed';
import Downarrow from '../../assets/Icons/Downarrow.svg';
import Toparrow from '../../assets/Icons/Uparrow.svg';
import Whatsapp from '../../assets/Icons/Whatsappicon.svg';
import Copy from '../../assets/Icons/copyicon.svg';
import Share from '../../assets/Icons/Shareicon.svg';
import DynamicText from '../../components/CustomText/DynamicText';
import Card from '../../components/Arrivals&Sellers/Card';


const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedPlanter, setSelectedPlanter] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<null | number>(null);
  const [customactiveAccordion, setcustomActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(prev => (prev === index ? null : index));
  };

  const customtoggleAccordion = (index: number) => {
    setcustomActiveAccordion(customactiveAccordion === index ? null : index);
  };

  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
  const handleDecreaseQuantity = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  const formattedQuantity = quantity.toString().padStart(2, '0');
  const originalPrice = 1999.0;
  const discountedPrice = 499.0;

  const discountPercentage = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );

  const ArrivalscardData = [
    {
      title: 'Monstera',
      type: 'Outdoor',
      age: '6 Months',
      price: '₹ 40.25',
      image: require('../../assets/Images/Houseplant.png'), // Replace with your image path
      backgroundColor: '#1c5e4a',
    },
    {
      title: 'Fiddle Leaf',
      type: 'Indoor',
      age: '1 Year',
      price: '₹ 50.00',
      image: require('../../assets/Images/Houseplant.png'), // Replace with your image path
      backgroundColor: '#2f702a',
    },
    {
      title: 'Snake Plant',
      type: 'Low Light',
      age: '8 Months',
      price: '₹ 35.50',
      image: require('../../assets/Images/Houseplant.png'), // Replace with your image path
      backgroundColor: '#4a8b3c',
    },
  ];

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
          <Star width={100} />
          <View style={styles.priceContainer}>
            <Text style={styles.discountedPrice}>{REMOVESTRING(discountedPrice)}</Text>
            <Text style={styles.price}>{originalPrice}</Text>
            <View style={styles.discountContainer}>
              <Text style={styles.discountText}>{discountPercentage}% OFF</Text>
            </View>
          </View>
          <Text style={styles.heading}>Product Name</Text>
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

          <Text style={styles.heading}>Plant Age:</Text>
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
          <Text style={styles.heading}>Quantity:</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={handleDecreaseQuantity}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{formattedQuantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={handleIncreaseQuantity}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
        {/* Accordion 1 */}
        <View style={styles.accodionmargin}>
          <TouchableOpacity
            onPress={() => toggleAccordion(1)}
            style={styles.header}
          >
            <Text style={styles.headerText}>Description</Text>
            <View>{activeAccordion === 1 ? <Toparrow width={25} height={25} /> : <Downarrow width={25} height={25} />}
            </View>
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
        <View style={styles.accodionmargin}>
          <TouchableOpacity
            onPress={() => toggleAccordion(2)}
            style={styles.header}
          >
            <Text style={styles.headerText}>Reviews </Text>
            <View>{activeAccordion === 2 ? <Toparrow width={25} height={25} /> : <Downarrow width={25} height={25} />}
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={activeAccordion !== 2}>
            <View style={styles.content}>
              <View style={styles.reviewcard}>
                <Image
                  source={require('../../assets/Images/dummyimg.png')} // Replace with your image URL
                  style={styles.cardAvatar}
                />
                <View style={styles.cardRightContent}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardName}>Ayushi Jain</Text>
                    <View style={styles.cardRating}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Text key={index} style={styles.cardStar}>
                          ★
                        </Text>
                      ))}
                    </View>
                  </View>
                  <Text style={styles.cardDescription}>
                    Add a touch of vibrant tradition to your jewelry collection with our
                    Authentic Maasai Beaded Bracelet. Handcrafted by skilled Maasai artisans.
                  </Text>
                </View>
              </View>
              <View style={styles.reviewcard}>
                <Image
                  source={require('../../assets/Images/dummyimg.png')} // Replace with your image URL
                  style={styles.cardAvatar}
                />
                <View style={styles.cardRightContent}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardName}>Ayushi Jain</Text>
                    <View style={styles.cardRating}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Text key={index} style={styles.cardStar}>
                          ★
                        </Text>
                      ))}
                    </View>
                  </View>
                  <Text style={styles.cardDescription}>
                    Add a touch of vibrant tradition to your jewelry collection with our
                    Authentic Maasai Beaded Bracelet. Handcrafted by skilled Maasai artisans.
                  </Text>
                </View>
              </View>
              <View style={styles.reviewcard}>
                <Image
                  source={require('../../assets/Images/dummyimg.png')} // Replace with your image URL
                  style={styles.cardAvatar}
                />
                <View style={styles.cardRightContent}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardName}>Ayushi Jain</Text>
                    <View style={styles.cardRating}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Text key={index} style={styles.cardStar}>
                          ★
                        </Text>
                      ))}
                    </View>
                  </View>
                  <Text style={styles.cardDescription}>
                    Add a touch of vibrant tradition to your jewelry collection with our
                    Authentic Maasai Beaded Bracelet. Handcrafted by skilled Maasai artisans.
                  </Text>
                </View>
              </View>
            </View>
          </Collapsible>
        </View>
        <View style={styles.accorioncontainer}>
      {/* Accordion 1 */}
      <View style={styles.accodionmargincontainer}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => customtoggleAccordion(1)}
        >
          <Text style={styles.accodionheader}>Water Once A Week</Text>
          <View>
            {customactiveAccordion === 1 ? (
              <Toparrow width={25} height={25} />
            ) : (
              <Downarrow width={25} height={25} />
            )}
          </View>
        </TouchableOpacity>
        {customactiveAccordion === 1 && (
          <View style={styles.content}>
            <Text style={styles.contentText}>
              This plant requires watering once a week to thrive. Make sure to avoid overwatering.
            </Text>
          </View>
        )}
      </View>
      <Divider />
      {/* Accordion 2 */}
      <View style={styles.accodionmargincontainer}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => customtoggleAccordion(2)}
        >
          <Text style={styles.accodionheader}>Need Bright Indirect Sunlight</Text>
          <View>
            {customactiveAccordion === 2 ? (
              <Toparrow width={25} height={25} />
            ) : (
              <Downarrow width={25} height={25} />
            )}
          </View>
        </TouchableOpacity>
        {customactiveAccordion === 2 && (
          <View style={styles.content}>
            <Text style={styles.contentText}>
              Place this plant in a spot with bright but indirect sunlight to ensure healthy growth.
            </Text>
          </View>
        )}
      </View>
      <Divider />
      {/* Accordion 3 */}
      <View style={styles.accodionmargincontainer}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => customtoggleAccordion(3)}
        >
          <Text style={styles.accodionheader}>Not Pet Friendly</Text>
          <View>
            {customactiveAccordion === 3 ? (
              <Toparrow width={25} height={25} />
            ) : (
              <Downarrow width={25} height={25} />
            )}
          </View>
        </TouchableOpacity>
        {customactiveAccordion === 3 && (
          <View style={styles.content}>
            <Text style={styles.contentText}>
              Keep this plant away from pets as it may be toxic if ingested.
            </Text>
          </View>
        )}
      </View>
      <Divider />
      {/* Accordion 4 */}
      <View style={styles.accodionmargincontainer}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => customtoggleAccordion(4)}
        >
          <Text style={styles.accodionheader}>Beginner Friendly</Text>
          <View>
            {customactiveAccordion === 4 ? (
              <Toparrow width={25} height={25} />
            ) : (
              <Downarrow width={25} height={25} />
            )}
          </View>
        </TouchableOpacity>
        {customactiveAccordion === 4 && (
          <View style={styles.content}>
            <Text style={styles.contentText}>
              This plant is easy to care for, making it perfect for beginners.
            </Text>
          </View>
        )}
      </View>
    </View>
    <View style={styles.sharecontainer}>
      <Text style={styles.headerText}>Share product:</Text>
      <TouchableOpacity style={styles.icon}>
        <Share width={30} height={30} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Copy width={30} height={30} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Whatsapp width={30} height={30} />
      </TouchableOpacity>   
    </View>
    <View style={{marginTop:15}}>
    <DynamicText content="Frequently Bought Together" />
    <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {ArrivalscardData.map((item, index) => (
            <Card
              key={index} // Unique key for each card
              title={item.title}
              type={item.type}
              age={item.age}
              price={item.price}
              image={item.image}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </ScrollView>
    </View>
    <View style={{marginTop:15}}>
    <DynamicText content="Similar Products" />
    <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {ArrivalscardData.map((item, index) => (
            <Card
              key={index} // Unique key for each card
              title={item.title}
              type={item.type}
              age={item.age}
              price={item.price}
              image={item.image}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </ScrollView>
    </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.buyNowButton} onPress={() => console.log('Buy Now pressed')}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => console.log('Add to Cart pressed')}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
    paddingVertical: 10,
    paddingBottom:90
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
  discountedPrice: {
    fontSize: 14,
    color: COLORS.black,
    marginHorizontal: 5,
    fontFamily:FONTS.AvenirDemi
  },
  price: {
    fontSize: 14,
    color: COLORS.gray,
    marginHorizontal: 5,
    textDecorationLine: 'line-through',
    fontFamily:FONTS.AvenirDemi
  },
  discountContainer: {
    backgroundColor: COLORS.red,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    

  },
  discountText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily:FONTS.AvenirDemi
  },

  Header: {
    fontSize: 24,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirBold,
    marginVertical: 10,
  },
  heading: {
    fontSize: 16,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirDemi,
    marginTop: 20,
  },
  productDetails: {
    marginTop: 20,
    marginHorizontal:15
  },
  planterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    width: 250
  },
  planterButton: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: COLORS.MoodyBlue,
    borderWidth: 1
  },
  selectedButton: {
    backgroundColor: COLORS.primary,
    color: COLORS.white
  },
  planterButtonText: {
    color: COLORS.black,
    fontSize: 16,
  },
  selectedButtonText: {
    color: COLORS.white,
  },
  ageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: 300
  },
  ageButton: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  ageButtonText: {
    color: COLORS.black,
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 0
  },
  quantityButton: {
    paddingVertical: 2,
    paddingHorizontal: 0,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
    color: COLORS.HeadingColor,
    marginVertical: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 5,
  },
  headerText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily:FONTS.AvenirBold
  },
  content: {
    backgroundColor: COLORS.white,
    padding: 10,
    paddingHorizontal:5
  },
  contentText: {
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 24,
    fontFamily:FONTS.AvenirRegular,
    marginHorizontal:0
  },
  reviewcard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.bordercolor2,
    alignItems: 'flex-start',
    marginBottom: 8,
    marginVertical: 25
  },
  cardAvatar: {
    width: 80,
    height: 80,
    borderRadius: 25,
    position: 'absolute',
    bottom: "80%",
    right: "90%",
  },
  cardRightContent: {
    flex: 1, // Allows the right-side content to take up available space
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardName: {
    fontSize: 18,
    marginBottom: 4,
    left:70,
    color:COLORS.black,
    fontFamily:FONTS.AvenirMedium
  },
  cardRating: {
    flexDirection: "row",
    marginBottom: 8,
  },
  cardStar: {
    color: COLORS.startcolor,
    fontSize: 20,
  },
  cardDescription: {
    fontSize: 14,
    color:COLORS.header,
    fontFamily:FONTS.AvenirRegular,
    marginTop:10
  },
  accodionmargin:{
    marginVertical:20,
    marginHorizontal:15
  },
  accorioncontainer: {
    borderWidth: 1,
    borderColor: COLORS.bordercolor2,
    borderRadius: 5,
    marginVertical:10,
    marginHorizontal:15,
  },
  accodionmargincontainer:{
    marginVertical:5,
    paddingHorizontal:10,
  },
  accodionheader: {
    fontSize:16,
    color:COLORS.HeadingColor,
    fontFamily:FONTS.AvenirDemi
  },
  sharecontainer:{
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  scrollContainer: {
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 20
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0, // Add this to make sure it spans across the width
    right: 0, // Add this to ensure it stays across the full width of the screen
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.white,
    zIndex: 10,
  },
  buyNowButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  buyNowText: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily:FONTS.AvenirDemi
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    borderColor:'#7A7A7A'
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontFamily:FONTS.AvenirDemi
  },
});
