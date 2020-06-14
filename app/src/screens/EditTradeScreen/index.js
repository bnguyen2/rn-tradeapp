import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css, ThemeContext } from 'styled-components';

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

      <View
        css={css`
          flex: 1;
          background-color: ${colors.darkNavy};
        `}
      />
    </>
  );
};

export default EditTradeScreen;
