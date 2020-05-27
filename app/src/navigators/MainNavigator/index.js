import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import AccountScreen from 'screens/AccountScreen';
import PortfolioScreen from 'screens/PortfolioScreen';
import SettingsScreen from 'screens/SettingsScreen';
import DashboardScreen from 'screens/DashboardScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'user';
              break;
            case 'Trades':
              iconName = 'list';
              break;
            case 'Account':
              iconName = 'user';
              break;
            case 'Settings':
              iconName = 'gear';
              break;
          }

          return <FontAwesome name={iconName} color={color} size={size} />;
        },
      })}
      initialRouteName="Trades"
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          backgroundColor: '#000',
          marginTop: 25,
        },
        style: {
          borderTopColor: '#000',
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Trades" component={PortfolioScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
