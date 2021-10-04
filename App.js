import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from './src/constants/theme';
import {CoinsProvider} from './src/context/CoinsContext';
import {HomeScreen, CurrencyScreen, SearchScreen} from './src/screens';
import {
  CurrencyHeaderTitle,
  CurrencyHeaderRight,
} from './src/screens/currency/components';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CoinsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Currency"
            component={CurrencyScreen}
            options={({route, navigation}) => ({
              headerShadowVisible: false,
              headerTitle: () => <CurrencyHeaderTitle {...route.params} />,
              headerRight: () => (
                <CurrencyHeaderRight navigation={navigation} />
              ),
            })}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerShadowVisible: false,
              headerTitle: 'Search',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: colors.background,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CoinsProvider>
  );
}

export default App;
