import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const UserCard = ({post}) => {
  return (
    <View style={[styles.container, styles.justifyBetween]}>
      <View style={styles.container}>
        <Image source={post.img} style={styles.profileImg} />
        <View style={{marginLeft: 10}}>
          <Text style={[styles.largeText, styles.bold]}>{post.owner}</Text>
          <Text style={styles.smallText}>{post.title}</Text>
          <Text style={styles.smallText}>{post.time}</Text>
        </View>
      </View>
      <Text style={[styles.follow, styles.largeText, styles.bold]}>
        + Follow
      </Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  profileImg: {
    width: 45,
    height: 45,
  },
  bold: {
    fontWeight: '600',
  },
  smallText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 16,
  },
  follow: {
    color: '#4C83F9',
  },
});
