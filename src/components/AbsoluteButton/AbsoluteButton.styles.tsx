import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const {BLUE} = COLORS;

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 335,
    backgroundColor: BLUE,
    borderRadius: 4,
    padding: 12,
  },
  container: {
    display: 'flex',
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    fontWeight: '500',
  },
});
