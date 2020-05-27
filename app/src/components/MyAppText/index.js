import React from 'react';
import { Text } from 'react-native';
import { css } from 'styled-components/native';

const CustomTextFont = ({ children }) => {
  return (
    <Text
      css={css`
        font-family: Roboto;
        color: #fff;
        font-size: 16px;
      `}
    >
      {children}
    </Text>
  );
};

export default CustomTextFont;
