import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar
} from 'react-native';
import { Card, Button, Header, Left, Body, Right, Title} from 'native-base';

export default class Vendors extends Component {
  render() {
    return (
       
       

      <ScrollView style={styles.container}>

        <Header style={styles.header}>
            <Left>
            <Title>Vendors</Title>
            </Left>
            <Right>
            </Right>
        </Header>

        <StatusBar
                backgroundColor='#000000'
        />

        <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

        <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

        <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

        <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

         <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

         <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

         <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

        <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

        <Card title="McDonald's">
        <Text>Address: Alex's Heart</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>

        <Card title="Whole Foods">
        <Text>Address:</Text>
        <Text>Phone Number:</Text>
        <Text>Hours of Operation:</Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    margin: 10
  },
  header: {
    backgroundColor: '#00b3b3',
    color: 'white'
  }
});