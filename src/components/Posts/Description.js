import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Description = ({post}) => {
  return <Text style={styles.description}>{post.description}</Text>;
};

export default Description;

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});
