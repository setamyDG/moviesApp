import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header/Header';
import MovieRow from '../../components/MovieRow/MovieRow';
import InputContainer from '../../components/InputContainer/InputContainer';
const {width, height} = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {};
    this.apiKey = '1bd87bc8f44f05134b3cff209a473d2e';
    this.performSearch('john');
  }
  performSearch(searchTerm) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=${
        this.apiKey
      }&query=${searchTerm}`,
    )
      .then(data => data.json())
      .then(data => {
        const results = data.results;
        const movieRows = [];
        results.forEach(movie => {
          movie.poster_path =
            'https://image.tmdb.org/t/p/w500' + movie.poster_path;
          const movies = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movies);
        });
        this.setState({rows: movieRows});
      });
  }

  searchChangeHandler = searchTerm => {
    this.setState({searchTerm: searchTerm});
    this.performSearch(searchTerm);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <StatusBar hidden={true} />
        <SafeAreaView style={{width: width, height: height}}>
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
    height: height,
    width: width,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
