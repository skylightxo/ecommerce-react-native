import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {Button, Divider, Icon, Image} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '../../components/Header';
import {AbsoluteButton} from '../../components/AbsoluteButton';
import {ProductCarousel} from '../../components/ProductCarousel';
import {ProductPrice} from '../../components/ProductPrice';

import {ImageService} from '../../services/Image.service';
import {COLORS} from '../../constants/colors';
import {useProducts} from '../../hooks/useProducts';

import {styles} from './ProductDetailsScreen.styles';

// import type {Product} from '../../types/product.type';

// type ProductDetailsScreenProps = {
//   product: Product;
// };

export const ProductDetailsScreen = () => {
  const [imageItems, setImageItems] = useState<JSX.Element[]>([]);
  const {products, fetchProducts, isLoading} = useProducts();

  const product = products[0];

  const handleRefresh = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  const headerRightComponent = useMemo(
    () => (
      <View style={styles.headerButtonsRow}>
        <Header.Button
          icon={<Icon name="favorite-border" color={COLORS.WHITE} size={25} />}
        />
        <Header.Button
          icon={<Icon name="shopping-cart" color={COLORS.WHITE} size={25} />}
        />
      </View>
    ),
    [],
  );

  const headerLeftComponent = useMemo(
    () => (
      <Header.Button
        icon={<Icon name="arrow-back" color={COLORS.WHITE} size={25} />}
      />
    ),
    [],
  );

  useEffect(() => {
    if (!product) {
      return;
    }

    const imagesData = product.relationships.images.data ?? [];

    if (!imagesData.length) {
      return;
    }

    const imageItemsPromises = imagesData.map(async imageData => {
      const id = imageData.id,
        width = '250',
        height = '250';

      const imageUri = await ImageService.getImage(id, width, height);

      return {
        uri: imageUri,
        id: id,
      };
    });

    Promise.all(imageItemsPromises).then(items => {
      const imageComponents = items.map(item => {
        return (
          <Image
            source={{
              uri: item.uri,
            }}
            style={styles.image}
            key={item.id}
          />
        );
      });
      setImageItems(imageComponents);
    });
  }, [product]);

  const content = useMemo(() => {
    if (product) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
          }
          contentContainerStyle={styles.container}>
          {imageItems ? (
            <ProductCarousel width={350} containerStyle={styles.slider}>
              {imageItems}
            </ProductCarousel>
          ) : null}
          <View style={styles.nameSection}>
            <Text style={styles.name}>{product.attributes.name}</Text>
            <ProductPrice price={product.attributes.price} />
          </View>
          <Divider />
          <View style={styles.colorSection}>
            <Text style={styles.sectionHeading}>Select Color</Text>
            <View style={styles.colorButtons}>
              <Button
                key={COLORS.WHITE}
                title={COLORS.WHITE}
                size="sm"
                buttonStyle={styles.colorButton}
                titleStyle={styles.colorButtonTitle}
              />
            </View>
          </View>
          <Divider />
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionHeading}>Description</Text>
            <Text>{product.attributes.description}</Text>
          </View>
        </ScrollView>
      );
    }
  }, [isLoading, product, handleRefresh, imageItems]);

  return isLoading ? (
    <Text>Loading</Text>
  ) : (
    <View style={styles.root}>
      <Header
        leftComponent={headerLeftComponent}
        rightComponent={headerRightComponent}
      />
      <SafeAreaView
        mode="padding"
        edges={['left', 'right']}
        style={styles.safeAreaContainer}>
        {content}
      </SafeAreaView>
      <AbsoluteButton
        title="ADD TO CART"
        onPress={() => console.log('Works!')}
      />
    </View>
  );
};
