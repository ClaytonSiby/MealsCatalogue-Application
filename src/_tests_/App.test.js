import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../components/App';

const initialState = {
  categoriesData: { loading: false, categories: {}, error: '' },
  foodItem: { loading: false, food: {}, error: '' },
  foodlist: { loading: false, foodList: [], error: '' },
  itemDetails: { categoryName: '', foodId: '' },
};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('Tests for the App component', () => {
  it('Renders successfully to the DOM', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(test).toMatchSnapshot();
  });
});

export default store;
