import React, { useState, useContext, useEffect } from 'react';
import { View, Button, StyleSheet, TextInput, Text } from 'react-native';
import AuthContext from 'context/authContext';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#a8a8a8"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a8a8a8"
        autoCorrect={false}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Submit" onPress={() => signin(email, password)} />

      <Button title="Dismiss" onPress={() => navigation.goBack()} />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: '#fff',
    fontSize: 18,
    width: 200,
    height: 50,
  },
  bottom: {
    position: 'absolute',
    bottom: 100,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default SignupScreen;
