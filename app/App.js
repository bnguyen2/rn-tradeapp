import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider } from 'react-native-appearance';

import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apollo/apolloClient';

import LoginScreen from './src/screens/LoginScreen';
import LoginModalScreen from './src/screens/LoginModalScreen';

const LoginStack = createStackNavigator();
const RootStack = createStackNavigator();

const LoginScreens = () => {
  return (
    <LoginStack.Navigator headerMode="none ">
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={LoginScreens} />
        <RootStack.Screen name="LoginModal" component={LoginModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  const client = apolloClient();

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <App />
      </AppearanceProvider>
    </ApolloProvider>
  );
};
