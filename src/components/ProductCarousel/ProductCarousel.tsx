import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, View, ViewStyle} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
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

const ProductCarouselComponent: React.FC<ProductCarouselProps> &
  CarouselComponents = ({
  slideStyle,
  children,
  height,
  width,
  pagination = true,
  containerStyle,
  withControls = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const ref = useRef<ICarouselInstance>(null);

  const renderItem = useCallback(
    ({item}: {item: JSX.Element}) => {
      return <View style={[styles.slide, slideStyle]}>{item}</View>;
    },
    [slideStyle],
  );

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
        <ProductCarouselComponent.Dots
          activeIndex={currentIndex}
          itemsCount={children.length}
        />
      )}
      {withControls && (
        <>
          <View style={styles.nextButton}>
            <ProductCarouselComponent.Button
              onPress={onNextPress}
              type="next"
            />
          </View>
          <View style={styles.prevButton}>
            <ProductCarouselComponent.Button
              onPress={onPrevPress}
              type="prev"
            />
          </View>
        </>
      )}
    </View>
  );
};

ProductCarouselComponent.Dots = Dots;
ProductCarouselComponent.Button = Button;

export const ProductCarousel = React.memo(ProductCarouselComponent);
