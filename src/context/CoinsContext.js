import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

import {getAllCoinsEndpoint} from '../services/api';

const defaultQueryParams = {
  vs_currency: 'eur',
  per_page: 50,
  order: 'market_cap_desc',
};

const CoinsContext = createContext({
  loading: false,
  coinsData: [],
  onSearchText: () => {},
  onNameSort: () => {},
  onPriceSort: () => {},
});

function CoinsProvider(props) {
  const [loading, setLoading] = useState(false);
  const [coinsData, setCoinsData] = useState([]);
  const [priceSort, setPriceSort] = useState(1);
  const [nameSort, setNameSort] = useState(1);
  // Needed to prevent refechting on search text
  const [initalData, setInitialData] = useState([]);

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
      setInitialData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function onSearchText(text) {
    if (!text) {
      return setCoinsData(initalData);
    }

    const filteredResults = (initalData || []).filter(coin =>
      (coin?.name || '').toLowerCase().includes(text.toLowerCase()),
    );
    setCoinsData(filteredResults);
  }

  function onPriceSort() {
    const sorted = (coinsData || []).sort((a, b) =>
      a.price_change_24h > b.price_change_24h ? priceSort : -priceSort,
    );
    setPriceSort(-priceSort);
    setCoinsData(sorted);
  }

  function onNameSort() {
    const sorted = (coinsData || []).sort((a, b) =>
      a.name > b.name ? nameSort : -nameSort,
    );
    setNameSort(-nameSort);
    setCoinsData(sorted);
  }

  return (
    <CoinsContext.Provider
      value={{
        loading,
        coinsData,
        onSearchText,
        onNameSort,
        onPriceSort,
      }}>
      {props.children}
    </CoinsContext.Provider>
  );
}

export {CoinsContext, CoinsProvider};
