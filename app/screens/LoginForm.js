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
        <Form style={styles.loginstyle}>
        <Item floatingLabel>
        <Label>Username</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(TextUserName) => this.setState({ TextUserName })}
        />
        </Item>

        <Item floatingLabel>
        <Label>Password</Label>
        <Input
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(TextPassword) => this.setState({ TextPassword })}
        />
        </Item>

        <Button
        full
        rounded
        primary
        style={styles.button}
        onPress={this.InsertDataToServer}
        >
        <Text style={{ color: 'white' }}>LOG IN</Text>
        </Button>

        <Button
        full
        rounded
        info
        style={styles.userbutton}
        onPress={() => { this.props.navigation.navigate('SignUpForm')}}
        >
        <Text style={{ color: 'white' }}>CREATE USER ACCOUNT</Text>
        </Button>

        <Button
        full
        rounded
        danger
        style={styles.userbutton}
        onPress={() => { this.props.navigation.navigate('forgotpassworduser')}}
        >
        <Text style={{ color: 'white' }}>FORGOT PASSWORD?</Text>
        </Button>


        {/*<Button
        full
        rounded
        success
        style={styles.vendorbutton}
        onPress={() => { this.props.navigation.navigate('VendorSignUp')}}
        >
        <Text style={{ color: 'white' }}>CREATE VENDOR ACCOUNT</Text>
        </Button>

        *<Button
        full
        rounded
        danger
        
        style={styles.vendorbutton}
        onPress={() => { this.props.navigation.navigate('vendorLogin')}}
        >
        <Text style={{ color: 'white' }}>LOG IN AS A VENDOR</Text>
        </Button>
        */}
      
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