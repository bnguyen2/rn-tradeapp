import React, { useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';
import serverApi from 'api/serverApi';
import { getUserIdFromDecodeToken } from 'helpers/string';

const AuthContext = React.createContext();

const initState = {
  token: null,
  userId: '',
  errorMessage: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return { errorMessage: '', token: action.payload.token, userId: action.payload.userId };
    case 'SIGN_OUT':
      return { errorMessage: '', token: null, userId: '' };
    case 'SIGN_IN':
      return { errorMessage: '', token: action.payload.token, userId: action.payload.userId };
    case 'ERROR':
      return { ...state, errorMessage: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);

  const signup = async (firstName, lastName, email, password) => {
    try {
      const response = await serverApi.post('/signup', { firstName, lastName, email, password });
      const token = response.data.token;
      const decodedToken = jwt_decode(token);
      const userId = getUserIdFromDecodeToken(decodedToken);

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user_id', String(userId));

      dispatch({ type: 'SIGN_UP', payload: { token: response.data.token, userId } });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.response.data.error });
    }
  };

  const signin = async (email, password) => {
    try {
      const response = await serverApi.post('/signin', { email, password });
      const token = response.data.token;
      const decodedToken = jwt_decode(token);
      const userId = getUserIdFromDecodeToken(decodedToken);

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user_id', String(userId)); // async storage only allows strings

      dispatch({ type: 'SIGN_IN', payload: { token: response.data.token, userId } });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.response.data.error });
    }
  };

  const signout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user_id');

    dispatch({ type: 'SIGN_OUT' });
  };

  const tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('user_id');

    if (token) {
      dispatch({ type: 'SIGN_IN', payload: { token, userId: Number(userId) } });
    }
  };

  const clearErrorMessage = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signup,
        signin,
        signout,
        tryLocalSignin,
        clearErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
