import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { Card, Header } from 'react-native-elements';

export default class Vendors extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
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
  }
});