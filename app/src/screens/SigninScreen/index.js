import React, { useState, useContext, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import styled, { css } from 'styled-components/native';
import AuthContext from 'context/authContext';

const StyledTextInput = styled.TextInput`
  color: #fff;
  font-size: 18px;
  width: 200px;
  height: 50px;
`;

const SignupScreen = ({ navigation }) => {
  const {
    state: { errorMessage },
    signin,
    clearErrorMessage,
  } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => clearErrorMessage());
    return unsubscribe;
  }, [navigation]);

  return (
    <View
      css={css`
        flex: 1;
        background-color: #000;
        align-items: center;
        justify-content: center;
      `}
    >
      <StyledTextInput
        placeholder="Email Address"
        placeholderTextColor="#a8a8a8"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <StyledTextInput
        placeholder="Password"
        placeholderTextColor="#a8a8a8"
        autoCorrect={false}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Submit" onPress={() => signin(email, password)} />

      <Button title="Dismiss" onPress={() => navigation.goBack()} />

      {errorMessage ? (
        <Text
          css={css`
            font-size: 18px;
            color: red;
          `}
        >
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default SignupScreen;
