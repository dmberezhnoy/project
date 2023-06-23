import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack';

import { getAddCommentFormText } from '../../model/selectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface IAddCommentFormProps {
  className?: string;
  onSendComment: (comment: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = React.memo((props: IAddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comment = useSelector(getAddCommentFormText);

  const handleChangeComment = useCallback((value: string) => {
    dispatch(addCommentFormActions.setComment(value));
  }, [dispatch]);

  const handleSendComment = useCallback(() => {
    onSendComment(comment || '');
    handleChangeComment('');
  }, [comment, handleChangeComment, onSendComment]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack align="center" maxWidth justify="between" className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          value={comment}
          onChange={handleChangeComment}
          placeholder={t('Введите комментарий')}
        />
        <Button
          onClick={handleSendComment}
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
