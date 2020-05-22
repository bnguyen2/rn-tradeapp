import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AuthContext from 'context/authContext';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  const getAllPersonsQuery = useQuery(gql`
    query getPerson {
      person {
        first_name
        last_name
      }
    }
  `);

  console.log(getAllPersonsQuery?.data);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>todo</Text>
      <Button title="signout" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'red',
  },
  text: {
    color: '#fff',
  },
});

export default AccountScreen;
