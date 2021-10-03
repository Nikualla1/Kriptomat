import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {ScreenWrapper} from '../../components';
import {DetailsHeader} from './components';

function Currency({route}) {
  return (
    <ScreenWrapper>
      <ScrollView>
        <DetailsHeader details={route.params} />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});

export default Currency;
