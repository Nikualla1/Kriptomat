import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {PriceChangeTicker} from '.';
import {colors} from '../../../constants/theme';

function CoinItem({item}) {
  const {name, symbol, image, current_price, price_change_percentage_24h} =
    item;

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.itemsSeperator}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.name}>
            {'\u20AC'} {current_price}
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
    paddingVertical: 14,
  },
  image: {
    width: 32,
    height: 32,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
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

export default CoinItem;
