import Constants from 'expo-constants';
const { manifest } = Constants;

export const aplloApi =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? `http://${manifest.debuggerHost.split(`:`).shift()}:8080/v1/graphql`
    : `http://api.todo.com`;
