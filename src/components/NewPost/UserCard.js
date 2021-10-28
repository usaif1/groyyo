import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const UserCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/user.png')}
        style={{width: 40, height: 40}}
      />
      <Text style={[styles.leftMargin, styles.bold]}>Saif Ullah</Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  leftMargin: {
    marginLeft: 10,
  },
  bold: {
    fontWeight: '600',
  },
});
