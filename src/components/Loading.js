import React from 'react';
import { scale } from 'utils';
import colors from 'constants/colors';
import * as Progress from 'react-native-progress';
import { View, StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

const LoadingSM = React.memo(function LoadingSM(props) {
  return (
    <View style={styles.loading}>
      <Progress.Circle
        size={scale(35)}
        color={'#F79424'}
        borderWidth={2}
        indeterminate={true}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: scale(170),
    right: 0,
    top: height / 4,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 101,
    backgroundColor: colors.whiteBackground,
    width: scale(50),
    height: scale(50),
    borderRadius: scale(10),
  },
});

export default LoadingSM;
