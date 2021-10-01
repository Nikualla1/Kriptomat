import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../assets/svg/Logo';

function Header() {
  return (
    <View style={styles.wrapper}>
      <Logo height={32} />
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
