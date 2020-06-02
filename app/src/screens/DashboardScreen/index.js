import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { css, ThemeContext } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <SafeAreaView
        css={css`
          background-color: ${colors.darkNavy};
        `}
      />

      <View
        css={css`
          flex: 1;
          background-color: ${colors.darkNavy};
        `}
      >
        <Text
          css={css`
            color: #fff;
          `}
        >
          wtf
        </Text>
      </View>
    </>
  );
};

export default DashboardScreen;
