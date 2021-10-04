import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {CoinsContext} from '../../context/CoinsContext';
import {
  Footer,
  Header,
  Loading,
  ScreenWrapper,
  SearchInput,
  CoinDetailsItem,
  SortingHeader,
} from '../../components';
import space from '../../constants/spacing';

function HomeScreen() {
  const {loading, coinsData, searchText, onSearchText} = useContext(CoinsContext);

  return (
    <ScreenWrapper>
      <Header />
      {loading && <Loading />}
      <View style={styles.container}>
        <SearchInput
          value={searchText}
          onChange={onSearchText}
        />
        <FlatList
          data={coinsData}
          keyExtractor={el => el.id}
          ListHeaderComponent={() => <SortingHeader />}
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
  },
  seperator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});

export default HomeScreen;
