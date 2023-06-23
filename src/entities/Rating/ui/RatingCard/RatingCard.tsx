import React, { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text';

interface IRatingCardProps {
    className?: string;
    title?:string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = React.memo((props: IRatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
  } = props;
  const { t } = useTranslation();
  const [isOpenFeedback, setIsOpenFeedback] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsOpenFeedback(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const handleAccept = useCallback(() => {
    setIsOpenFeedback(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const handleCancel = useCallback(() => {
    setIsOpenFeedback(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalForm = (
    <>
      <Text title={feedbackTitle} />
      <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback} />
    </>
  );

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={handleSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isOpenFeedback} lazy onClose={handleCancel}>
          <VStack maxWidth gap="16">
            {modalForm}
            <HStack justify="end" maxWidth gap="8">
              <Button theme={ButtonTheme.OUTLINE_ATTENTION} onClick={handleCancel}>{t('Закрыть')}</Button>
              <Button onClick={handleAccept}>{t('Отправить')}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isOpenFeedback} onClose={handleCancel}>
          <VStack gap="32" maxWidth>
            {modalForm}
            <Button onClick={handleAccept} fullWidth>{t('Отправить')}</Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
