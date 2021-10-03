import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { space } from '../../../constants/spacing';

function HeaderTitle(props) {
  const {name = '', image = ''} = props;

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    paddingHorizontal: space.xs,
    fontFamily: 'Montserrat-SemiBold',
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default HeaderTitle;
