import {StyleSheet, TextStyle} from 'react-native';
import {COLORS} from '../../constants/colors';

const {DARK_GRAY} = COLORS;

const headingStyle: TextStyle = {
  fontSize: 20,
  fontWeight: '700',
};

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
  },
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    paddingTop: 43,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerButtonsRow: {
    display: 'flex',
    flexDirection: 'row',
    width: 75,
    justifyContent: 'space-between',
  },
  slider: {
    marginBottom: 30,
  },
  image: {
    width: 250,
    height: 250,
  },
  name: {
    marginBottom: 10,
  },
  nameSection: {
    marginBottom: 15,
  },
  colorSection: {
    marginTop: 10,
    marginBottom: 15,
  },
  sectionHeading: {
    ...headingStyle,
    marginBottom: 10,
  },
  colorButtons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorButton: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginRight: 10,
    backgroundColor: '#F7F7F7',
  },
  colorButtonTitle: {
    color: DARK_GRAY,
  },
  descriptionSection: {
    marginTop: 10,
  },
});
