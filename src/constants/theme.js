import { StyleSheet } from 'react-native';
import { scale } from 'utils';
import fonts from './fonts';

//Guideline sizes are based on standard iPhone 11

const theme = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff',
    height: scale(70),
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  titleStyle: {
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: scale(18),
    flex: 1,
    fontFamily: fonts.type.demiBold,
  },
  bodyStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: scale(14),
    flex: 1,
    fontFamily: fonts.type.regular,
  },
});

const resizeModeImage = {
  CENTER: 'center',
  CONTAIN: 'contain',
  COVER: 'cover',
  REPEAT: 'repeat',
  STRETCH: 'stretch',
};

export { resizeModeImage };

export default theme;
