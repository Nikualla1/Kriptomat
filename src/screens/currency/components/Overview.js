import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import space from '../../../constants/spacing';
import colors from '../../../constants/theme';
import { currenySymbol } from '../../../constants/currency';

const Item = ({title, value}) => {
  return (
    <View style={styles.itemWrapper}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemValue}>{value}</Text>
    </View>
  );
};

function Overview({details = {}}) {
  const {market_cap, circulating_supply, total_volume, symbol} = details;

  return (
    <View>
      <Text style={styles.title}>Overview</Text>
      <View style={{paddingTop: space.xs}}>
        <View style={styles.horizontalSeperator} />
        <View style={{flexDirection: 'row'}}>
          <Item
            title="Volume (1d):"
            value={`${currenySymbol}${total_volume.toLocaleString()}`}
          />
          <View style={styles.verticalSeperator} />
          <Item
            title="Market cap:"
            value={`${currenySymbol}${market_cap.toLocaleString()}`}
          />
        </View>
        <View style={styles.horizontalSeperator} />
        <View style={{flexDirection: 'row'}}>
          <Item
            title="Circulating supply:"
            value={`${circulating_supply.toLocaleString()} ${symbol.toUpperCase()}`}
          />
          <View style={styles.verticalSeperator} />
          <Item />
        </View>
        <View style={styles.horizontalSeperator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: space.normal,
  },
  verticalSeperator: {
    width: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.11)',
  },
  horizontalSeperator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.11)',
  },
  itemWrapper: {
    paddingHorizontal: space.normal,
    paddingVertical: space.xxs,
    flex: 1,
  },
  itemTitle: {
    fontFamily: 'Montserrat-Regular',
    color: '#A2A6AE',
  },
  itemValue: {
    fontFamily: 'Montserrat-SemiBold',
    paddingTop: space.xxs,
    color: colors.textDefault,
  },
});

export default Overview;
