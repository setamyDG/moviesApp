import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchInput from '../SearchInput/SearchInput';
import PropTypes from 'prop-types';
import DeviceDimensions from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

const InputContainer = props => (
  <View style={styles.inputContainer}>
    <SearchInput onChangeText={props.onTextChange} />
  </View>
);

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.white,
    width: DeviceDimensions.deviceWidth / 1.3,
    height: '10%',
    top: '-5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    marginBottom: -30,
    borderWidth: 2,
    borderColor: Colors.gray,
  },
});

InputContainer.propTypes = {
  onTextChange: PropTypes.func,
};
