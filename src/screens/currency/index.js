import React from 'react';
import {ScrollView} from 'react-native';

import {ScreenWrapper} from '../../components';
import {Chart, DetailsHeader, Overview} from './components';

function Currency({route}) {
  return (
    <ScreenWrapper barStyle="dark-content">
      <ScrollView>
        <DetailsHeader details={route.params} />
        <Chart coinId={route.params?.id || ''} />
        <Overview details={route.params} />
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Currency;
