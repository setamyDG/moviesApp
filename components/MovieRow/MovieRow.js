import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import CardCustom from '../CardCustom/CardCustom';

class MovieRow extends Component {
  viewMore = () => {
    Alert.alert(
      `PRODUCTION : ${this.props.movie.original_language}`,
      `DESCRIPTION : ${this.props.movie.overview}\n \n
       GENRE : ${this.props.movie.genre_ids}`,
    );
  };

  render() {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CardCustom
          title={this.props.movie.title}
          popularity={this.props.movie.popularity}
          vote_count={this.props.movie.vote_count}
          poster_path={this.props.movie.poster_path}
          onPress={this.viewMore}
        />
      </View>
    );
  }
}

export default MovieRow;
