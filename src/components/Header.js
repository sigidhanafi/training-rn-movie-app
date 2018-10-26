import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 17,
  }
})

export default class Header extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Movie App</Text>
      </View>
    )
  }
}