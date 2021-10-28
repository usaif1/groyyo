import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import user from '../assets/user.png';

const DrawerHeader = ({navigation, route, options}) => {
  console.log(navigation);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 12,
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={user} style={{width: 30, height: 30}} />
      </TouchableOpacity>
      <View
        style={{
          width: '75%',
          height: 30,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
          backgroundColor: '#EEF3F8',
          borderRadius: 3,
        }}>
        <Icon name="search" size={15} />
        <TextInput
          placeholder="Search"
          style={{paddingBottom: 5, marginLeft: 2}}
        />
      </View>
      <View>
        <Icon name="comment" size={22} />
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({});
