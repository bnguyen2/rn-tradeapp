import React, { useState, useContext } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import AuthContext from 'context/authContext';

const SignupScreen = ({ navigation }) => {
  const { signup } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#a8a8a8"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#a8a8a8"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => setLastName(text)}
      />
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

      <Button title="Submit" onPress={() => signup(firstName, lastName, email, password)} />

      <Button title="Dismiss" onPress={() => navigation.goBack()} />
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
});

export default SignupScreen;
