import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LogoIcon} from '../assets/svg';
import space from '../constants/spacing';

function Header() {
  return (
    <View style={styles.wrapper}>
      <LogoIcon height={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: space.xl,
    paddingBottom: space.normal,
  },
});

export default Header;
