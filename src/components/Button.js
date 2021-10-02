import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

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
    padding: 14,
  },
  text: {
    fontSize: 14,
    color: colors.onPrimary,
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default Button;
