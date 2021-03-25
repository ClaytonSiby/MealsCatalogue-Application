import {
  FETCH_FOODLIST_REQUEST,
  FETCH_FOODLIST_SUCCESS,
  FETCH_FOODLIST_FAILURE,
} from './foodlistTypes';

const initialState = {
  loading: false,
  foodList: [],
  error: '',
};

const foodListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOODLIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_FOODLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        foodList: action.payload,
        error: '',
      };

    case FETCH_FOODLIST_FAILURE:
      return {
        ...state,
        loading: false,
        foodList: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default foodListReducer;
