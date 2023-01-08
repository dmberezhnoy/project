import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page';

interface IArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = React.memo((props: IArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams();
  const isEdit = Boolean(id);

  const { t } = useTranslation();
  return (
    <Page className={className}>
      {isEdit ? t('Редактирование статьи') : t('Создание новой статьи')}
    </Page>
  );
});

export default ArticleEditPage;
