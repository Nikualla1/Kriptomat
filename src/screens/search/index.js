import React, {useState, useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {CoinsContext} from '../../context/CoinsContext';
import {
  Footer,
  Loading,
  ScreenWrapper,
  SearchInput,
  CoinDetailsItem,
  SortingHeader,
} from '../../components';
import {colors} from '../../constants/theme';
import { space } from '../../constants/spacing';

function SearchScreen() {
  const [searchedText, setSearchedText] = useState('');

  const {loading, coinsData, onSearchText} = useContext(CoinsContext);

  return (
    <ScreenWrapper style={{backgroundColor: colors.background}}>
      {loading && <Loading />}
      <View style={styles.container}>
        <SearchInput
          value={searchedText}
          onChange={text => {
            setSearchedText(text);
            onSearchText(text);
          }}
        />
        <FlatList
          data={coinsData}
          keyExtractor={el => el.id}
          ListHeaderComponent={() => (
            <SortingHeader style={{backgroundColor: colors.background}} />
          )}
          renderItem={({item}) => <CoinDetailsItem item={item} />}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          style={{marginTop: 30}}
        />
      </View>
      <Footer />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: space.large,
    flex: 1,
    paddingTop: space.xs
  },
  seperator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});

export default SearchScreen;
