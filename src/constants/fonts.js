import { scale } from 'utils';

const type = {
  regular: 'Regular',
  bold: 'Bold',
  medium: 'Medium',
  demiBold: 'DemiBold',
};

const size = {
  small: scale(10),
  regular: scale(12),
  large: scale(15),
  giant: scale(16),
};

const style = {
  text: {
    fontFamily: type.regular,
    fontSize: size.regular,
    color: 'rgb(55,55,55)',
  },
  textTitle: {
    fontFamily: type.demiBold,
    fontSize: size.large,
    color: 'rgb(0,0,0)',
  },
  textInput: {
    fontFamily: type.regular,
    fontSize: size.regular,
    color: 'rgb(21,21,21)',
    padding: 0,
  },
  textHeader: {
    fontFamily: type.demiBold,
    fontSize: scale(18),
    color: 'rgb(21,21,21)',
  },
};

export default { type, size, style };
