import type { ViewProps } from 'react-native';
// import type { SxProps } from 'dank-style';
export interface IHStackProps extends ViewProps {
  reversed?: boolean;
  space?: number | string | undefined;
  ref?: any;
  children?: any;
}
