import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ScreenWrapper } from './src/components';

function HomeScreen({navigation}) {
  return (
    <ScreenWrapper>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Test')} title="Open Modal" />
    </ScreenWrapper>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Test" component={() => <Text>test</Text>} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
