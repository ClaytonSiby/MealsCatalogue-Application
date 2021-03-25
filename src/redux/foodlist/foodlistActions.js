import axios from 'axios';
import {
  FETCH_FOODLIST_REQUEST,
  FETCH_FOODLIST_SUCCESS,
  FETCH_FOODLIST_FAILURE,
} from './foodlistTypes';
import ENDPOINTS from '../baseAPIendPoints';

const FOODLISTDATAFETCH = (() => {
  const fetchFoodlistRequest = () => ({
    type: FETCH_FOODLIST_REQUEST,
  });

  const fetchFoodlistSuccess = (list) => ({
    type: FETCH_FOODLIST_SUCCESS,
    payload: list,
  });

  const fetchFoodlistFailure = (error) => ({
    type: FETCH_FOODLIST_FAILURE,
    payload: error,
  });

  const fetchFoodList = (category) => (dispatch) => {
    dispatch(fetchFoodlistRequest());
    axios
      .get(ENDPOINTS.categoryUrl(category), { mode: 'cors' })
      .then((response) => {
        dispatch(fetchFoodlistSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFoodlistFailure(error.message));
      });
  };

  return {
    fetchFoodList,
  };
})();

export default FOODLISTDATAFETCH;
