//dependencies
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//imports
import PostCard from '../components/Posts/PostCard';
import {useApp} from '../context/AppProvider';

const Home = () => {
  const {posts} = useApp();

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView>
        {posts.map(post => {
          return <PostCard key={post.id} post={post} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
