import React, { useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import authApi from 'api/authApi';

const AuthContext = React.createContext();

const initState = {
  token: null,
  errorMessage: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return { errorMessage: '', token: action.payload };
    case 'SIGN_OUT':
      return { errorMessage: '', token: null };
    case 'SIGN_IN':
      return { errorMessage: '', token: action.payload };
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
      const response = await authApi.post('/signup', { firstName, lastName, email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'SIGN_UP', payload: response.data.token });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.response.data.error });
    }
  };

  const signin = async (email, password) => {
    try {
      const response = await authApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'SIGN_IN', payload: response.data.token });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.response.data.error });
    }
  };

  const signout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'SIGN_OUT' });
  };

  const tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch({ type: 'SIGN_IN', payload: token });
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
