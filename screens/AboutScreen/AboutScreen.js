import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import BottomSignature from '../../components/BottomSignature/BottomSignature';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import DeviceDimensions from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

const AboutScreen = ({navigation}) => (
  <ImageBackground
    source={require('../../assets/images/2.jpeg')}
    style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.dummyText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </View>
    <ButtonCustom onPress={() => navigation.navigate('Home')} />
    <BottomSignature />
  </ImageBackground>
);

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 300,
    backgroundColor: Colors.black,
    opacity: 0.6,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: DeviceDimensions.deviceHeight,
    width: DeviceDimensions.deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    color: Colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
