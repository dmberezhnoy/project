import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/ui/Text';
import { Page } from 'widgets/Page';

const AdminPanelPage = React.memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      <Text size={TextSize.L} align={TextAlign.CENTER} text={t('Админ панель')} />
    </Page>
  );
});

export default AdminPanelPage;
