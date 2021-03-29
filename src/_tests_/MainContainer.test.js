import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MainContainer from '../containers/MainContainer';
import store from './App.test';

describe('Testing the MainContainer  component', () => {
  it('Renders successfully to the DOM', () => {
    render(
      <Provider store={store}>
        <MainContainer />
      </Provider>,
    );
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer
      .create(
        <Provider store={store}>
          <MainContainer />
        </Provider>,
      )
      .toJSON();
    expect(test).toMatchSnapshot();
  });
});
