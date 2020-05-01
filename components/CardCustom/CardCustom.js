import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card} from 'react-native-elements';
import PropTypes from 'prop-types';

const CardCustom = props => (
  <Card
    title={props.title}
    image={{uri: props.poster_path}}
    containerStyle={styles.container}
    imageStyle={styles.image}
    titleStyle={styles.title}>
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoText}>
        movie popularity: {props.popularity} movie votes: {props.vote_count}
      </Text>
    </View>
    <Button
      buttonStyle={{
        backgroundColor: 'black',
      }}
      title="VIEW MORE"
      onPress={props.onPress}
    />
  </Card>
);

export default CardCustom;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    elevation: 8,

  },
  infoText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  infoTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

CardCustom.propTypes = {
  popularity: PropTypes.number,
  vote_count: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
};
