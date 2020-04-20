import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const HomeScreen = ({ navigation }) => {
  const getAllPersonsQuery = useQuery(gql`
    query getPerson {
      person {
        first_name
        last_name
      }
    }
  `);

  // console.log(getAllPersonsQuery?.data);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is awesome</Text>

      <View style={styles.bottom}>
        <Button title="Sign in" onPress={() => navigation.navigate('SignupModal')} />
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

export default HomeScreen;
