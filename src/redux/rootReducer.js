import { combineReducers } from 'redux';
import foodReducer from './food/foodReducer';
import categoriesReducer from './categories/categoriesReducer';
import foodListReducer from './foodlist/foodlistReducer';
import itemDetailsReducer from './itemDetailsReducer';

const rootReducer = combineReducers({
  food: foodReducer,
  categoriesData: categoriesReducer,
  foodlist: foodListReducer,
  itemDetails: itemDetailsReducer
});

export default rootReducer;
