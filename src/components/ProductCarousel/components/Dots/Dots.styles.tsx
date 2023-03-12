import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';

const {BLUE, NEUTRAL_GRAY} = COLORS;

export const styles = StyleSheet.create({
  root: {
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  dots: {
    height: 8,
    width: 8,
    backgroundColor: NEUTRAL_GRAY,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: BLUE,
  },
});
