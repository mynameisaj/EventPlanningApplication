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

        <Card style={{marginTop: 30}}>
        <Text>Company Name: Julia's Bakery</Text>
        <Text>Email: juliabakes@gmail.com</Text>
        <Text>Description: Baked Goods</Text>
        </Card>

        <Card>
        <Text>Company Name: Whole Foods</Text>
        <Text>Email: wholefoods@gmail.com</Text>
        <Text>Description: Catered Food</Text>
        </Card>

        <Card>
        <Text>Company Name: Taco Bell</Text>
        <Text>Email: tacobell@gmail.com</Text>
        <Text>Description: Mexican-Inspired Food</Text>
        </Card>

        <Card>
        <Text>Company Name: Poland Spring</Text>
        <Text>Email: polandspring@gmail.com</Text>
        <Text>Description: Water</Text>
        </Card>

        <Card>
        <Text>Company Name: Champion Pizza</Text>
        <Text>Email: champion@gmail.com</Text>
        <Text>Description:</Text>
        </Card>

        <Card>
        <Text>Company Name: Breads Bakery</Text>
        <Text>Email: breadsbakes@gmail.com</Text>
        <Text>Description: Baked Goods, Cakes</Text>
        </Card>

        <Card>
        <Text>Company Name: Golden Terrace</Text>
        <Text>Email: goldenterrace@gmail.com</Text>
        <Text>Description: Venue</Text>
        </Card>

        <Card>
        <Text>Company Name: WeWork</Text>
        <Text>Email: wework@gmail.com</Text>
        <Text>Description: Venue</Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    margin: 10
  },
  header: {
    backgroundColor: '#00b3b3',
    color: 'white'
  },
  cardstyle: {

  }
});