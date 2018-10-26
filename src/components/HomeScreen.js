/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './Header'
import Banner from './Banner'
import MovieList from './MovieList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
})

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Banner />
        <MovieList />
      </View>
    )
  }
}
