import React, { useContext } from 'react';
import { css, ThemeContext } from 'styled-components/native';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
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
          todo
        </Text>
      </View>
    </>
  );
};

export default SettingsScreen;
