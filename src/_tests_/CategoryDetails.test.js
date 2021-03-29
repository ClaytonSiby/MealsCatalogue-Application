import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './App.test';
import CategoryDetails from '../components/CategoryDetails';

describe('Testing the CategoryDetails component', () => {
  it('Renders successfully to the DOM', () => {
    render(
      <Provider store={store}>
        <CategoryDetails />
      </Provider>,
    );
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer
      .create(
        <Provider store={store}>
          <CategoryDetails />
        </Provider>,
      )
      .toJSON();
    expect(test).toMatchSnapshot();
  });
});
