import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

import {colors} from '../constants/theme';

function Loading({size = 'large'}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
