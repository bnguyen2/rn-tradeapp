import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from '@apollo/react-hooks';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from 'context/authContext';
import { navigationRef } from 'helpers/navigationRef';
import AuthContext from 'context/authContext';
import apolloClient from 'apollo/apolloClient';
import theme from 'assets/theme';

import MainNavigator from 'navigators/MainNavigator';
import SigninNavigator from 'navigators/SigninNavigator';

const App = () => {
  const {
    state: { token },
    tryLocalSignin,
  } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  const [client, setClient] = useState(null);

  const fetchSession = async () => {
    const token = await AsyncStorage.getItem('token');
    const client = apolloClient(token);
    setClient(client);
  };

  useEffect(() => {
    fetchSession();
  }, []);

  const [fontsLoaded] = useFonts({
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
  });

  if (!client) {
    return <AppLoading />;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        {token === null ? <SigninNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <AppearanceProvider>
        <AuthProvider>
          <SafeAreaProvider>
            <App />
          </SafeAreaProvider>
        </AuthProvider>
      </AppearanceProvider>
    </ThemeProvider>
  );
};
