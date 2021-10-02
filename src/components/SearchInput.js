import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../constants/theme';
import {CloseIcon, SearchIcon} from '../assets/svg';

function SearchInput({value, onChange}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.icon}>
        <SearchIcon width={20} height={20} />
      </View>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search"
        style={styles.input}
        underlineColorAndroid="transparent"
      />
      {!!value && (
        <TouchableOpacity style={styles.icon} onPress={() => onChange('')}>
          <CloseIcon width={14} height={14} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.onPrimary,
    borderRadius: 6,
    overflow: 'hidden',
    elevation: 20,
    shadowColor: 'rgba(0, 0, 0, 0.051)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
  },
  icon: {
    paddingHorizontal: 10,
    width: 40,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 15,
    color: colors.textDefault,
    backgroundColor: colors.onPrimary,
    fontFamily: 'Montserrat-Medium',
  },
});

export default SearchInput;
