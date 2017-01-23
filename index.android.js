/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import MoveList from './app/component/MoveList'
import MovieList from './app/component/MovieList'
class TopMovie extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MovieList/>
      </View>
    );
  }
}



AppRegistry.registerComponent('TopMovie', () => TopMovie);
