import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import NavigationBar from '../containers/NavigationBar';
import store from './App.test';

describe('Testing the NavigationBar  component', () => {
  it('Renders successfully to the DOM', () => {
    render(
      <Provider store={store}>
        <NavigationBar />
      </Provider>,
    );
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer
      .create(
        <Provider store={store}>
          <NavigationBar />
        </Provider>,
      )
      .toJSON();
    expect(test).toMatchSnapshot();
  });
});
