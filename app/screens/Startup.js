import React, { Component } from 'react'; 
import { Text, AppRegistry, View, StyleSheet, Image, StatusBar, TextInput, Alert} from 'react-native';
import { Container, Content, Form, Input, 
Item, Button, Label, Header, Left, Right, Body, Title } from 'native-base';
import {AsyncStorage} from 'react-native';
export default class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {

     
      TextUserName: '',
      TextPassword: '',
      mysessionUsername:null
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
 
 const { TextUserName }  = this.state ;
 const { TextPassword }  = this.state ;
    

 fetch('http://vibevents.x10host.com/restApi/Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    username: TextUserName,
    password: TextPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
       // Alert.alert(this.state.sessionUsername);
        if(responseJson === "You Have Logged In") {
         this.saveKey(this.state.TextUserName);
         this.getKey();
        // Alert.alert(this.state.mysessionUsername);
          this.props.navigation.navigate('Home');
        }
        else {
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
}
    render() {
    return (

      <Container style={styles.container}>
      <Text style={styles.header}>VibEvents</Text>
      <StatusBar
            backgroundColor='#000000'
      />

        <Button
        full
        rounded
        primary
        style={styles.vendorbutton}
        onPress={() => { this.props.navigation.navigate('vendorLogin')}}
        >
        <Text style={{ color: 'white', fontSize: 20 }}>I AM A VENDOR</Text>
        </Button>

        <Text style={styles.eventtype}>Are you a user or vendor?</Text>

        <Button
        full
        rounded
        info
        style={styles.userbutton}
        onPress={() => { this.props.navigation.navigate('LoginForm')}}
        >
        <Text style={{ color: 'white', fontSize: 20 }}>I AM A USER</Text>
        </Button>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'column',
    //flex: 1
  },
  loginstyle: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 40,
  },
  eventtype: {
    textAlign: 'center',
    fontSize: 30
  },
  vendorbutton: {
    top: 250,
    marginLeft: 10,
    marginRight: 10,
    padding: 50,
    
  },
  userbutton: {
    top: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 50
  },
  header: {
    backgroundColor: '#00b3b3',
    color: 'white',
    textAlign:'center',
    fontSize: 30
  }
})