import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../constants/theme';
import {CloseIcon, SearchIcon} from '../assets/svg';

function SearchInput({value, onChange}) {
  return (
    <View style={styles.shadow}>
      <View style={styles.wrapper}>
        <View style={styles.icon}>
          <SearchIcon width={20} height={20} fill="#95989A" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    borderRadius: 6,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.onPrimary,
    borderRadius: 6,
    overflow: 'hidden',
  },
  icon: {
    paddingHorizontal: 10,
    width: 40,
  },
  input: {
    flex: 1,
    fontSize: 14,
    height: 48,
    color: colors.textDefault,
    backgroundColor: colors.onPrimary,
    fontFamily: 'Montserrat-Medium',
    overflow: 'hidden',
  },
});

export default SearchInput;
