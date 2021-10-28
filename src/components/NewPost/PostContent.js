import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const PostContent = ({post, setPost}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What do you want to talk about?"
        placeholderTextColor="#666666"
        onChangeText={text => setPost(text)}
      />
    </View>
  );
};

export default PostContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  input: {
    color: 'black',
    fontSize: 18,
  },
});
