import operater from './operate';

describe('Operater Test', () => {
  test('1 + 1 should return 2', () => {
    const total = operater(1, 1, '+');
    expect(total).toEqual('2');
  });
  test('50 x 10 should return 500', () => {
    const total = operater(50, 10, 'x');
    expect(total).toEqual('500');
  });
});
