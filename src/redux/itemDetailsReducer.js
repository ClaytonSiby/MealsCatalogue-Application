const CHANGE_CATEGORY_NAME = 'CHANGE_CATEGORY_NAME';
const CHANGE_FOOD_ID = 'GET_FOOD_ID';

export const changeCategoryName = (name) => ({
  type: CHANGE_CATEGORY_NAME,
  payload: name,
});

export const changeFoodId = (foodId) => ({
  type: CHANGE_FOOD_ID,
  payload: foodId,
});

const initialState = {
  categoryName: '',
  foodId: '',
};

const itemDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.payload,
      };
    case CHANGE_FOOD_ID:
      return {
        ...state,
        foodId: action.payload,
      };
    default:
      return state;
  }
};

export default itemDetailsReducer;
