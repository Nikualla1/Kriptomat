import React from 'react';
import {View, TouchableOpacity, Pressable, Platform} from 'react-native';

import {SearchIcon} from '../../../assets/svg';
import { space } from '../../../constants/spacing';
import {colors} from '../../../constants/theme';

function HeaderRight({navigation}) {
  const WrapperComponent = Platform.OS === 'ios' ? TouchableOpacity : Pressable;

  return (
    <View style={{overflow: 'hidden', borderRadius: 1000}}>
      <WrapperComponent
        onPress={() => navigation.navigate('Search')}
        android_ripple={{color: colors.androidRippleColor}}
        style={{padding: space.xs}}>
        <SearchIcon width={20} height={20} fill={colors.textDefault} />
      </WrapperComponent>
    </View>
  );
}

export default HeaderRight;
