import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import { space } from '../constants/spacing';

import {colors} from '../constants/theme';

function Button({onPress, title, buttonStyle, textStyle}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: space.small,
  },
  text: {
    color: colors.onPrimary,
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default Button;
