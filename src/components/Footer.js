import React from 'react';
import {View, Linking, StyleSheet} from 'react-native';
import {colors} from '../constants/theme';

import Button from './Button';

function Footer() {
  return (
    <View style={styles.wrapper}>
      <Button
        onPress={() => {
          Linking.openURL('https://app.kriptomat.io');
        }}
        title="Kriptomat account"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.onPrimary,
    elevation: 14,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 6,
    flexShrink: 0,
  },
});

export default Footer;
