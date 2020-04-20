import React, { useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import authApi from 'api/authApi';
import { navigate } from 'helpers/navigationRef';

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
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);

  const signup = async (firstName, lastName, email, password) => {
    const response = await authApi.post('/signup', { firstName, lastName, email, password });
    await AsyncStorage.setItem('token', response.data.token);
    // navigate('Account');
    dispatch({ type: 'SIGN_UP', payload: response.data.token });
  };

  const signout = () => {
    dispatch({ type: 'SIGN_OUT', payload: 'todo' });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signup,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
