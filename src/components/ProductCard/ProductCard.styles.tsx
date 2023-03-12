import {COLORS} from '../../constants/colors';
import {StyleSheet} from 'react-native';

const {WHITE} = COLORS;

export const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: WHITE,
    width: 160,
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
    flex: 1,
  },
  shadowProps: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 5,
  },
});
