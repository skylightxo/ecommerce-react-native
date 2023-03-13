import React from 'react';
import {GestureResponderEvent, Pressable} from 'react-native';
import {
  Header as HeaderRNE,
  HeaderProps as HeaderRNEProps,
} from '@rneui/themed';
import {styles} from './Header.styles';
import {COLORS} from '../../constants/colors';

const {BLUE} = COLORS;

type HeaderComponents = {
  Button: React.FC<HeaderButtonProps>;
};

type HeaderButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  icon: JSX.Element;
};

type HeaderProps = {
  title?: string;
  leftComponent?: JSX.Element;
  centerComponent?: JSX.Element;
  rightComponent?: JSX.Element;
};

const HeaderButton = React.memo(({onPress, icon}: HeaderButtonProps) => {
  return (
    <Pressable hitSlop={10} onPress={onPress}>
      {icon}
    </Pressable>
  );
});

export const Header: React.FC<HeaderRNEProps & HeaderProps> & HeaderComponents = ({
  leftComponent,
  centerComponent,
  rightComponent,
  ...props
}) => {
  return (
    <HeaderRNE
      {...props}
      backgroundColor={BLUE}
      containerStyle={styles.headerContainer}
      leftComponent={leftComponent}
      centerComponent={centerComponent}
      rightComponent={rightComponent}
    />
  );
};

Header.Button = HeaderButton;
