import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Card, Button } from 'native-base';

export default class Profile extends Component {
  render() {
    return (
      <View>
      <Card>
      <Text style={styles.textStyle}>Name:</Text>
      <Text style={styles.textStyle}>Email Address:</Text>
      <Text style={styles.textStyle}>Phone Number:</Text>
      </Card>

      <Card>
      <Button
        full
        rounded
        success
        style={styles.button}
        >
        <Text style={{ color: 'white' }}>Sign Out</Text>
        </Button>
      </Card>
      </View>
    );
  }
}

const styles = {
    textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  button: {
    margin: 15
  },
};
