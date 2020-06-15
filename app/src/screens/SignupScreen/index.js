import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styled, { css, ThemeContext } from 'styled-components/native';
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
    signup,
    clearErrorMessage,
  } = useContext(AuthContext);

  const { colors } = useContext(ThemeContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
          <Text
            css={css`
              font-family: Roboto-Bold;
              font-size: 30px;
              color: ${colors.skyBlue};
            `}
          >
            Register
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          css={css`
            flex: 10
            background-color: ${colors.darkNavy};
            padding-left: 10px;
            padding-right: 10px;
          `}
        >
          <View>
            <Text
              css={css`
                font-size: 18px;
                color: #fff;
              `}
            >
              Email
            </Text>
          </View>

          <View
            css={css`
              margin-top: 10px;
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
              margin-top: 10px;
            `}
          >
            <Text
              css={css`
                font-size: 18px;
                color: #fff;
              `}
            >
              Password
            </Text>
          </View>

          <View
            css={css`
              margin-top: 10px;
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

          <View
            css={css`
              margin-top: 10px;
            `}
          >
            <Text
              css={css`
                font-size: 18px;
                color: #fff;
              `}
            >
              First Name
            </Text>
          </View>

          <View
            css={css`
              margin-top: 10px;
              background-color: ${colors.navy};
              border-radius: 10px;
            `}
          >
            <StyledTextInput
              placeholder="First Name"
              placeholderTextColor="#a8a8a8"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View
            css={css`
              margin-top: 10px;
            `}
          >
            <Text
              css={css`
                font-size: 18px;
                color: #fff;
              `}
            >
              Last Name
            </Text>
          </View>

          <View
            css={css`
              margin-top: 10px;
              background-color: ${colors.navy};
              border-radius: 10px;
            `}
          >
            <StyledTextInput
              placeholder="Last Name"
              placeholderTextColor="#a8a8a8"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => setLastName(text)}
            />
          </View>

          <TouchableOpacity onPress={() => signup(firstName, lastName, email, password)}>
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
                Create an account
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
