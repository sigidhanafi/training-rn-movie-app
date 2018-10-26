import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'

import posterImage from '../images/poster-movie-1.jpeg'

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#000000',
  },
  headerSection: {
    flexDirection: 'row',
    margin: 10,
  },
  sectionTitle: {
    flex: 1,
    alignSelf: 'flex-start',
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
  },
  sectionLink: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  sectionLinkText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  bodySection: {
    
  },
  posterImage: {
    marginHorizontal: 10,
    width: 150,
    height: 220,
  },
})

export default class Header extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.sectionTitle}>Popular Movie</Text>
          <View style={styles.sectionLink}>
            <Text style={styles.sectionLinkText}>Lihat Semua</Text>
          </View>
        </View>
        <ScrollView style={styles.bodySection} horizontal>
          <Image source={posterImage} style={styles.posterImage} resizeMode={'cover'} resizeMethod={'resize'} />
          <Image source={posterImage} style={styles.posterImage} resizeMode={'cover'} resizeMethod={'resize'} />
          <Image source={posterImage} style={styles.posterImage} resizeMode={'cover'} resizeMethod={'resize'} />
          <Image source={posterImage} style={styles.posterImage} resizeMode={'cover'} resizeMethod={'resize'} />
        </ScrollView>
      </View>
    )
  }
}