import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  appName: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 17,
  }
})

export default class MovieScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Movie App</Text>
      </View>
    )
  }
}