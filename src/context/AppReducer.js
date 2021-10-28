//imports
import {LIKE_POST} from '../actions/types';

const AppReducer = (state, action) => {
  switch (action.type) {
    case LIKE_POST:
      const element = state.posts.findIndex(post => action.payload === post.id);

      if (state.posts[element].likes.includes('saif')) {
        state.posts[element].likes.pop('saif');
      } else {
        state.posts[element].likes.push('saif');
      }

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default AppReducer;
