//imports
import {ADD_COMMENT, LIKE_POST} from '../actions/types';

const AppReducer = (state, action) => {
  switch (action.type) {
    case LIKE_POST:
      let element = state.posts.findIndex(post => action.payload === post.id);

      if (state.posts[element].likes.includes('saif')) {
        state.posts[element].likes.pop('saif');
      } else {
        state.posts[element].likes.push('saif');
      }

      return {
        ...state,
      };

    case ADD_COMMENT:
      const {comment, id, user} = action.payload;
      let element2 = state.posts.findIndex(post => id === post.id);

      state.posts[element2].comments.push({
        id:
          state.posts[element2].comments[
            state.posts[element2].comments.length - 1
          ].id + 1,
        by: 'Saif',
        title: 'Software Developer, XYZ',
        desc: comment,
        img: user,
      });

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default AppReducer;
