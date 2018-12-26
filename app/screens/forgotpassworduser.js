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
    

 fetch('http://vibevents.x10host.com/restApi/reset.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    username: TextUserName,
    type: "user"
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
       // Alert.alert(this.state.sessionUsername);
        
          Alert.alert(responseJson);
        
 
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

      	<Text style={styles.message}>Did you forget your user account password?</Text>
        <Form style={styles.loginstyle}>
        <Item floatingLabel>
        <Label>Enter your username</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(TextUserName) => this.setState({ TextUserName })}
        />
        </Item>

        <Button
        full
        rounded
        success
        style={styles.userbutton}
        onPress={this.InsertDataToServer}
        >
        <Text style={{ color: 'white' }}>RESET PASSWORD</Text>
        </Button>
      
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'column',
    //flex: 1
  },
  message: {
  	textAlign: 'center',
  	fontSize: 25,
  	marginTop: 10
  },
  loginstyle: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 40,
  },
  button: {
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5
  },
  userbutton: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },
  vendorbutton: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },
  header: {
    backgroundColor: '#00b3b3',
    color: 'white',
    textAlign:'center',
    fontSize: 30
  }
})