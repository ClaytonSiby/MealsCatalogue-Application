import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import foodReducer from './food/foodReducer';
import categoriesReducer from './categories/categoriesReducer';
import foodListReducer from './foodlist/foodlistReducer';
import itemDetailsReducer from './itemDetailsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['itemDetails'],
};

const rootReducer = combineReducers({
  foodItem: foodReducer,
  categoriesData: categoriesReducer,
  foodlist: foodListReducer,
  itemDetails: itemDetailsReducer,
});

export default persistReducer(persistConfig, rootReducer);
