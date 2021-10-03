import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Ticker} from '../assets/svg';

function PriceChangeTicker(props) {
  const {
    percentage,
    colors = {
      positive: '#0DEAA9',
      negative: '#FF9696',
    },
    iconSize = {
      width: 8,
      height: 9,
    },
    wrapperStyle = {},
    textStyle = {},
  } = props;
  const fill = percentage >= 0 ? colors.positive : colors.negative;
  const rotate = percentage < 0 ? '180deg' : '0deg';

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Ticker
        width={iconSize.width}
        height={iconSize.height}
        fill={fill}
        style={{transform: [{rotate}]}}
      />
      <Text style={[styles.text, {color: fill, ...textStyle}]}>
        {percentage}%
      </Text>
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
