import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { goHome } from './Navigation'

export default class App extends React.Component {
  async componentDidMount() {
    try {
      goHome()
    } catch (err) {
      console.log('Err', err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
