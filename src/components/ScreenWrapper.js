import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {colors} from '../constants/theme';

function ScreenWrapper(props) {
  return (
    <React.Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.statusBar}} />
      <SafeAreaView style={{flex: 1, backgroundColor: colors.statusBar}}>
        <StatusBar
          translucent
          backgroundColor={colors.statusBar}
          barStyle="light-content"
        />
        <View style={styles.container}>{props.children}</View>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default ScreenWrapper;
