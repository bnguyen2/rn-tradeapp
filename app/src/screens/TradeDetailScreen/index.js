import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css, ThemeContext } from 'styled-components';
import serverApi from 'api/serverApi';

import LinePriceChart from 'components/LinePriceChart';

const EditTradeScreen = ({ route }) => {
  const { colors } = useContext(ThemeContext);
  const { ticker } = route.params;

  const [priceData, setPriceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async (ticker) => {
      const response = await serverApi?.post('/ticker', { ticker });
      const priceData = response?.data;

      const parsedData = priceData?.data?.map((price) => ({
        x: new Date(price[0]), // date
        y: price[6], // settlement price
      }));

      setPriceData(parsedData.sort((a, b) => a.y - b.y)); // sort date in asc order
      setIsLoading(false);
    };

    fetchPrice(ticker);
  }, []);

  return (
    <>
      <SafeAreaView
        css={css`
          background-color: ${colors.darkNavy};
          padding-left: 16px;
          padding-right: 16px;
          padding-bottom: 20px;
        `}
      />

      <ScrollView
        css={css`
          flex: 1;
          background-color: ${colors.darkNavy};
        `}
      >
        {isLoading ? null : <LinePriceChart data={priceData} />}
      </ScrollView>
    </>
  );
};

export default EditTradeScreen;
