import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../themes/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from '../../assets/Icons/Search.svg';
import Mic from '../../assets/Icons/Mic.svg';
import HandIcon from '../../assets/Icons/Handicon.svg'
import Swiper from 'react-native-swiper';
import Card from '../../components/Arrivals&Sellers/Card';
import DynamicText from '../../components/CustomText/DynamicText';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Icon Images
import PackageIcon from '../../assets/Icons/Secure&Recyclable_Packaging.svg';
import ReplacementIcon from '../../assets/Icons/FreeReplacement.svg';
import PlantIcon from '../../assets/Icons/Chemical_Free_Plants.svg';
import WateringIcon from '../../assets/Icons/Self-Watering-Pots.svg';
import Rightcommas from '../../assets/Icons/Right-commas.svg';
import Leftcommas from '../../assets/Icons/Left-commas.svg';

const { width } = Dimensions.get('window');

const screenWidth = Dimensions.get('window').width;
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types'; // Adjust the import path as necessary
import { LinearGradientText } from 'react-native-linear-gradient-text';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [searchText, setSearchText] = useState('');
  const handleSearchInputChange = (text: string) => {
    setSearchText(text);
  };
  const handleSearch = () => {
    navigation.navigate("Search", { name: "Search" });
    console.log('Search text:', searchText);
  };
  const categories = [
    { id: '1', name: 'Indoor', image: require('../../assets/Images/Indoor.png') },
    { id: '2', name: 'Pots & Planter', image: require('../../assets/Images/Pots&Planter.png') },
    { id: '3', name: 'Fertilizers', image: require('../../assets/Images/Fertilizers.png') },
    { id: '4', name: 'Soil', image: require('../../assets/Images/Soil.png') },
    { id: '5', name: 'Seeds', image: require('../../assets/Images/Seeds.png') },
    { id: '6', name: 'Tools', image: require('../../assets/Images/Tools.png') },
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

  const testimonials = [
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet consectetur. Etiam tellus auctor posuere et sit faucibus convallis libero ut. ',
      author: 'Jaivardhan Singh',
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet consectetur. Etiam tellus auctor posuere et sit faucibus convallis libero ut.',
      author: 'Sumanyu Singh Rathore',
    },
    {
      id: '3',
      text: 'Lorem ipsum dolor sit amet consectetur. Etiam tellus auctor posuere et sit faucibus convallis libero ut.',
      author: 'Abbas',
    },
  ];


  const renderCategoryCard = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Categorie', { name: item.name })
      }
      activeOpacity={ACTIVE_OPACITY}
      style={[styles.categoryCard, { width: screenWidth * 0.4 }]}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );


  return (
    <ScrollView style={styles.container}>
      <View style={styles.verticalpadding}>
        <View style={styles.header}>
          <Image source={require('../../assets/Images/Profile.jpg')} style={styles.profileImage} />
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Welcome</Text>
            <View style={styles.gratingTextcontainer}>
              <Text style={styles.userName} numberOfLines={2} ellipsizeMode="tail">
                Sumanyu Singh
                <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={() => navigation.navigate("Profile")}>
                  <HandIcon width={20} height={20} fill="#000" style={styles.handIcon} />
                </TouchableOpacity>
              </Text>

            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Notifications")} activeOpacity={ACTIVE_OPACITY}>
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
            placeholder="Search"
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
          <TouchableOpacity onPress={() => { navigation.navigate("Arrivals", { name: "New Arrivals" }) }} style={styles.seeMoreButton} activeOpacity={ACTIVE_OPACITY}>
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
          <TouchableOpacity onPress={() => { navigation.navigate("Arrivals", { name: "Best Sellers" }) }} style={styles.seeMoreButton} activeOpacity={ACTIVE_OPACITY}>
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

            <View style={styles.overlaptextContainer}>
              <Text style={styles.overlaptext}>"Healthy plants thrive with our expert care and attention."</Text>
              <TouchableOpacity style={styles.overlapknowmoreButton} activeOpacity={ACTIVE_OPACITY}>
                <Text style={styles.overlapknowmoreText}>Know More</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View>
          <DynamicText content="Why Choose Us? " />
          <View style={styles.features}>
            <View style={styles.featureItem}>
              <PackageIcon width={60} height={60} />
              <Text style={styles.featureText}>Secure & Recyclable Packaging</Text>
            </View>

            <View style={styles.featureItem}>
              <ReplacementIcon width={60} height={60} />
              <Text style={styles.featureText}>Free Replacement If Damage</Text>
            </View>
            <View style={styles.featureItem}>
              <PlantIcon width={60} height={60} />
              <Text style={styles.featureText}>Chemical Free Plants</Text>
            </View>

            <View style={styles.featureItem}>
              <WateringIcon width={60} height={60} />
              <Text style={styles.featureText}>Self-Watering Pots With Every Plant</Text>
            </View>
          </View>
        </View>
        <View>
          <DynamicText content="Testimonials" />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={testimonials}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <LinearGradient
                colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
                style={styles.testimonialBorder}
              >
                <View style={styles.testimonial}>
                  <Leftcommas width={20} height={20} style={styles.leftComma} />
                  <Text style={styles.testimonialText}>{item.text}</Text>
                  <Rightcommas width={20} height={20} style={styles.rightComma} />
                  <View style={styles.authorContainer}>
                    <LinearGradientText
                      colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
                      text={item.author}
                      start={{ x: 0.5, y: 0 }}  // Start at the top center
                      end={{ x: 0.5, y: 1 }}
                      textStyle={styles.testimonialAuthor}
                      textProps={{ allowFontScaling: true }}
                    />
                  </View>
                </View>
              </LinearGradient>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
  },
  verticalpadding: {
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.04,
    paddingTop: 50
  },
  profileImage: {
    width: width * 0.15,
    height: width * 0.15,
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
    flexWrap: 'wrap',
  },
  greetingText: {
    fontSize: 18,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirBold
  },
  userName: {
    fontSize: 18,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirRegular,
    maxWidth: '80%',
    flexShrink: 1,
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
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,

  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 0,
    paddingVertical: 0,
    paddingHorizontal: 5,
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: FONTS.AvenirRegular
  },
  searchText: {
    fontSize: 18,
    marginVertical: 10,
    color: COLORS.primary,
    fontFamily: FONTS.AvenirRegular
  },
  micIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
  bannerimg: {
    height: '100%',
    width: '90%',
    objectFit: 'contain',
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
    height: "100%",
    marginHorizontal: 0,
  },
  categoryImage: {
    height: 190, // Maintain aspect ratio for images
    objectFit: 'contain',
    width: '90%',
  },
  categoryText: {
    fontSize: 18,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirDemi
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
    fontSize: 14,
    color: COLORS.white, // Button text color
    fontFamily: FONTS.AvenirDemi
  },
  gradientcontainer: {
    marginVertical: 120,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 10
  },
  gradient: {
    position: 'absolute', // Ensure gradient is positioned over the image
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',  // Align gradient to the left
  },
  image: {
    width: '100%',
    height: 300, // Ensure the image covers the full gradient area
    resizeMode: 'contain',  // Ensure the image covers the gradient area without distortion
    position: 'absolute',
  },
  overlaptextContainer: {
    position: 'absolute',
    left: 0,  // Align text to the left
    width: '70%',  // Limit text width to the left half
    paddingLeft: 20,  // Add padding to the left edge of the container
    justifyContent: 'flex-start',  // Align text at the top
    zIndex: 1,  // Ensure the text is above the image and gradient
    flexDirection: 'column',
  },
  overlaptext: {
    fontSize: SIZES.h3,
    color: COLORS.white,
    fontFamily: FONTS.AvenirBold,
    marginBottom: 10,
  },
  overlapknowmoreButton: {
    width: "60%",
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    opacity: 10
  },
  overlapknowmoreText: {
    color: COLORS.HeadingColor,
    fontSize: 14,
    fontFamily: FONTS.AvenirBold
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20
  },
  featureItem: {
    width: width / 2 - 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  featureText: {
    fontSize: 12,
    color: COLORS.HeadingColor,
    marginLeft: 10,
    marginHorizontal: 35,
    fontFamily: FONTS.AvenirRegular,
  },
  testimonialBorder: {
    borderRadius: 10,
    marginRight: 20,
    padding: 2,
    marginVertical: 10,
    marginLeft: 10
  },
  testimonial: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 30,
    alignItems: 'center',
    width: width * 0.8,
    flex: 1, // Allows the content to expand and fill the available space
    justifyContent: 'center', // Ensures content stays centered
    minHeight: 100, // Ensures a minimum height to avoid collapsing for smaller text
  },
  testimonialText: {
    fontSize: 16,
    color: COLORS.HeadingColor,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: FONTS.AvenirRegular
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // this keeps text and author centered on the same line
  },
  testimonialAuthor: {
    fontSize: 14,
    fontFamily: FONTS.AvenirBold
  },
  leftComma: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  rightComma: {
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
});

export default HomeScreen;