import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, View, ViewStyle} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SharedValue} from 'react-native-reanimated';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

import {Button, Dots} from './components';

import {styles} from './ProductCarousel.styles';

type CarouselComponents = {
  Dots: typeof Dots;
  Button: typeof Button;
};

type ProductCarouselProps = {
  children: JSX.Element[];
  slideStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  height?: number;
  width?: number;
  pagination?: boolean;
  withControls?: boolean;
};

export const ProductCarousel: React.FC<ProductCarouselProps> &
  CarouselComponents = ({
  slideStyle,
  children,
  height,
  width,
  pagination = true,
  containerStyle,
  withControls = true,
}) => {
  console.log(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const ref = useRef<ICarouselInstance>(null);

  const renderItem: (info: {
    item: JSX.Element;
    index: number;
    animationValue: SharedValue<number>;
  }) => React.ReactElement = ({item}) => {
    return <View style={[styles.slide, slideStyle]}>{item}</View>;
  };

  const onSnapToItem = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const onNextPress = useCallback(() => {
    ref.current?.next();
  }, []);

  const onPrevPress = useCallback(() => {
    ref.current?.prev();
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <GestureHandlerRootView>
        <Carousel
          ref={ref}
          loop={false}
          width={width ?? screenWidth}
          height={height ?? 250}
          data={children}
          renderItem={renderItem}
          onSnapToItem={onSnapToItem}
        />
      </GestureHandlerRootView>
      {pagination && (
        <ProductCarousel.Dots
          activeIndex={currentIndex}
          itemsCount={children.length}
        />
      )}
      {withControls && (
        <>
          <View style={styles.nextButton}>
            <ProductCarousel.Button onPress={onNextPress} type="next" />
          </View>
          <View style={styles.prevButton}>
            <ProductCarousel.Button onPress={onPrevPress} type="prev" />
          </View>
        </>
      )}
    </View>
  );
};

ProductCarousel.Dots = Dots;
ProductCarousel.Button = Button;
