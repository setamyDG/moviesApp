import React from 'react';
import {StyleSheet, Text} from 'react-native';

const BottomSignature = () => (
  <Text style={styles.text}>
    Application made by Daniel Gola for recruitment task from Company Flow2Code
    in Poznan
  </Text>
);

export default BottomSignature;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 12,
    top: '10%',
    textAlign: 'center',
  },
});
