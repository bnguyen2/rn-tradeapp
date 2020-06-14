import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { css, ThemeContext } from 'styled-components/native';
import AuthContext from 'context/authContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const { colors } = useContext(ThemeContext);

  const { data, loading } = useQuery(gql`
    query get_person {
      person {
        first_name
        last_name
      }
    }
  `);

  console.log(data);

  return (
    <>
      <SafeAreaView
        css={css`
          background-color: ${colors.darkNavy};
          padding-left: 16px;
          padding-right: 16px;
          padding-bottom: 20px;
        `}
      />

      <ScrollView
        css={css`
          background-color: ${colors.darkNavy};
          padding-left: 16px;
          padding-right: 16px;
        `}
      >
        <View
          css={css`
            align-items: center;
            margin-bottom: 50px;
          `}
        >
          <Image source={require('assets/png/user-icon.png')} />

          <Text
            css={css`
              font-family: Roboto;
              font-size: 20px;
              margin-top: 10px;
              height: 20px;

              color: #fff;
              text-transform: capitalize;
            `}
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              `${data?.person?.[0]?.first_name} ${data?.person?.[0]?.last_name}`
            )}
          </Text>

          <Text
            css={css`
              font-family: Roboto;
              font-size: 16px;
              color: #fff;
              margin-top: 6px;
            `}
          >
            todo@gmail.com
          </Text>
        </View>

        <View
          css={css`
            align-items: center;
            border-top-color: ${colors.navy};
            border-bottom-color: ${colors.navy};
            border-bottom-width: 1px;
            border-top-width: 1px;

            padding-top: 20px;
            padding-bottom: 20px;

            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <Text
            css={css`
              font-size: 20px;
              color: #fff;
            `}
          >
            Settings
          </Text>

          <Image source={require('assets/png/arrow-icon.png')} />
        </View>

        <View
          css={css`
            align-items: center;
            border-bottom-color: ${colors.navy};
            border-bottom-width: 1px;

            padding-top: 20px;
            padding-bottom: 20px;

            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <Text
            css={css`
              font-size: 20px;
              color: #fff;
            `}
          >
            Security
          </Text>

          <Image source={require('assets/png/arrow-icon.png')} />
        </View>

        <View
          css={css`
            align-items: center;
            border-bottom-color: ${colors.navy};
            border-bottom-width: 1px;

            padding-top: 20px;
            padding-bottom: 20px;

            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <Text
            css={css`
              font-size: 20px;
              color: #fff;
            `}
          >
            Support
          </Text>

          <Image source={require('assets/png/arrow-icon.png')} />
        </View>

        <View
          css={css`
            align-items: center;
            border-bottom-color: ${colors.navy};
            border-bottom-width: 1px;

            padding-top: 20px;
            padding-bottom: 20px;

            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <Text
            css={css`
              font-size: 20px;
              color: #fff;
            `}
          >
            Lorem Ipsum
          </Text>

          <Image source={require('assets/png/arrow-icon.png')} />
        </View>

        <View
          css={css`
            padding-top: 20px;
            padding-bottom: 20px;
            align-self: flex-start;
          `}
        >
          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={signout}
          >
            <Text
              css={css`
                font-size: 20px;
                color: ${colors.red};
              `}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default AccountScreen;
