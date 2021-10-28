//dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//imports
import {HorizontalBreak} from '../common';
import Description from './Description';
import UserCard from './UserCard';
import UserCardFooter from './UserCardFooter';
import ActionFooter from './ActionFooter';

const PostCard = ({post}) => {
  return (
    <View>
      <HorizontalBreak height={5} color="#F3E8E8" />
      <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
        <UserCard post={post} />
        <Description post={post} />
        <UserCardFooter post={post} />
        <HorizontalBreak height={1} color="#E1E1E1" />
        <ActionFooter post={post} />
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
