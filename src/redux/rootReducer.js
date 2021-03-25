import { combineReducers } from 'redux';
import foodReducer from './food/foodReducer';
import categoriesReducer from './categories/categoriesReducer';
import foodListReducer from './foodlist/foodlistReducer';

const rootReducer = combineReducers({
  food: foodReducer,
  categoriesData: categoriesReducer,
  foodlist: foodListReducer,
});

export default rootReducer;
