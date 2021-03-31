import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './App.test';
import FoodDetails from '../components/FoodDetails';

describe('Tests for the FoodDetails component', () => {
  it('Renders successfully to the DOM', () => {
    render(
      <Provider store={store}>
        <FoodDetails />
      </Provider>,
    );
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer
      .create(
        <Provider store={store}>
          <FoodDetails />
        </Provider>,
      )
      .toJSON();
    expect(test).toMatchSnapshot();
  });
});
