//dependencies
import React, {useReducer, useContext} from 'react';

//imports
import initialState from './state';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import {LIKE_POST, ADD_COMMENT} from '../actions/types';

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const likePost = id => {
    dispatch({
      type: LIKE_POST,
      payload: id,
    });
  };

  const addComment = (comment, id) => {
    console.log('fired');

    dispatch({
      type: ADD_COMMENT,
      payload: {comment, id},
    });
  };

  return (
    <AppContext.Provider value={{...state, likePost, addComment}}>
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
