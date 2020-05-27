import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { css } from 'styled-components/native';
import AuthContext from 'context/authContext';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import serverApi from 'api/serverApi';

import MyAppText from 'components/MyAppText';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  const getAllPersonsQuery = useQuery(gql`
    query getPerson {
      person {
        first_name
        last_name
      }
    }
  `);

  // console.log(getAllPersonsQuery?.data);

  // useEffect(() => {
  //   const fetch = async () => {
  //     const response = await serverApi.get('/test');
  //     console.log('response: ', response.data);
  //   };

  //   fetch();
  // }, []);

  return (
    <View
      css={css`
        flex: 1;
        background-color: #000;
        align-items: center;
        justify-content: center;
      `}
    >
      <MyAppText>
        <Text
          css={css`
            font-size: 20px;
          `}
        >
          todo
        </Text>
      </MyAppText>

      <Button
        css={css`
          font-family: Roboto;
        `}
        title="signout"
        onPress={signout}
      />
    </View>
  );
};

export default AccountScreen;
