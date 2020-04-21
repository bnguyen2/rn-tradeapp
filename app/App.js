import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import { ApolloProvider } from '@apollo/react-hooks';

import { AuthProvider } from 'context/authContext';
import AuthContext from 'context/authContext';
import { navigationRef } from 'helpers/navigationRef';
import apolloClient from 'apollo/apolloClient';

import HomeScreen from 'screens/HomeScreen';
import SignupScreen from 'screens/SignupScreen';
import SigninScreen from 'screens/SigninScreen';
import AccountScreen from 'screens/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const {
    state: { token },
    tryLocalSignin,
  } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {token === null ? (
        <Stack.Navigator mode="modal" headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignupModal" component={SignupScreen} />
          <Stack.Screen name="SigninModal" component={SigninScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  const client = apolloClient();

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppearanceProvider>
    </ApolloProvider>
  );
};
