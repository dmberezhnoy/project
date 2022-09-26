import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'className';
    expect(classNames('className')).toBe(expected);
  });

  test('with additional class', () => {
    const expected = 'className class1 class2';
    expect(classNames('className', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'className hovered';
    expect(classNames(
      'className',
      { hovered: true },
    )).toBe(expected);
  });

  test('with all params', () => {
    const expected = 'className class1 class2 scrollable';
    expect(classNames(
      'className',
      { hovered: false, scrollable: true },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});
