import Constants from 'expo-constants';
const { manifest } = Constants;

// ${manifest.debuggerHost.split(`:`).shift()}

export const apolloApi =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? `http://192.168.1.4:8080/v1/graphql`
    : `http://api.todo.com`;
