import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewsScreen = () => {
  return (
    <SafeAreaView style={styles.content}>
      <View>
        <Text>todo</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    // flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default NewsScreen;
