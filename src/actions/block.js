import api from '../utils/api';
import {
  GET_LATEST_BLOCKS,
  BLOCK_ERROR,
  GET_BLOCK_DETAIL,
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Get Latest Blocks
export const getLatestBlocks = () => async (dispatch) => {
  try {
    const res = await api.get('/oxchains/latestBlocks');
    dispatch({
      type: GET_LATEST_BLOCKS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BLOCK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//get blockdetail by hash
export const getBlockDetail = (blocknumber) => async (dispatch) => {
  try {
    const res = await api.get(`/oxchains/getBlock/${blocknumber}`);
    dispatch({
      type: GET_BLOCK_DETAIL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BLOCK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
