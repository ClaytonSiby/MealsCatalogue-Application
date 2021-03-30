import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from '../Pages/About';

describe('Testing the About component', () => {
  it('Renders successfully to the DOM', () => {
    render(<About />);
  });

  test('renders output consistently to the DOM', () => {
    const test = renderer.create(<About />).toJSON();
    expect(test).toMatchSnapshot();
  });
});
