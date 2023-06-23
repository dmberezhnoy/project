import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';

import { ComponentRender } from '@/shared/lib/tests/ComponentRender';

import { Counter } from './Counter';

describe('Counter', () => {
  test('render value', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('5');
  });

  test('increment', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('5');
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('6');
  });

  test('decrement', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('5');
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('4');
  });
});
