import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Comments = ({post}) => {
  return (
    <View style={{marginTop: 20}}>
      {post.comments.map(comment => {
        return (
          <View key={comment.id} style={styles.container}>
            <Image source={comment.img} style={styles.image} />
            <View style={styles.text}>
              <Text style={[styles.bold, styles.lgText]}>{comment.by}</Text>
              <Text style={[styles.desc, styles.smText, styles.bold]}>
                {comment.title}
              </Text>
              <Text style={[styles.desc, styles.mdText]}>{comment.desc}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    marginLeft: 10,
    backgroundColor: '#EDEDED',
    padding: 10,
    borderRadius: 8,
    width: '88%',
  },
  bold: {
    fontWeight: '600',
  },
  lgText: {
    fontSize: 16,
  },
  smText: {
    fontSize: 11,
  },
  mdText: {
    fontSize: 14,
  },
});
