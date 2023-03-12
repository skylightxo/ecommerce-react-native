import {Button} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {styles} from './AbsoluteButton.styles';

type AbsoluteButtonProps = {
  title: string;
  onPress: () => void;
};

export const AbsoluteButton = ({title, onPress}: AbsoluteButtonProps) => {
  return (
    <View style={styles.container}>
      <Button
        style={[styles.shadowProps, styles.root]}
        title={title}
        onPress={onPress}
        titleStyle={styles.text}
      />
    </View>
  );
};
