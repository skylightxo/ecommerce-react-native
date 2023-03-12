import React, {useMemo} from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {styles} from './Button.styles';
//TODO: add path aliases and fix imports
// import {NextArrow, PrevArrow} from '../../../../assets/images/icons';

type CarouselButtonProps = {
  type: 'next' | 'prev';
  onPress?: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
};

export const Button: React.FC<CarouselButtonProps> = ({
  type = 'next',
  onPress,
  containerStyle,
}) => {
  // const icon = useMemo(
  //   () => (type === 'next' ? <NextArrow /> : <PrevArrow />),
  //   [type],
  // );

  const iconTemp = useMemo(
    () => (type === 'next' ? <Text>{'>'}</Text> : <Text>{'<'}</Text>),
    [type],
  );

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View style={styles.root}>{iconTemp}</View>
    </TouchableOpacity>
  );
};
