import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
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

const HeaderButton: React.FC<HeaderButtonProps> = ({onPress, icon}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

export const Header: React.FC<HeaderRNEProps & HeaderProps> &
  HeaderComponents = props => {
  const {leftComponent, centerComponent, rightComponent} = props;

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
