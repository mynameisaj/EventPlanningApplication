import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  Alert
} from 'react-native';
import { Card, Button, Header, Left, Body, Right, Title, Form, Label, Item, Input} from 'native-base';
import { AsyncStorage } from 'react-native';
export default class Profile extends Component {

componentWillMount(){
        this.getKey().then(()=>{
        this.InsertDataToServer()
    });
        
    }

constructor(props) {
        super(props)

this.state = {

      
      mysessionUsername:null,
      username: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      Address: '',
      parseMe: null
      
    }

}

async getKey() {
    try {
       AsyncStorage.getItem('sessionUsername').then((value) => {
    this.setState({"mysessionUsername": value});
})
.then(res => {
   // Alert.alert(this.state.mysessionUsername);
});
     
      
      //await this.setState({ lchMoteurRch: AsyncVal });
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
}

async saveKey(value) {
    try {
      await AsyncStorage.setItem('sessionUsername', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
}
        InsertDataToServer = () =>{
 
 
 //const { TextUserName }  = this.state ;

    

 fetch('http://vibevents.x10host.com/restApi/ProfilePage.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    username: this.state.mysessionUsername,
    
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
       
        if(this.state.username === '') {
          this.InsertDataToServer()
        }
        this.state.parseMe = responseJson;
        this.state.parseMe = this.state.parseMe.split(" ");
        this.setState({
            "username": this.state.parseMe[0],
            "firstName": this.state.parseMe[1],
            "lastName": this.state.parseMe[2],
            "emailAddress": this.state.parseMe[3],
            "phoneNumber": this.state.parseMe[4],
            "Address": this.state.parseMe[5]
        });

      }).catch((error) => {
        console.error(error);
      });

}


  render() {
    return (
      <View>

      <Header style={styles.header}>
            <Left>
            <Title>Account</Title>
            </Left>
            <Right>
            </Right>
      </Header>

      <StatusBar
                backgroundColor='#000000'
      />

      <Card>
      <Text style={styles.textStyle}>Username: {this.state.username}</Text>
      <Text style={styles.textStyle}>First Name: {this.state.firstName}</Text>
      <Text style={styles.textStyle}>Last Name: {this.state.lastName}</Text>
      <Text style={styles.textStyle}>Email Address: {this.state.emailAddress}</Text>
      <Text style={styles.textStyle}>Phone Number: {this.state.phoneNumber}</Text>
      <Text style={styles.textStyle}>Address: {this.state.Address}</Text>
      </Card>
     
      
      
      <Button
        full
        rounded
        success
        style={styles.button}
        onPress={() => this.props.navigation.navigate('LoginForm')}
        >
        <Text style={{ color: 'white' }}>LOG OUT</Text>
      </Button>
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
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  header: {
    backgroundColor: '#00b3b3',
    color: 'white'
  }
};
