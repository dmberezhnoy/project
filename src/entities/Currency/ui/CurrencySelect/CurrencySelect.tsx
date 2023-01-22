import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from 'shared/ui/ListBox';

import { Currency } from '../../model/types/currency';

interface ICurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = React.memo((props: ICurrencySelectProps) => {
  const {
    className, value, readonly, onChange,
  } = props;
  const { t } = useTranslation();

  const handleChangeCurrency = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      onChange={handleChangeCurrency}
      items={options}
      readonly={readonly}
      value={value}
      defaultValue={t('Укажите валюту')}
      label={t('Укажите валюту')}
      className={className}
      direction="top right"
    />
  );
});
