import calculate from './calculate';

describe('Logic Tests', () => {
  it('Should perform the calculations correctly', () => {
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
});
