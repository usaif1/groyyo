//dependencies
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//imports
import user from '../assets/user.png';

const DrawerHeader = ({navigation, route, options}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={user} style={styles.userImg} />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Icon name="search" size={15} />
        <TextInput placeholder="Search" style={styles.textInput} />
      </View>
      <View>
        <Icon name="comment" size={22} />
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 12,
  },
  userImg: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    width: '75%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#EEF3F8',
    borderRadius: 3,
  },
  textInput: {
    paddingBottom: 5.5,
    marginLeft: 2,
  },
});
