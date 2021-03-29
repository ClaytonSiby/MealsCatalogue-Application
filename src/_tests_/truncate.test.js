import truncate from '../helpers/truncate';

describe('Tests for the truncate helper method', () => {
  test('Truncates the string length to match the integer parameter', () => {
    const string = 'mystring value';
    expect(truncate(string, 6)).toEqual('mystri. . .');
  });
});
