import {Icon} from '@rneui/base';
import React, {useMemo} from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {styles} from './Button.styles';

type CarouselButtonProps = {
  type: 'next' | 'prev';
  onPress?: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
};

export const Button = React.memo(
  ({type = 'next', onPress, containerStyle}: CarouselButtonProps) => {
    const icon = useMemo(
      () =>
        type === 'next' ? (
          <Icon name="arrow-forward-ios" />
        ) : (
          <Icon name="arrow-back-ios" />
        ),
      [type],
    );

    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onPress}>
        <View style={styles.root}>{icon}</View>
      </TouchableOpacity>
    );
  },
);
