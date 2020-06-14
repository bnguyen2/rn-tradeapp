import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TradeScreen from 'screens/TradesScreen';
import AddTradeScreen from 'screens/AddTradeScreen';
import EditTradeScreen from 'screens/EditTradeScreen';

const Stack = createStackNavigator();

const TradesNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Trades" component={TradeScreen} />
      <Stack.Screen name="AddTrades" component={AddTradeScreen} />
      <Stack.Screen name="EditTrades" component={EditTradeScreen} />
    </Stack.Navigator>
  );
};

export default TradesNavigator;
