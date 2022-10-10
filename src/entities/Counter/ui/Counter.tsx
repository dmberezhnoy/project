import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'shared/ui/Button/Button';

import { getCounterValue } from '../model/selectors';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: React.FC = () => {
  const { t } = useTranslation();

  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h2 data-testid="value-title">{counterValue}</h2>
      <Button onClick={increment} data-testid="increment-btn">{t('Увеличить')}</Button>
      <Button onClick={decrement} data-testid="decrement-btn">{t('Уменьшить')}</Button>
    </div>
  );
};
