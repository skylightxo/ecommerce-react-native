import React, {FC, useMemo} from 'react';
import {GestureResponderEvent} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Header as HeaderRNE,
  HeaderProps as HeaderRNEProps,
  Text,
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './Header.styles';
import {colors} from '../../assets/colors';

const {BLUE, WHITE} = colors;

type HeaderButtonProps = {
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  icon: JSX.Element;
};

type HeaderProps = {
  title?: string;
};

export const HeaderButton: FC<HeaderButtonProps> = ({onPress, icon}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

export const Header: FC<HeaderRNEProps & HeaderProps> = props => {
  const {leftComponent, centerComponent, rightComponent, title} = props;

  const left = useMemo(
    () =>
      leftComponent || (
        <HeaderButton icon={<Icon name="menu" color={WHITE} size={25} />} />
      ),
    [leftComponent],
  );

  const center = useMemo(
    () => centerComponent || <Text style={styles.headerCenter}>{title}</Text>,
    [title, centerComponent],
  );

  const right = useMemo(
    () =>
      rightComponent || (
        <HeaderButton
          icon={<Icon name="shopping-cart" color={WHITE} size={25} />}
        />
      ),
    [rightComponent],
  );

  return (
    <HeaderRNE
      {...props}
      backgroundColor={BLUE}
      containerStyle={styles.headerContainer}
      leftComponent={left}
      centerComponent={center}
      rightComponent={right}
    />
  );
};
