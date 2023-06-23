import React from 'react';

import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { TextAlign } from '@/shared/ui/Text/ui/Text';

import { IArticleImageBlock } from '../../model/types';

interface IArticleImageBlockProps {
    className?: string;
    block: IArticleImageBlock;
}

export const ArticleImageBlock = React.memo((props: IArticleImageBlockProps) => {
  const { className = '', block } = props;
  return (
    <VStack className={className} maxWidth>
      <img src={block.src} alt={block.title} style={{ maxWidth: '50%' }} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </VStack>
  );
});
