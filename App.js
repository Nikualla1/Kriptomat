import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './src/screens';
import {CoinsProvider} from './src/context/CoinsContext';

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
        </Stack.Navigator>
      </NavigationContainer>
    </CoinsProvider>
  );
}

export default App;
