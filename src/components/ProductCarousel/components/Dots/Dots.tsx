import React, {useMemo} from 'react';
import {View} from 'react-native';

import {styles} from './Dots.styles';

type PaginationProps = {
  itemsCount: number;
  activeIndex: number;
};

export const Dots = React.memo(({itemsCount, activeIndex}: PaginationProps) => {
  const dots = useMemo(() => {
    const result = Array.from({length: itemsCount}, (_, i) => {
      const activeStyle = activeIndex === i ? styles.activeDot : null;
      return <View key={i} style={[styles.dots, activeStyle]} />;
    });

    return result;
  }, [activeIndex, itemsCount]);

  return <View style={styles.root}>{dots}</View>;
});

Dots.displayName = 'Dots';
