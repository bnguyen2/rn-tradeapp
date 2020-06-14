import React, { useContext, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { css, ThemeContext } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import TradeItem from './components/TradeItem';

const TradesScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);

  const { data, refetch } = useQuery(gql`
    query get_trades {
      trades(order_by: [{ date: desc, time: desc }]) {
        id
        price
        action
        quantity
        ticker
        time
        date
      }
    }
  `);

  // workaround fix for apollo-client evaluating '_this.currentObservable' error
  // github.com/apollographql/react-apollo/issues/3862
  // const _refetch = useCallback(() => {
  //   setTimeout(() => refetch(), 0);
  // }, [refetch]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

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
          data={data?.trades}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('EditTrades')}>
              <TradeItem data={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => String(item?.id)}
        />
      </View>
    </>
  );
};

export default TradesScreen;
