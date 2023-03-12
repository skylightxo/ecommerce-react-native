import {COLORS} from '../../constants/colors';
import {StyleSheet} from 'react-native';

const {WHITE} = COLORS;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    padding: 20,
    backgroundColor: WHITE,
  },
  shadowProps: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});
