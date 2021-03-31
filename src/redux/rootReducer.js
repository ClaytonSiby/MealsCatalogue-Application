import { combineReducers } from 'redux'
import foodReducer from './food/foodReducer'
import categoriesReducer from './categories/categoriesReducer'
import foodListReducer from './foodlist/foodlistReducer'
import itemDetailsReducer from './itemDetailsReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['itemDetails']
}

const rootReducer = combineReducers({
  foodItem: foodReducer,
  categoriesData: categoriesReducer,
  foodlist: foodListReducer,
  itemDetails: itemDetailsReducer
})

export default persistReducer(persistConfig, rootReducer)
