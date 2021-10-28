import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

//imports
import like from '../../assets/like.png';
import love from '../../assets/love.png';
import celebrate from '../../assets/celebrate.png';

const UserCardFooter = ({post, setComments, comments}) => {
  return (
    <View
      style={[
        styles.container,
        styles.justifyBetween,
        styles.topMargin,
        styles.bottomMargin,
      ]}>
      <View style={styles.container}>
        <Image source={like} style={styles.icon} />
        <Image source={love} style={[styles.icon, styles.leftMargin]} />
        <Image source={celebrate} style={[styles.icon, styles.leftMargin]} />
        <Text style={[styles.comments, styles.leftMargin]}>
          {post.likes.length} likes
        </Text>
      </View>
      <TouchableOpacity onPress={() => setComments(!comments)}>
        <Text style={styles.comments}>{post.comments.length} Comments</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserCardFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 3,
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  icon: {
    width: 13,
    height: 13,
  },
  comments: {
    fontSize: 12,
    color: '#3C3C3C',
  },
  leftMargin: {
    marginLeft: 5,
  },
  topMargin: {
    marginTop: 20,
  },
  bottomMargin: {
    marginBottom: 10,
  },
});
