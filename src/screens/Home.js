//dependencies
import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//imports
import PostCard from '../components/Posts/PostCard';
import user from '../assets/user.png';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 0,
      owner: 'Saif',
      description:
        'This is a my first post. sadjahsdjaadjaskdjasljdashudhnaskdfhasjkdfhjsfhasduihfasd',
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: 100,
      comments: [
        {
          id: 0,
          by: 'Ankit',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Rajat',
          desc: 'very informative',
        },
      ],
    },
    {
      id: 1,
      owner: 'Ankit',
      description: 'This is a my Second post',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: 1200,
      comments: [
        {
          id: 0,
          by: 'Saif',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Alind',
          desc: 'very informative',
        },
      ],
    },
    {
      id: 2,
      owner: 'Saif',
      description:
        'This is a my first post. sadjahsdjaadjaskdjasljdashudhnaskdfhasjkdfhjsfhasduihfasd',
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: 100,
      comments: [
        {
          id: 0,
          by: 'Ankit',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Rajat',
          desc: 'very informative',
        },
      ],
    },
    {
      id: 3,
      owner: 'Ankit',
      description: 'This is a my Second post',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: 200,
      comments: [
        {
          id: 0,
          by: 'Saif',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Alind',
          desc: 'very informative',
        },
      ],
    },
    {
      id: 4,
      owner: 'Saif',
      description:
        'This is a my first post. sadjahsdjaadjaskdjasljdashudhnaskdfhasjkdfhjsfhasduihfasd',
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: 450,
      comments: [
        {
          id: 0,
          by: 'Ankit',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Rajat',
          desc: 'very informative',
        },
      ],
    },
    {
      id: 5,
      owner: 'Ankit',
      description: 'This is a my Second post',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: 289,
      comments: [
        {
          id: 0,
          by: 'Saif',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Alind',
          desc: 'very informative',
        },
      ],
    },
    {
      id: 6,
      owner: 'Ankit',
      description: 'This is a my Second post',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: 420,
      comments: [
        {
          id: 0,
          by: 'Saif',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Alind',
          desc: 'very informative',
        },
      ],
    },
    {
      id: 7,
      owner: 'Saif',
      description:
        'This is a my first post. sadjahsdjaadjaskdjasljdashudhnaskdfhasjkdfhjsfhasduihfasd',
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: 700,
      comments: [
        {
          id: 0,
          by: 'Ankit',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Rajat',
          desc: 'very informative',
        },
      ],
    },
    {
      id: 8,
      owner: 'Ankit',
      description: 'This is a my Second post',
      title: 'Software Developer, XYZ',
      time: '2h',
      img: user,
      likes: 820,
      comments: [
        {
          id: 0,
          by: 'Saif',
          desc: 'good post',
        },
        {
          id: 1,
          by: 'Alind',
          desc: 'very informative',
        },
      ],
    },
  ]);

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
