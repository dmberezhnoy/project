import React, { CSSProperties, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface IAvatarProps {
    className?: string;
    src?: string;
    size?: number;
}

export const Avatar = React.memo((props: IAvatarProps) => {
  const { className, src, size } = props;
  const { t } = useTranslation();
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      alt={t('Аватарка')}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
});
