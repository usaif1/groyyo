//dependencies
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//imports
import {HorizontalBreak} from '../common';
import Description from './Description';
import UserCard from './UserCard';
import UserCardFooter from './UserCardFooter';
import ActionFooter from './ActionFooter';
import Comments from './Comments';

const PostCard = ({post, setShow, show, setId}) => {
  const [comments, setComments] = useState(false);

  return (
    <View>
      <HorizontalBreak height={5} color="#F3E8E8" />
      <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
        <UserCard post={post} />
        <Description post={post} />
        <UserCardFooter
          post={post}
          setComments={setComments}
          comments={comments}
        />
        <HorizontalBreak height={1} color="#E1E1E1" />
        <ActionFooter post={post} setShow={setShow} show={show} setId={setId} />
      </View>
      {comments ? <Comments post={post} /> : null}
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
