import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from '@rneui/themed';

import {Header} from '../../components/Header';
import {ProductsList} from '../../components/ProductsList';
import {SearchBar} from '../../components/SearchBar';
import {COLORS} from '../../constants/colors';

import {styles} from './MainScreen.styles';
import {styles as globalStyles} from '../../styles/general.styles';

const {WHITE} = COLORS;

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <Header.Button icon={<Icon name="menu" color={WHITE} size={25} />} />
        }
        centerComponent={
          <Text style={globalStyles.headerTitle}>Ecommerce Store</Text>
        }
        rightComponent={
          <Header.Button
            icon={<Icon name="shopping-cart" color={WHITE} size={25} />}
          />
        }
        title="Ecommerce Store"
      />
      <View style={[styles.searchBarContainer, styles.shadowProps]}>
        <SearchBar />
      </View>
      <ProductsList />
    </View>
  );
};
