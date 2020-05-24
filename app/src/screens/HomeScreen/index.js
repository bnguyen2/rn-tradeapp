import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import MyAppText from 'components/MyAppText/index';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MyAppText>
        <Text style={styles.text}>This is awesome</Text>
      </MyAppText>

      <View style={styles.bottom}>
        <Button title="Sign up" onPress={() => navigation.navigate('SignupModal')} />
        <Button title="Sign in" onPress={() => navigation.navigate('SigninModal')} />
      </View>
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
  text: {
    color: '#fff',
  },
  bottom: {
    position: 'absolute',
    bottom: 100,
  },
});

export default HomeScreen;
