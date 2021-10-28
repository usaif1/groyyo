import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
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
        padding: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={user} style={{width: 35, height: 35}} />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({});
