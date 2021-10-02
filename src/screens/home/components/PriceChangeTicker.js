import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Ticker} from '../../../assets/svg';

function PriceChangeTicker({percentage}) {
  const fill = percentage >= 0 ? '#0DEAA9' : '#FF9696';
  const rotate = percentage < 0 ? '180deg' : '0deg';

  return (
    <View style={styles.wrapper}>
      <Ticker
        width={9}
        height={9}
        fill={fill}
        style={{transform: [{rotate}]}}
      />
      <Text style={[styles.text, {color: fill}]}>{percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    paddingLeft: 4,
  },
});

export default PriceChangeTicker;
