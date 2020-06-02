import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { css, ThemeContext } from 'styled-components/native';
import MyAppText from 'components/MyAppText/index';

const HomeScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      css={css`
        flex: 1;
        background-color: ${colors.darkNavy};
        align-items: center;
        justify-content: center;
      `}
    >
      <MyAppText>
        <Text
          css={css`
            color: #fff;
          `}
        >
          This is awesome
        </Text>
      </MyAppText>

      <View
        css={css`
          position: absolute;
          bottom: 100px;
        `}
      >
        <Button title="Sign up" onPress={() => navigation.navigate('SignupModal')} />
        <Button title="Sign in" onPress={() => navigation.navigate('SigninModal')} />
      </View>
    </View>
  );
};

export default HomeScreen;
