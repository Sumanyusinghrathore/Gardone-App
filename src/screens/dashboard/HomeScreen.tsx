import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { COLORS, FONTS } from '../../themes/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from '../../assets/Icons/Search.svg';
import Mic from '../../assets/Icons/Mic.svg';
import HandIcon from '../../assets/Icons/Handicon.svg'
import Swiper from 'react-native-swiper';
import Card from '../../components/Arrivals&Sellers/Card';
import DynamicText from '../../components/CustomText/DynamicText';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import LinearGradient from 'react-native-linear-gradient';
const { width } = Dimensions.get('window');

const screenWidth = Dimensions.get('window').width;
const HomeScreen = () => {

  const [searchText, setSearchText] = useState('');
  const handleSearchInputChange = (text: string) => {
    setSearchText(text);
  };

  // Handle the search trigger (e.g., when Search icon is pressed)
  const handleSearch = () => {
    console.log('Search text:', searchText);
    // Add your search logic here (e.g., API call or filtering data)
  };
  const categories = [
    { id: '1', name: 'Indoor', image: require('../../assets/Images/Indoor.png') },
    { id: '2', name: 'Pots & Planter', image: require('../../assets/Images/Pots&Planter.png') },
    { id: '3', name: 'Fertilizers', image: require('../../assets/Images/Indoor.png') },
  ];

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


  const renderCategoryCard = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={[styles.categoryCard, { width: screenWidth * 0.4 }]}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );


  return (
    <ScrollView style={styles.container}>
      <View style={styles.verticalpadding}>
        <View style={styles.header}>
          <Image source={require('../../assets/Images/Profile.png')} style={styles.profileImage} />
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Welcome</Text>
            <View style={styles.gratingTextcontainer}>
              <Text style={styles.userName}>Sumanyu Singh Rathore</Text>
              <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                <HandIcon width={20} height={20} fill="#000" style={styles.handIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
            <FontAwesome name="bell" size={width * 0.06} color="black" style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <TouchableOpacity onPress={handleSearch} activeOpacity={ACTIVE_OPACITY}>
            <Search style={styles.searchIcon} />
          </TouchableOpacity>
          <TextInput
            onSubmitEditing={handleSearch}
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearchInputChange}

            placeholderTextColor={COLORS.primary}
          />
          <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
            <Mic style={styles.micIcon} />
          </TouchableOpacity>
        </View>

        <View>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={3}
            loop={true}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
          >
            <View style={styles.slide}>
              <Image source={require('../../assets/Images/Bannar.png')} style={styles.bannerimg} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../../assets/Images/Bannar.png')} style={styles.bannerimg} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../../assets/Images/Bannar.png')} style={styles.bannerimg} />
            </View>
          </Swiper>
        </View>
        <DynamicText content="Categories" />
        <FlatList
          data={categories}
          renderItem={renderCategoryCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          decelerationRate="fast"  // For smooth scrolling
        />
        <View style={styles.sectionHeader}>
          <DynamicText content="New Arrivals" />
          <TouchableOpacity style={styles.seeMoreButton} activeOpacity={ACTIVE_OPACITY}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
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
        <View style={styles.sectionHeader}>
          <DynamicText content="Best Sellers" />
          <TouchableOpacity style={styles.seeMoreButton} activeOpacity={ACTIVE_OPACITY}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
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
        <View style={styles.gradientcontainer}>
          <Image
            source={require('../../assets/Images/HealthyImage.png')}
            style={styles.image}
          />
          <LinearGradient
            colors={['rgba(24, 57, 42, 0)', 'rgba(24, 57, 42, 1)']} // Using the same color for a solid gradient from left to right
            start={{ x: 0, y: 0 }}  // Start from the left
            end={{ x: 1, y: 0 }}    // End at the right
            style={styles.gradient}
          >

            <View style={styles.textContainer}>
              <Text style={styles.text}>"Healthy plants thrive with our expert care and attention."</Text>
              <TouchableOpacity style={styles.knowmoreButton} activeOpacity={ACTIVE_OPACITY}>
            <Text style={styles.knowmoreText}>Know More</Text>
          </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View>
        <DynamicText content="Why Choose Us?" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  verticalpadding: {
    paddingVertical: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.04,
  },
  profileImage: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
  },
  greetingContainer: {
    flex: 1,
    marginLeft: width * 0.03,
  },
  gratingTextcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  greetingText: {
    fontSize: 20,
    color: COLORS.HeadingColor,
  },
  userName: {
    fontSize: 18,
    color: COLORS.HeadingColor,
  },
  handIcon: {
    marginHorizontal: 10
  },
  notificationIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginHorizontal: width * 0.04,
    borderRadius: width * 0.02,
    padding: width * 0.02,
    marginVertical: width * .03,
  },
  searchIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: width * 0.02,
  },
  searchInput: {
    flex: 1,
    marginLeft: 0,
    paddingVertical: 0,
    paddingHorizontal: 5,
    fontSize: 16,
    color: COLORS.primary
  },
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: COLORS.primary
  },
  micIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
  bannerimg: {
    height: '100%',
    objectFit: 'contain',
    width: 380
  },
  wrapper: {
    height: 200, // Adjust based on your design
  },
  dotStyle: {
    backgroundColor: COLORS.secondary, // Inactive dot color
    width: 20,
    height: 10,
    borderRadius: 4,
    margin: 3,
    top: 40
  },
  activeDotStyle: {
    backgroundColor: COLORS.primary, // Active dot color
    width: 30,
    height: 10,
    borderRadius: 6,
    margin: 3,
    top: 40
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  categoryList: {
    paddingVertical: 20,
  },
  categoryCard: {
    alignItems: 'center',
    height: 180,
    textAlign: 'center'
  },
  categoryImage: {
    height: 150, // Maintain aspect ratio for images
    borderRadius: width * 0.075,
    marginBottom: width * 0.02,
    objectFit: 'contain',
    width: '100%'
  },
  categoryText: {
    fontSize: width * 0.035,
    color: '#000',
  },
  scrollContainer: {
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 10
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 15,
  },
  seeMoreButton: {
    backgroundColor: COLORS.primary, // Button background color
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  seeMoreText: {
    fontSize: 12,
    color: '#fff', // Button text color
    fontWeight: '600',
  },
  gradientcontainer:{
    marginVertical: 120, 
    position: 'relative', 
    justifyContent: 'center',
    alignItems: 'flex-start', 
    marginHorizontal:10
  },
  gradient: {
    position: 'absolute', // Ensure gradient is positioned over the image
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',  // Align gradient to the left
    opacity: 0.7,
  },
  image: {
    width: '100%',
    height: 300, // Ensure the image covers the full gradient area
    resizeMode: 'contain',  // Ensure the image covers the gradient area without distortion
    position: 'absolute',
  },
  textContainer: {
    position: 'absolute',
    left: 0,  // Align text to the left
    width: '65%',  // Limit text width to the left half
    paddingLeft: 20,  // Add padding to the left edge of the container
    justifyContent: 'flex-start',  // Align text at the top
    zIndex: 1,  // Ensure the text is above the image and gradient
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.AvenirBold,
    marginBottom: 10,
  },
  knowmoreButton:{
    width:"60%",
    backgroundColor:COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  knowmoreText: {
    color: COLORS.HeadingColor,
    fontSize: 14,
    fontFamily:FONTS.AvenirBold
  },
});

export default HomeScreen;