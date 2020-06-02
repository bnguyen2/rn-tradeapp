import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TradeScreen from 'screens/TradesScreen';
import AddTradeScreen from 'screens/AddTradeScreen';

const Stack = createStackNavigator();

const TradesNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Trades" component={TradeScreen}></Stack.Screen>
      <Stack.Screen name="AddTrades" component={AddTradeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default TradesNavigator;
