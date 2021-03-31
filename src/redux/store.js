import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    return localStorage.setItem('applicationData', serialisedState);
  } catch (error) {
    return error;
  }
};

const loadAppData = () => {
  try {
    const serialisedState = localStorage.getItem('applicationData');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (error) {
    return error;
  }
};

const store = createStore(
  rootReducer, loadAppData(),
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
