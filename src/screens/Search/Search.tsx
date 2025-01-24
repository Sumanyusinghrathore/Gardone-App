import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import Mic from '../../assets/Icons/Mic.svg';
import Searchicon from '../../assets/Icons/Search.svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import Collapsible from 'react-native-collapsible';
import { Divider } from '@rneui/themed';
import Rightarrow from '../../assets/Icons/Rightarrow.svg';
import Downarrow from '../../assets/Icons/Downarrow.svg';

const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
type NavigationProp = StackNavigationProp<RootStackParamList>;

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<null | number>(null);
  const navigation = useNavigation<NavigationProp>();

  const toggleAccordion = (index: number) => {
    setActiveAccordion(prev => (prev === index ? null : index));
  };

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
      title: 'Aloe Vera',
      type: 'Indoor',
      age: '2 Years',
      price: '₹ 30.00',
      image: require('../../assets/Images/Houseplant.png'),
      backgroundColor: '#3a6e3a',
    },
    {
      title: 'Aloe Vera',
      type: 'Indoor',
      age: '2 Years',
      price: '₹ 30.00',
      image: require('../../assets/Images/Houseplant.png'),
      backgroundColor: '#3a6e3a',
    },
    {
      title: 'Aloe Vera',
      type: 'Indoor',
      age: '2 Years',
      price: '₹ 30.00',
      image: require('../../assets/Images/Houseplant.png'),
      backgroundColor: '#3a6e3a',
    },
    {
      title: 'Aloe Vera',
      type: 'Indoor',
      age: '2 Years',
      price: '₹ 30.00',
      image: require('../../assets/Images/Houseplant.png'),
      backgroundColor: '#3a6e3a',
    },
  ];

  const filteredData = ArrivalscardData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity
          onPress={() => console.log('Search text:', searchText)}
          activeOpacity={ACTIVE_OPACITY}
          accessible
          accessibilityLabel="Search Button"
        >
          <Searchicon style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholderTextColor={COLORS.primary}
        />
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          accessible
          accessibilityLabel="Mic Button"
        >
          <Mic style={styles.micIcon} />
        </TouchableOpacity>
      </View>
      {/* Accordion 1 */}
      <View style={styles.accodionmargin}>
          <TouchableOpacity
            onPress={() => toggleAccordion(1)}
            style={styles.header}
          >
            <Text style={styles.headerText}>Indoor Plants</Text>
            <View>{activeAccordion === 1 ? <Downarrow width={30} height={30} /> : <Rightarrow width={25} height={25} />}
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
            <Text style={styles.headerText}>Ceramic Pots </Text>
            <View>{activeAccordion === 2 ? <Downarrow width={25} height={25} /> : <Rightarrow width={25} height={25} />}
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={activeAccordion !== 2}>
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
            onPress={() => toggleAccordion(3)}
            style={styles.header}
          >
            <Text style={styles.headerText}>Large Plants </Text>
            <View>{activeAccordion === 3 ? <Downarrow width={25} height={25} /> : <Rightarrow width={25} height={25} />}
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={activeAccordion !== 3}>
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
      <View>
      <FlatList
        data={filteredData}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            style={[
              styles.cardContainer,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <View style={styles.cardContent}>
              {/* Image */}
              <View style={styles.imageWrapper}>
                <Image source={item.image} style={styles.image} />
              </View>
              {/* Text content */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subText}>{item.type}</Text>
                <Text style={styles.subText}>{item.age}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              {/* Add button */}
              <TouchableOpacity
                style={styles.addButton}
                activeOpacity={ACTIVE_OPACITY}
                onPress={()=> {navigation.navigate("ProductDetail", { name: "Product Details" })}}
              >
                <Text style={styles.text}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 15,
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
    marginVertical: 15,
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
    width: '40%',
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 10,
    zIndex: 0,
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: COLORS.primary,
    textAlign: 'center',
    fontFamily: FONTS.AvenirDemi,
  },
  accodionmargin:{
    marginVertical:20,
    marginHorizontal:15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 5,
  },
  headerText: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily:FONTS.AvenirRegular
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
});
