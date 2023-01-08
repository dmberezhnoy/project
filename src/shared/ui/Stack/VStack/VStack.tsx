import React from 'react';

import { Flex, IFlexProps } from '../Flex/Flex';

type VStackProps = Omit<IFlexProps, 'direction'>

export const VStack = React.memo((props: VStackProps) => (
  <Flex direction="column" {...props} />
));
