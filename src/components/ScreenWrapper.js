import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import colors from '../constants/theme';

function ScreenWrapper(props) {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.upperBar} />
      <SafeAreaView style={styles.lowerBar}>
        <StatusBar
          backgroundColor={colors.statusBar}
          barStyle={props.barStyleDark ? 'dark-content' : "light-content"}
        />
        <View style={[styles.container, props.style]}>{props.children}</View>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onPrimary,
  },
  upperBar: {
    flex: 0,
    backgroundColor: colors.statusBar,
  },
  lowerBar: {
    flex: 1,
    backgroundColor: colors.statusBar,
  },
});

export default ScreenWrapper;
