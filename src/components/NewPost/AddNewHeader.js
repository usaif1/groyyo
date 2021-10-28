//dependencies
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//imports
import {useApp} from '../../context/AppProvider';

const AddNewHeader = ({post, navigation, setPost}) => {
  const {addPost} = useApp();

  const addNewPost = () => {
    if (!post) {
      alert('Post cannot be empty!');
      return;
    }

    addPost(post);
    setPost('');
    navigation.goBack();
  };

  return (
    <View style={[styles.container, styles.padded, styles.justifyBetween]}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="times" size={25} color="#5D5D5D" />
        </TouchableOpacity>
        <Text style={styles.heading}>Share Post</Text>
      </View>
      <TouchableOpacity onPress={addNewPost}>
        <Text style={styles.smText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 10,
  },
  padded: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  heading: {
    fontSize: 20,
    marginLeft: 15,
    fontWeight: '600',
    color: 'black',
  },
  smText: {
    fontSize: 18,
    color: 'black',
  },
});
