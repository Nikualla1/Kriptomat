import React, {useContext} from 'react';
import {NavigationContext} from '@react-navigation/native';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

import colors from '../constants/theme';
import space from '../constants/spacing';
import PriceChangeTicker from './PriceChangeTicker';
import {currenySymbol} from '../constants/currency';

function CoinDetailsItem({item}) {
  const navigation = useContext(NavigationContext);

  const {name, symbol, image, current_price, price_change_percentage_24h} =
    item;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Currency', item)}
      style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.itemsSeperator}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>
            {currenySymbol}
            {current_price.toLocaleString()}
          </Text>
        </View>
        <View style={styles.itemsSeperator}>
          <Text style={styles.symbol}>{symbol}</Text>
          <PriceChangeTicker percentage={price_change_percentage_24h} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: space.small,
  },
  image: {
    width: 32,
    height: 32,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: space.xs,
  },
  itemsSeperator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDefault,
  },
  symbol: {
    fontFamily: 'Montserrat-Regular',
    textTransform: 'uppercase',
    color: colors.textSecondary,
  },
});

export default CoinDetailsItem;
