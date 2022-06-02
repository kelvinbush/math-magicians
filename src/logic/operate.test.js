import operate from './operate';

describe('Operate Test', () => {
  test('1 + 1 should return 2', () => {
    const total = operate(1, 1, '+');
    expect(total).toEqual('2');
  });
  test('50 x 10 should return 500', () => {
    const total = operate(50, 10, 'x');
    expect(total).toEqual('500');
  });
  test('50 - 10 should return 40', () => {
    const total = operate(50, 10, '-');
    expect(total).toEqual('40');
  });
  test('50 ÷ 10 should return 5', () => {
    const total = operate(50, 10, '÷');
    expect(total).toEqual('5');
  });
});
