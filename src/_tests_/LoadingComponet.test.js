import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LoadingComponent from '../Pages/LoadingComponent';

describe('Testing the LoadingComponent', () => {
  it('Renders successfully to the DOM', () => {
    render(<LoadingComponent type="bars" color="yellow" />);
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer.create(<LoadingComponent type="bars" color="yellow" />).toJSON();
    expect(test).toMatchSnapshot();
  });
});
