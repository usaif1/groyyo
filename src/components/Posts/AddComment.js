import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//imports
import {useApp} from '../../context/AppProvider';

const AddComment = ({setShow, id}) => {
  const {addComment} = useApp();

  const [comment, setComment] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShow(false)}
        style={{position: 'absolute', right: 20, top: 0}}>
        <Icon name="times" size={15} color="#FF583A" />
      </TouchableOpacity>
      <Image source={require('../../assets/user.png')} style={styles.img} />
      <TextInput
        placeholder="Leave your thoughts here"
        style={styles.input}
        placeholderTextColor="#808080"
        onChangeText={text => setComment(text)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!comment) {
            alert('Please enter some text');
            return;
          }
          addComment(comment, id);
          setComment('');
          setShow(false);
        }}>
        <Text>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddComment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 35,
    height: 35,
  },
  input: {
    width: '80%',
  },
});
