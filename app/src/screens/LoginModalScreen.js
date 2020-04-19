import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const LoginModalScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#a8a8a8" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a8a8a8"
        autoCorrect={false}
        secureTextEntry
        autoCapitalize="none"
      />

      <Button title="Submit" onPress={() => console.log('todo')} />

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

export default LoginModalScreen;
