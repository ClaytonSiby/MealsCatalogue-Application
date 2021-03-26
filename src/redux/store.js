import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const saveToLocalStorage = state => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('applicationData', serialisedState);
  } catch (error) {
    console.warn(error)
  }
}

const loadAppData = () => {
  try {
    const serialisedState = localStorage.getItem('applicationData');
    if(serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch(error) {
    console.warn(error)
    return undefined
  }
}

const store = createStore(
  rootReducer, loadAppData(),
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;
