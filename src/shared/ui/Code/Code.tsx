import React, { useCallback } from 'react';

import CopyIcon from 'shared/assets/icons/copy-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './Code.module.scss';

interface ICodeProps {
    className?: string;
    text: string;
}

export const Code = React.memo((props: ICodeProps) => {
  const { className, text } = props;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={handleCopy}>
        <CopyIcon />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
