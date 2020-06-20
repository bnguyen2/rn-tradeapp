import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TradeScreen from 'screens/TradesScreen';
import AddTradeScreen from 'screens/AddTradeScreen';
import TradeDetailScreen from 'screens/TradeDetailScreen';

const Stack = createStackNavigator();

const TradesNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Trades" component={TradeScreen} />
      <Stack.Screen name="AddTrades" component={AddTradeScreen} />
      <Stack.Screen name="TradeDetail" component={TradeDetailScreen} />
    </Stack.Navigator>
  );
};

export default TradesNavigator;
