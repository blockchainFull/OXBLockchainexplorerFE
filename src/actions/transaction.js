import api from '../utils/api';
import {
  GET_LATEST_TRANSACTIONS,
  TRANSACTION_ERROR,
  GET_TRANS_DETAIL,
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Get Latest Blocks
export const getLatestTransactions = () => async (dispatch) => {
  try {
    const res = await api.get('/oxchains/latestTransactions');
    dispatch({
      type: GET_LATEST_TRANSACTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getTransDetail = (transhash) => async (dispatch) => {
  try {
    const res = await api.get(`/oxchains/getTrans/${transhash}`);
    console.log(res);
    dispatch({
      type: GET_TRANS_DETAIL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

