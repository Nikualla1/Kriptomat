import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import axios from 'axios';

import {Loading, Button} from '../../../components';
import colors from '../../../constants/theme';
import space from '../../../constants/spacing';
import {currency} from '../../../constants/currency';
import {chartRangeEnpoint} from '../../../services/api';
import {
  nowTs,
  prevDayTs,
  prevMonthTs,
  prevWeekTs,
  prevYearTs,
} from '../helpers/timestamp-helper';

const screenHorizontalPadding = space.normal; // Needed on chart width calculation
const chartConfig = {
  backgroundColor: colors.onPrimary,
  backgroundGradientFrom: colors.onPrimary,
  backgroundGradientTo: colors.onPrimary,
  fillShadowGradientOpacity: 0,
  color: () => colors.primary,
  labelColor: () => colors.primary,
  propsForDots: {r: '0'},
  propsForBackgroundLines: {stroke: '#F1F1F1'},
};

const tabs = [
  {
    id: '24h',
    from: prevDayTs,
    to: nowTs,
  },
  {
    id: '1W',
    from: prevWeekTs,
    to: nowTs,
  },
  {
    id: '1M',
    from: prevMonthTs,
    to: nowTs,
  },
  {
    id: '1Y',
    from: prevYearTs,
    to: nowTs,
  },
  {
    id: 'All',
    from: 0,
    to: nowTs,
  },
];

function Chart({coinId}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([0]);
  const [activeTabId, setActiveTabId] = useState('1M');

  const endpoint = chartRangeEnpoint(coinId);

  useEffect(() => {
    getPoins();
  }, [activeTabId]);

  async function getPoins() {
    try {
      setLoading(true);
      const currentTab = tabs.find(t => t.id === activeTabId);
      const res = await axios.get(endpoint, {
        params: {
          vs_currency: currency,
          from: currentTab.from,
          to: currentTab.to,
        },
      });
      const priceRanges = (res.data?.prices || []).map(el => {
        const [_, price] = el;
        return price || 0;
      });
      setData(priceRanges);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <LineChart
        data={{datasets: [{data}]}}
        width={Dimensions.get('window').width - 2 * screenHorizontalPadding}
        height={220}
        withVerticalLines={false}
        withHorizontalLabels={false}
        segments={5}
        chartConfig={chartConfig}
        style={{paddingRight: 0}}
        bezier
      />
      <View style={styles.tabsContainer}>
        {tabs.map(tab => {
          const backgroundColor =
            tab.id === activeTabId ? colors.primary : 'transparent';
          const color =
            tab.id === activeTabId ? colors.onPrimary : colors.textDefault;
          return (
            <TouchableOpacity
              disabled={loading}
              onPress={() => setActiveTabId(tab.id)}
              key={tab.id}
              style={[styles.tabWrapper, {backgroundColor}]}>
              <Text style={[styles.tabText, {color}]}>{tab.id}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button
        onPress={() => {
          Linking.openURL('https://app.kriptomat.io');
        }}
        title="Buy, Sell or Exchange Bitcoin"
        buttonStyle={{marginVertical: 40}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: screenHorizontalPadding,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 1000,
  },
  tabText: {
    fontFamily: 'Montserrat-Medium',
  }
});

export default Chart;
