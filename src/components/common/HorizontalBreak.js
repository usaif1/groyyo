import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HorizontalBreak = ({height, color}) => {
  return (
    <View
      style={{width: '100%', height: height, backgroundColor: color}}></View>
  );
};

export default HorizontalBreak;

const styles = StyleSheet.create({});
