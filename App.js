import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Animated, StyleSheet, Text, Image, Easing} from 'react-native';
import Home from './src/components/Home';
import EasingAnimation from './src/components/Easing';
import Spring from './src/components/Spring';
import Parallel from './src/components/Parallel';
import {NativeBaseProvider, Box} from 'native-base';
import Login from './src/components/Login';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Easing" component={EasingAnimation} />
          <Stack.Screen name="Spring" component={Spring} />
          <Stack.Screen name="Parallel" component={Parallel} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
