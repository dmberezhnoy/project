import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

import { Country } from '../../model/types/country';

interface ICurrencySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.America, content: Country.America },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = React.memo((props: ICurrencySelectProps) => {
  const {
    className, value, readonly, onChange,
  } = props;
  const { t } = useTranslation();

  const handleChangeCountry = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      label={t('Укажите страну')}
      className={classNames('', {}, [className])}
      options={options}
      value={value}
      readonly={readonly}
      onChange={handleChangeCountry}
    />
  );
});
