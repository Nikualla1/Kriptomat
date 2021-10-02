import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LogoIcon} from '../assets/svg';

function Header() {
  return (
    <View style={styles.wrapper}>
      <LogoIcon height={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    paddingBottom: 17,
  },
});

export default Header;
