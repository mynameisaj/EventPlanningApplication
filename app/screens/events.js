import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Header, Left, Right, Title } from 'native-base';

export default class events extends Component {
  render() {
    return (

      <View>
      <Header style={styles.header}>
            <Left>
            <Title>MyEvents</Title>
            </Left>
            <Right>
            </Right>
      </Header>

      <StatusBar
          backgroundColor='#000000'
      />

      <Text style={styles.message}>Plan your first event today!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00b3b3',
    color: 'white'
  },
  message: {
    textAlign: 'center',
    fontSize: 30,
    padding: 70
  }
});