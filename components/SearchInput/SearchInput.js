import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const SearchInput = props => (
  <TextInput
    style={styles.inputContainer}
    placeholder="SEARCH MOVIE"
    onChangeText={props.onChangeText}
  />
);

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
});

SearchInput.propTypes = {
  onChangeText: PropTypes.func,
};
