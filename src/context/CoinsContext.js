import React, {createContext, useEffect, useState, useMemo} from 'react';
import axios from 'axios';

import {getAllCoinsEndpoint} from '../services/api';
import {currency} from '../constants/currency';

const defaultQueryParams = {
  vs_currency: currency,
  per_page: 50,
  order: 'market_cap_desc',
};

const CoinsContext = createContext({
  loading: false,
  coinsData: [],
  searchText: '',
  onSearchText: () => {},
  onSort: () => {},
});

function CoinsProvider(props) {
  const [loading, setLoading] = useState(false);
  const [coinsData, setCoinsData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortMode, setSortMode] = useState(null);
  const [sortDirection, setSortDirection] = useState(1);

  useEffect(() => {
    getCoints();
  }, []);

  async function getCoints() {
    try {
      setLoading(true);
      const res = await axios.get(getAllCoinsEndpoint, {
        params: defaultQueryParams,
        headers: {
          'Content-type': 'Application/json',
        },
      });
      setCoinsData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const formattedData = useMemo(() => {
    let tmpData = [...coinsData];

    if (searchText) {
      tmpData = tmpData.filter(coin =>
        (coin?.name || '').toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    if (sortMode === 'price') {
      tmpData = tmpData.sort((a, b) =>
        a.price_change_24h > b.price_change_24h
          ? sortDirection
          : -sortDirection,
      );
    }

    if (sortMode === 'name') {
      tmpData = tmpData.sort((a, b) =>
        a.name > b.name ? sortDirection : -sortDirection,
      );
    }

    return tmpData;
  }, [coinsData, searchText, sortMode, sortDirection]);

  function onSearchText(text) {
    setSearchText(text);
  }

  function onSort(mode) {
    // Change current sort direction
    if (sortMode === mode) {
      setSortDirection(-sortDirection)
    } else {
      // Set new mode and reset sort direction
      setSortMode(mode)
      setSortDirection(1)
    }
  }

  return (
    <CoinsContext.Provider
      value={{
        loading,
        coinsData: formattedData,
        searchText,
        onSearchText,
        onSort
      }}>
      {props.children}
    </CoinsContext.Provider>
  );
}

export {CoinsContext, CoinsProvider};
