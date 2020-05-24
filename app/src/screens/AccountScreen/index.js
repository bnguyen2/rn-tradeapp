import React, { useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AuthContext from 'context/authContext';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import serverApi from 'api/serverApi';

import MyAppText from 'components/MyAppText';

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

  // useEffect(() => {
  //   const fetch = async () => {
  //     const response = await serverApi.get('/test');
  //     console.log('response: ', response.data);
  //   };

  //   fetch();
  // }, []);

  return (
    <View style={styles.container}>
      <MyAppText>
        <Text style={styles.text}>todo</Text>
      </MyAppText>

      <Button style={styles.button} title="signout" onPress={signout} />
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
    fontSize: 20,
  },
  button: {
    fontFamily: 'Roboto-Bold',
  },
});

export default AccountScreen;
