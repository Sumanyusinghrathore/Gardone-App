import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PlusIcon from '../../assets/Icons/PlusVector.svg'
import { ACTIVE_OPACITY } from '../../themes/genericStyles';

type CardProps = {
  title: string;
  type: string;
  age: string;
  price: string;
  image: any;
  backgroundColor: string;
};

const Card: React.FC<CardProps> = ({ title, type, age, price, image, backgroundColor }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={styles.cardContent}>
        {/* Image on the left side */}
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} />
        </View>

        {/* Text content on the right side */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subText}>{type}</Text>
          <Text style={styles.subText}>{age}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        {/* Add button */}
        <TouchableOpacity style={styles.addButton} activeOpacity={ACTIVE_OPACITY}>
          <PlusIcon width={20} height={20} fill="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: 350, // Adjust width as per design
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 15, // Space between cards
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 5,
    height: 130,
  },
  cardContent: {
    flexDirection: 'row', // Align image and text side by side
    alignItems: 'center',
  },
  imageWrapper: {
    width: 100,
    height: 100,
    backgroundColor: '#fff', // White background for the image
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10, // Space between image and text
    marginVertical: 10
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1, // Take up remaining space
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'absolute',
    top: 80,          
    right: 10,
  },
});
