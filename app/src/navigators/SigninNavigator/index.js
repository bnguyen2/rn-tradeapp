import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen';
import SignupScreen from 'screens/SignupScreen';
import SigninScreen from 'screens/SigninScreen';

const Stack = createStackNavigator();

const SigninNavigator = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen name="SignupModal" component={SignupScreen} />
      <Stack.Screen name="SigninModal" component={SigninScreen} />
    </Stack.Navigator>
  );
};

export default SigninNavigator;
