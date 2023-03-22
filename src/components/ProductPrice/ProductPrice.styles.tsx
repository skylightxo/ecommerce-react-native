import {StyleSheet, TextStyle} from 'react-native';
import {COLORS} from '../../constants/colors';

const {DARK_GRAY, NEUTRAL_GRAY, BLUE_300} = COLORS;

const priceText: TextStyle = {
  fontSize: 15,
  lineHeight: 20,
  fontWeight: '700',
};

export const styles = StyleSheet.create({
  price: {
    ...priceText,
    color: DARK_GRAY,
    marginRight: 5,
  },
  oldPrice: {
    ...priceText,
    color: NEUTRAL_GRAY,
    marginRight: 5,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  comparedPrice: {
    ...priceText,
    color: BLUE_300,
  },
  priceRow: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
