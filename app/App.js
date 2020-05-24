import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import { ApolloProvider } from '@apollo/react-hooks';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import { AuthProvider } from 'context/authContext';
import AuthContext from 'context/authContext';
import { navigationRef } from 'helpers/navigationRef';
import apolloClient from 'apollo/apolloClient';

// abstract this to navigators
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
    </ApolloProvider>
  );
};

export default () => {
  return (
    <AppearanceProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppearanceProvider>
  );
};
