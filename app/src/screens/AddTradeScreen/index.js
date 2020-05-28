import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { css, ThemeContext } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const AddTradeScreen = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons
            name="ios-arrow-back"
            size={24}
            color={colors.lakeBlue}
            css={css`
              flex: 1;
            `}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AddTrades')}>
          <View
            css={css`
              flex-direction: row;
            `}
          >
            <Text
              css={css`
                font-family: Roboto-Bold;
                color: ${colors.lakeBlue};
                margin-left: 6px;
                font-size: 16px;
              `}
            >
              Save
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
          Hello!!!
        </Text>
      </View>
    </>
  );
};

export default AddTradeScreen;
