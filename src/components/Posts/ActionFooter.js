//dependencies
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//imports
import {useApp} from '../../context/AppProvider';

const ActionFooter = ({post, setShow, show, setId}) => {
  const {likePost} = useApp();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => likePost(post.id)}
        style={styles.alignCenter}>
        <Icon
          name="thumbs-up"
          size={15}
          color={post.likes.includes('saif') ? '#3698FF' : '#646464'}
          fill
        />
        <Text style={styles.smallText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
          setId(post.id);
        }}
        style={styles.alignCenter}>
        <Icon name="comment" size={15} color="#646464" fill />
        <Text style={styles.smallText}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alignCenter}>
        <Icon name="share" size={15} color="#646464" fill />
        <Text style={styles.smallText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alignCenter}>
        <Icon name="paper-plane" size={15} color="#646464" fill />
        <Text style={styles.smallText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionFooter;

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 10,
    marginTop: 3,
    color: 'black',
  },
});
