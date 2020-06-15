import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import styled, { css, ThemeContext } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from 'context/authContext';

const StyledTextInput = styled.TextInput`
  color: #fff;
  font-size: 16px;
  height: 50px;
  padding: 10px;
`;

const SignupScreen = ({ navigation }) => {
  const {
    state: { errorMessage },
    signin,
    clearErrorMessage,
  } = useContext(AuthContext);

  const { colors } = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => clearErrorMessage());
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <SafeAreaView
        css={css`
          background-color: ${colors.darkNavy};
        `}
      />

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          css={css`
            flex: 1;
            background-color: ${colors.darkNavy};
            align-items: flex-start;
            padding-left: 10px;
            padding-right: 10px;
          `}
        >
          <Image
            css={css`
              width: 225px;
              height: 70px;
            `}
            source={require('assets/png/tradebook_logo_large.png')}
          />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          css={css`
            flex: 6;
            background-color: ${colors.darkNavy};
            padding-left: 10px;
            padding-right: 10px;
          `}
        >
          <View
            css={css`
              margin-top: 30px;
              background-color: ${colors.navy};
              border-radius: 10px;
            `}
          >
            <StyledTextInput
              placeholder="Email"
              placeholderTextColor="#a8a8a8"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View
            css={css`
              margin-top: 30px;
              background-color: ${colors.navy};
              border-radius: 10px;
            `}
          >
            <StyledTextInput
              placeholder="Password"
              placeholderTextColor="#a8a8a8"
              autoCorrect={false}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <TouchableOpacity onPress={() => signin(email, password)}>
            <View
              css={css`
                margin-top: 30px;
                background-color: ${colors.skyBlue};
                justify-content: center;
                align-items: center;
                height: 50px;
                border-radius: 10px;
              `}
            >
              <Text
                css={css`
                  font-family: Roboto;
                  font-size: 22px;
                  color: ${colors.darkNavy};
                `}
              >
                Log in
              </Text>
            </View>
          </TouchableOpacity>

          {errorMessage ? (
            <Text
              css={css`
                margin-top: 10px;
                font-size: 16px;
                color: ${colors.pink};
              `}
            >
              {errorMessage}
            </Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignupScreen;
