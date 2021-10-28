//dependencies
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

//imports
import AddNewHeader from '../components/NewPost/AddNewHeader';
import UserCard from '../components/NewPost/UserCard';
import PostContent from '../components/NewPost/PostContent';

const Post = ({navigation}) => {
  const [post, setPost] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <AddNewHeader post={post} navigation={navigation} />
      <UserCard />
      <PostContent post={post} setPost={setPost} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
