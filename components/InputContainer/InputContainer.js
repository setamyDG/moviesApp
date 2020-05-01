import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import SearchInput from '../SearchInput/SearchInput';
import PropTypes from 'prop-types';
const {width} = Dimensions.get('window');

const InputContainer = props => (
  <View style={styles.inputContainer}>
    <SearchInput onChangeText={props.onTextChange} />
  </View>
);

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    width: width / 1.3,
    height: '10%',
    top: '-5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    marginBottom: -30,
    borderWidth: 2,
    borderColor: 'gray',
  },
});

InputContainer.propTypes = {
  onTextChange: PropTypes.func,
};
