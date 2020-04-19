import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LoginScreen = ({ navigation }) => {
  const getAllPersonsQuery = useQuery(gql`
    query get_person {
      person {
        first_name
        last_name
      }
    }
  `);

  console.log(getAllPersonsQuery?.data);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good asdfasdfman</Text>

      <View style={styles.bottom}>
        <Button title="Sign in" onPress={() => navigation.navigate('LoginModal')} />
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
    borderWidth: 10,
    borderColor: 'red',
  },
  text: {
    color: '#fff',
  },
  bottom: {
    position: 'absolute',
    bottom: 100,
  },
});

export default LoginScreen;
