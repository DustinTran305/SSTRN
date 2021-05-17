import { StyleSheet } from 'react-native';
import { scale } from 'utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: scale(14),
  },
  txtBody: {
    fontSize: scale(12),
  },
});

export default styles;
