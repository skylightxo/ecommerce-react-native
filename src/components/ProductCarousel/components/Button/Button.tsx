import {Icon} from '@rneui/base';
import React, {useMemo} from 'react';
import {GestureResponderEvent, Pressable, View, ViewStyle} from 'react-native';
import {COLORS} from '../../../../constants/colors';

import {styles} from './Button.styles';

type CarouselButtonProps = {
  type: 'next' | 'prev';
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
};

export const Button = React.memo(
  ({
    type = 'next',
    onPress,
    containerStyle,
    disabled = false,
  }: CarouselButtonProps) => {
    const iconName = useMemo(
      () => (type === 'next' ? 'arrow-forward-ios' : 'arrow-back-ios'),
      [type],
    );

    return (
      <Pressable
        disabled={disabled}
        style={[styles.container, containerStyle]}
        onPress={onPress}>
        <View style={styles.root}>
          <Icon
            color={disabled ? COLORS.NEUTRAL_GRAY : COLORS.BLACK}
            name={iconName}
          />
        </View>
      </Pressable>
    );
  },
);
