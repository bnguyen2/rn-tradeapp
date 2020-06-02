import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { css, ThemeContext } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import TradeItem from './components/TradeItem';

const TradesScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);

  const [trades, setTrades] = useState([
    { id: '1', price: '3009', side: 'long', size: 12 },
    { id: '2', price: '3007', side: 'long', size: 5 },
    { id: '3', price: '3012', side: 'long', size: 6 },
    { id: '4', price: '3005', side: 'long', size: 1 },
    { id: '5', price: '3004', side: 'long', size: 8 },
    { id: '6', price: '3006', side: 'long', size: 12 },
  ]);

  return (
    <>
      <SafeAreaView
        css={css`
          background-color: ${colors.darkNavy};
          padding-left: 16px;
          padding-right: 16px;
          padding-bottom: 20px;
        `}
      >
        <View
          css={css`
            flex-direction: row;
            margin-top: 10px;
            justify-content: space-between;
          `}
        >
          <Text
            css={css`
              color: ${colors.lakeBlue};
              font-size: 18px;
              font-family: Roboto-Bold;
            `}
          >
            Trades
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTrades')}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View>
              <FontAwesome name="plus" size={24} color={colors.lakeBlue} />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View
        css={css`
          flex: 1;
          background-color: ${colors.darkNavy};
        `}
      >
        <FlatList
          data={trades}
          renderItem={({ item }) => <TradeItem data={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default TradesScreen;
