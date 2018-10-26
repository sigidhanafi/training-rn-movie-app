import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'

import bannerImage from '../images/banner-movie-1.jpeg'
import posterImage from '../images/poster-movie-1.jpeg'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#000000',
  },
  bannerImage: {
    width: deviceWidth,
    height: 300,
  },
  bannerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  posterContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  posterImage: {
    width: 120,
    height: 180,
  },
  posterDescriptionContainer: {
    flex: 1,
    marginLeft: 10,
  },
  movieTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieDescription: {
    color: '#FFFFFF',
  },
  buttonViewDetail: {
    backgroundColor: '#EA0000',
  }
})

export default class Banner extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image source={bannerImage} style={styles.bannerImage} resizeMode={'cover'} resizeMethod={'resize'} />
        </View>
        <View style={styles.posterContainer}>
          <View>
            <Image source={posterImage} style={styles.posterImage} resizeMode={'cover'} resizeMethod={'resize'} />
          </View>
          <View style={styles.posterDescriptionContainer}>
            <Text style={styles.movieTitle}>Johnny English</Text>
            <Text style={styles.movieDescription}>
              Pascal Sauvage (John Malkovich), a villain intent on 
              stealing Britain's Crown Jewels, has murdered the country's 
              top undercover agents, and mediocre spy Johnny English (Rowan Atkinson) ...
            </Text>
          </View>
        </View>
      </View>
    )
  }
}