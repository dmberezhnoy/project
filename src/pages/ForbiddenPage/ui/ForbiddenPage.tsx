import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/ui/Text';
import { Page } from 'widgets/Page';

const ForbiddenPage = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Page>
      <Text text={t('У вас нет доступа к этой странице')} size={TextSize.L} align={TextAlign.CENTER} />
    </Page>
  );
});

export default ForbiddenPage;
