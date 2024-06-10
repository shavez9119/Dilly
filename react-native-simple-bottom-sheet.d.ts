declare module 'react-native-simple-bottom-sheet' {
  import {RefObject} from 'react';
  import {ViewStyle, StyleProp} from 'react-native';

  export interface SimpleBottomSheetProps {
    containerStyle?: StyleProp<ViewStyle>;
    animationDuration?: number;
  }

  export interface SimpleBottomSheetRef {
    open: () => void;
    close: () => void;
  }

  const SimpleBottomSheet: React.ForwardRefExoticComponent<SimpleBottomSheetProps> & {
    open: () => void;
    close: () => void;
  };

  export default SimpleBottomSheet;
}
