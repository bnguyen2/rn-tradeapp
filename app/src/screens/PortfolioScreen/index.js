import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { css, ThemeContext } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const PortfolioScreen = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <SafeAreaView
        css={css`
          background-color: #000;
          padding-bottom: 16px;
          flex-direction: row;
          justify-content: space-between;
          padding-left: 16px;
          padding-right: 16px;
        `}
      >
        <View>
          <Text
            css={css`
              font-family: Roboto;
              color: ${colors.lakeBlue};
              font-size: 16px;
            `}
          >
            TradeBook
          </Text>
        </View>

        <TouchableOpacity onPress={() => console.log('hello')}>
          <View
            css={css`
              flex-direction: row;
            `}
          >
            <FontAwesome name="plus" size={20} color={colors.lakeBlue} />

            <Text
              css={css`
                font-family: Roboto;
                color: ${colors.lakeBlue};
                margin-left: 6px;
                font-size: 16px;
              `}
            >
              Add
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>

      <View
        css={css`
          flex: 1;
          background-color: ${colors.tar};
        `}
      >
        <Text
          css={css`
            font-family: 'Roboto';
            color: #fff;
          `}
        >
          todo
        </Text>
      </View>
    </>
  );
};

export default PortfolioScreen;
