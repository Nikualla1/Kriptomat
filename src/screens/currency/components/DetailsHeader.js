import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../../../constants/theme';
import {space} from '../../../constants/spacing';
import {PriceChangeTicker} from '../../../components';

const RangeItem = ({label, price, style}) => {
  return (
    <View style={[styles.rangeWrapper, style]}>
      <Text style={styles.rangeLabel}>{label} </Text>
      <Text style={styles.rangePrice}>
        {'\u20AC'}
        {price}
      </Text>
    </View>
  );
};

function DetailsHeader({details = {}}) {
  const {high_24h, low_24h, current_price, price_change_percentage_24h} =
    details;

  const tickerBackground =
    price_change_percentage_24h >= 0
      ? 'rgba(76, 178, 147, 0.2)'
      : 'rgba(220, 53, 70, 0.2)';

  return (
    <View style={styles.container}>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>
          {'\u20AC'} {current_price}
        </Text>
        <PriceChangeTicker
          percentage={price_change_percentage_24h}
          colors={{
            positive: '#4CB294',
            negative: '#DC3545',
          }}
          iconSize={{
            width: 10,
            height: 12,
          }}
          wrapperStyle={[
            styles.tickerWrapper,
            {backgroundColor: tickerBackground},
          ]}
          textStyle={styles.tickerText}
        />
      </View>
      <View style={styles.rangeWrapper}>
        <RangeItem label="24h Low" price={low_24h} />
        <RangeItem
          label="24h High"
          price={high_24h}
          style={{paddingLeft: 24}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: space.normal,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 2,
  },
  price: {
    fontSize: 28,
    color: colors.textDefault,
    fontFamily: 'Montserrat-SemiBold',
  },
  rangeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rangePrice: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  rangeLabel: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  tickerWrapper: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  tickerText: {
    fontSize: 16,
    paddingLeft: 7,
  },
});

export default DetailsHeader;
