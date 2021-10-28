//dependencies
import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//imports
import PostCard from '../components/Posts/PostCard';
import {useApp} from '../context/AppProvider';
import AddComment from '../components/Posts/AddComment';

const Home = () => {
  const {posts} = useApp();

  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView>
        {posts.map(post => {
          return (
            <PostCard
              key={post.id}
              post={post}
              setShow={setShow}
              show={show}
              setId={setId}
            />
          );
        })}
      </ScrollView>
      {show ? <AddComment setShow={setShow} id={id} /> : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
