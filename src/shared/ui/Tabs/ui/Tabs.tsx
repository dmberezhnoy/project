import React, { useCallback } from 'react';

import { Card, CardTheme } from '../../Card/Card';
import { HStack } from '../../Stack';
import cls from './Tabs.module.scss';

export interface ITabItem {
    value: string;
    content: React.ReactNode
}

interface ITabsProps {
    className?: string;
    tabs: ITabItem[];
    value: string;
    onTabClick: (tab: ITabItem) => void;
}

export const Tabs = React.memo((props: ITabsProps) => {
  const {
    className = '',
    tabs,
    value,
    onTabClick,
  } = props;

  const handleClickTab = useCallback((tab: ITabItem) => () => onTabClick(tab), [onTabClick]);

  return (
    <HStack className={className} wrap>
      { tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tabItem}
          onClick={handleClickTab(tab)}
          theme={tab.value === value ? CardTheme.DEFAULT : CardTheme.OUTLINED}
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
});
