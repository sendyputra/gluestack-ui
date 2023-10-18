import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Skeleton',
  descendantStyle: ['_text'],
} as const);
