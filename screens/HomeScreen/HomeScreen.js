import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header/Header';
import MovieRow from '../../components/MovieRow/MovieRow';
import InputContainer from '../../components/InputContainer/InputContainer';
import {apiUrl, poster_path_url} from '../../constants/ApiConstants';
import DeviceDimensions from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.searchData('john');
  }

  searchData(searchTerm) {
    fetch(`${apiUrl}&query=${searchTerm}`)
      .then(data => data.json())
      .then(data => {
        const results = data.results;
        const movieRows = [];
        console.log(results);
        results.forEach(movie => {
          movie.poster_path = poster_path_url + movie.poster_path;
          const movies = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movies);
        });
        this.setState({rows: movieRows});
      });
  }

  searchChangeHandler = searchTerm => {
    this.setState({searchTerm: searchTerm});
    this.searchData(searchTerm);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <StatusBar hidden={true} />
        <SafeAreaView style={{width: DeviceDimensions.deviceWidth, height: DeviceDimensions.deviceHeight}}>
          <View style={styles.container}>
            <Header />
            <InputContainer
              onTextChange={this.searchChangeHandler.bind(this)}
            />
            <ScrollView style={{flex: 1, marginTop: '2%', marginBottom: '10%'}}>
              {this.state.rows}
            </ScrollView>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: DeviceDimensions.deviceHeight,
    width: DeviceDimensions.deviceWidth,
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
});
