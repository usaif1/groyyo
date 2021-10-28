//dependencies
import React, {useReducer, useContext} from 'react';

//imports
import initialState from './state';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import user from '../assets/user.png';
import {LIKE_POST, ADD_COMMENT, ADD_NEW_POST} from '../actions/types';

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const likePost = id => {
    dispatch({
      type: LIKE_POST,
      payload: id,
    });
  };

  const addComment = (comment, id) => {
    dispatch({
      type: ADD_COMMENT,
      payload: {comment, id, user},
    });
  };

  const addPost = post => {
    const newPost = {
      id: Math.random(),
      owner: 'Saif',
      description: post,
      title: 'Software Developer, XYZ',
      time: '1h',
      img: user,
      likes: [],
      comments: [],
    };

    dispatch({
      type: ADD_NEW_POST,
      payload: newPost,
    });
  };

  return (
    <AppContext.Provider value={{...state, likePost, addComment, addPost}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useApp must be used within a AppProvider`);
  }
  return context;
};
