import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import BottomSignature from '../../components/BottomSignature/BottomSignature';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';

const {width, height} = Dimensions.get('window');
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
    backgroundColor: 'black',
    opacity: 0.6,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
