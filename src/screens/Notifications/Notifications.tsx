import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed';
import { COLORS, FONTS } from '../../themes/theme';


const notificationsData = [
  {
    id: '1',
    title: 'Order Confirmation',
    time: '2 mins ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a scelerisque neque, sed accumsan metus.'
  },
  {
    id: '2',
    title: 'Delivery Status',
    time: '2 mins ago',
    content: 'Dispatched'
  },
  {
    id: '3',
    title: 'Seasonal Recommendations',
    time: '2 mins ago',
    content: ''
  }
];

const Notification = ({ title, time, content }: { title: string, time: string, content: string }) => (
    <View>
      <View style={styles.notificationHeader}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationTime}>{time}</Text>
      </View>
      {/* Conditionally render content if it's not empty */}
      {content ? (
        <Text style={styles.notificationContent}>{content}</Text>
      ) : null}
      <Divider style={styles.dividercontainer} />
    </View>
  );
  

const Notifications = () => {
  return (
    <View style={styles.notificationContainer}>
      <FlatList
        data={notificationsData}
        renderItem={({ item }) => (
          <Notification 
            title={item.title} 
            time={item.time} 
            content={item.content} 
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  notificationContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,  // Ensure the container fills available space
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  notificationTitle: {
    fontSize: 16,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirBold,
  },
  notificationTime: {
    fontSize: 12,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirRegular,
  },
  notificationContent: {
    fontSize: 14,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirRegular,
    marginVertical: 5,
    flexWrap: 'wrap',  // Ensure content wraps to the next line if it's too long
    width: '100%', // Let content take full width
  },
  dividercontainer: {
    borderColor: COLORS.MoodyBlue,
    borderWidth: 1,
    marginVertical: 10,
  }
});
