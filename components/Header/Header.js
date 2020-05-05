import React from 'react';
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import DeviceDimensions from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

const Header = () => (
  <ImageBackground
    style={styles.background}
    source={require('../../assets/images/bg.jpg')}>
    <Text style={styles.title}>THE MOVIE DB</Text>
    <View style={{flexDirection: 'row', top: '5%'}}>
      <Icon
        containerStyle={{marginRight: 25}}
        name="facebook-square"
        type="font-awesome"
        color="white"
        size={30}
      />
      <Icon name="instagram" type="font-awesome" color="white" size={30} />
      <Icon
        containerStyle={{marginLeft: 25}}
        name="snapchat-square"
        type="font-awesome"
        color="white"
        size={30}
      />
    </View>
  </ImageBackground>
);

export default Header;

const styles = StyleSheet.create({
  background: {
    width: DeviceDimensions.deviceWidth,
    height: DeviceDimensions.deviceHeight / 2.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: Colors.white,
    fontWeight: 'bold',
    opacity: 1,
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
