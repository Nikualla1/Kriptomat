import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import {SortIcon} from '../assets/svg';
import {colors} from '../constants/theme';
import {CoinsContext} from '../context/CoinsContext';

function SortingHeader(props) {
  const {onPriceSort, onNameSort} = useContext(CoinsContext);

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={onNameSort} style={styles.itemWrapper}>
        <Text style={styles.itemText}>Coin</Text>
        <SortIcon width={16} height={16} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPriceSort} style={styles.itemWrapper}>
        <Text style={styles.itemText}>Price</Text>
        <SortIcon width={16} height={16} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.onPrimary,
    paddingVertical: 8,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default SortingHeader;
