import React, { useContext } from 'react';
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
import AccountScreen from 'screens/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const {
    state: { token },
  } = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>
      {token === null ? (
        <Stack.Navigator mode="modal" headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignupModal" component={SignupScreen} />
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
