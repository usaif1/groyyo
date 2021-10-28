import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ActionFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.alignCenter}>
        <Icon name="thumbs-up" size={15} color="#646464" fill />
        <Text style={styles.smallText}>Like</Text>
      </View>
      <View style={styles.alignCenter}>
        <Icon name="comment" size={15} color="#646464" fill />
        <Text style={styles.smallText}>Comment</Text>
      </View>
      <View style={styles.alignCenter}>
        <Icon name="share" size={15} color="#646464" fill />
        <Text style={styles.smallText}>Share</Text>
      </View>
      <View style={styles.alignCenter}>
        <Icon name="paper-plane" size={15} color="#646464" fill />
        <Text style={styles.smallText}>Send</Text>
      </View>
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
  },
  smallText: {
    fontSize: 10,
    marginTop: 3,
  },
});
