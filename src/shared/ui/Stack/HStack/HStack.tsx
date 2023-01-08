import React from 'react';

import { Flex, IFlexProps } from '../Flex/Flex';

type HStackProps = Omit<IFlexProps, 'direction'>

export const HStack = React.memo((props: HStackProps) => (
  <Flex direction="row" {...props} />
));
