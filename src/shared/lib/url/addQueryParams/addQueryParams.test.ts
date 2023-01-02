import { getQueryParams } from '../addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('one param', () => {
    const params = getQueryParams({
      test: 'valueTest',
    });

    expect(params).toBe('?test=valueTest');
  });

  test('multiply params', () => {
    const params = getQueryParams({
      test: 'valueTest',
      test2: 'value2Test',
    });

    expect(params).toBe('?test=valueTest&test2=value2Test');
  });

  test('with undefined param', () => {
    const params = getQueryParams({
      test: 'valueTest',
      test2: undefined,
    });

    expect(params).toBe('?test=valueTest');
  });

  test('empty params', () => {
    const params = getQueryParams({});

    expect(params).toBe('?');
  });
});
