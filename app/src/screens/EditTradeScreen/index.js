import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css, ThemeContext } from 'styled-components';

import LinePriceChart from 'components/LinePriceChart';

const EditTradeScreen = () => {
  const { colors } = useContext(ThemeContext);

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
        <LinePriceChart
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
            { x: 6, y: 8 },
            { x: 7, y: 9 },
            { x: 8, y: 10 },
            { x: 9, y: 12 },
            { x: 10, y: 14 },
            { x: 11, y: 20 },
            { x: 12, y: 25 },
            { x: 13, y: 30 },
            { x: 14, y: 35 },
            { x: 15, y: 40 },
            { x: 16, y: 50 },
            { x: 17, y: 60 },
            { x: 18, y: 80 },
            { x: 19, y: 100 },
            { x: 20, y: 120 },
            { x: 21, y: 145 },
            { x: 22, y: 157 },
            { x: 23, y: 152 },
            { x: 24, y: 166 },
            { x: 25, y: 188 },
          ]}
        />

        <LinePriceChart
          data={[
            { x: 1, y: 7 },
            { x: 2, y: 4 },
            { x: 3, y: 5 },
            { x: 4, y: 3 },
            { x: 5, y: 2 },
          ]}
        />

        <LinePriceChart
          data={[
            { x: 1, y: 7 },
            { x: 2, y: 4 },
            { x: 3, y: 5 },
            { x: 4, y: 3 },
            { x: 5, y: 2 },
          ]}
        />
      </ScrollView>
    </>
  );
};

export default EditTradeScreen;
