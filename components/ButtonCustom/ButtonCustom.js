import React from 'react';
import {Button, Icon} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const ButtonCustom = props => (
  <View style={{top: '5%'}}>
    <Button
      raised={true}
      buttonStyle={styles.buttonStyle}
      icon={
        <Icon name="arrow-left" size={15} type="font-awesome" color="white" />
      }
      title="  BACK AND SEARCH MOVIE"
      onPress={props.onPress}
    />
  </View>
);

export default ButtonCustom;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});

ButtonCustom.propTypes = {
  onPress: PropTypes.func,
};
