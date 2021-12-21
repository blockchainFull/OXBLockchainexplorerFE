import {
  GET_LATEST_BLOCKS,
  BLOCK_ERROR,
  GET_BLOCK_DETAIL
} from '../actions/types';

const initialState = {
  blocks: [],
  block: null,
  blockdetail: {},
  loading: true,
  error: {}
};

function blockReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LATEST_BLOCKS:
      return {
        ...state,
        blocks: payload,
        loading: false
      };
    case BLOCK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

      case GET_BLOCK_DETAIL:
        return {
          ...state,
          blockdetail: payload,
          loading: false
        };
    
    default:
      return state;
  }
}

export default blockReducer;
