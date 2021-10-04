import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import {SortIcon} from '../assets/svg';
import colors from '../constants/theme';
import space from '../constants/spacing';
import {CoinsContext} from '../context/CoinsContext';

function SortingHeader(props) {
  const {onSort} = useContext(CoinsContext);

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => onSort('name')}
        style={styles.itemWrapper}>
        <Text style={styles.itemText}>Coin</Text>
        <SortIcon width={16} height={16} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSort('price')}
        style={styles.itemWrapper}>
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
    paddingVertical: space.xxs,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textSecondary,
  },
});

export default SortingHeader;
