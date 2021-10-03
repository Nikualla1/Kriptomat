import React from 'react';
import {View, Linking, StyleSheet} from 'react-native';
import { space } from '../constants/spacing';
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
    padding: space.normal,
    backgroundColor: colors.onPrimary,
    borderRadius: 6,
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.16,
    shadowRadius: 6,
  },
});

export default Footer;
