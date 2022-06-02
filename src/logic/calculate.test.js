import calculate from './calculate';

describe('Logic Tests', () => {
  test('1 + 1 should return total 2', () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };

    obj = calculate(obj, '1');
    obj = calculate(obj, '+');
    obj = calculate(obj, '1');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('2');
  });
  test('500 - 50 should return 450', () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };

    obj = calculate(obj, '5');
    obj = calculate(obj, '0');
    obj = calculate(obj, '0');
    obj = calculate(obj, '-');
    obj = calculate(obj, '5');
    obj = calculate(obj, '0');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('450');
  });
});
