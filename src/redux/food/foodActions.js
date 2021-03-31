import axios from 'axios';
import {
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
} from './foodTypes';
import ENDPOINTS from '../baseAPIendPoints';

const FOODDATAFETCH = (() => {
  const fetchFoodRequest = () => ({
    type: FETCH_FOOD_REQUEST,
  });

  const fetchFoodSuccess = (food) => ({
    type: FETCH_FOOD_SUCCESS,
    payload: food,
  });

  const fetchFoodFailure = (error) => ({
    type: FETCH_FOOD_FAILURE,
    payload: error,
  });

  const foodRequest = (foodId) => (dispatch) => {
    dispatch(fetchFoodRequest());
    axios
      .get(ENDPOINTS.foodItemUrl(foodId))
      .then((response) => {
        dispatch(fetchFoodSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFoodFailure(error.message));
      });
  };

  return {
    foodRequest,
  };
})();

export default FOODDATAFETCH;
