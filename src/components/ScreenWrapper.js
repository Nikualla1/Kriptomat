import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {colors} from '../constants/theme';

function ScreenWrapper(props) {
  return (
    <View style={[props.style, styles.container]}>
      {/* StatusBar color support for ios */}
      <View style={styles.statusBar}>
        <SafeAreaView>
          <StatusBar
            translucent
            backgroundColor={colors.statusBar}
            barStyle="light-content"
          />
        </SafeAreaView>
      </View>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: colors.statusBar,
  },
});

export default ScreenWrapper;
