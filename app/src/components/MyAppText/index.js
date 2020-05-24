import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomTextFont = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomTextFont;
