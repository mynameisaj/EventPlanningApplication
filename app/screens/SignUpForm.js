import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Alert } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class SignUpForm extends Component {

    constructor(props) {
        super(props)

        this.state = {

      TextUserName: '',
      TextInputEmail: '',
      TextFirstName: '',
      TextLastName: '',
      TextPassword: '',
      TextInputPhoneNumber: '',
      TextInputAddress: '' 
    }

}
        InsertDataToServer = () =>{
 
 
 const { TextUserName }  = this.state ;
 const { TextInputEmail }  = this.state ;
 const { TextFirstName }  = this.state ;
 const { TextLastName }  = this.state ;
 const { TextPassword }  = this.state ;
 const { TextInputPhoneNumber }  = this.state ;
 const { TextInputAddress } = this.state ;
    

 fetch('http://vibevents.x10host.com/restApi/Signup.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    username: TextUserName,
    email: TextInputEmail,
    firstName: TextFirstName,
    lastName: TextLastName,
    password: TextPassword, 
    phoneNumber: TextInputPhoneNumber,
    address: TextInputAddress
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
 
      }).catch((error) => {
        console.error(error);
      });
 
 
  }
    render() {
        return (
            <Container style={styles.container}>
              <Text style={styles.header}>VibEvents</Text>
                <Form style={styles.loginstyle}>
                    
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextUserName => this.setState({TextUserName})}
 
                        />

                    </Item>

                     <Item floatingLabel>
                        <Label>First Name</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextFirstName => this.setState({TextFirstName})}
 
                        />

                    </Item>

                    <Item floatingLabel>
                        <Label>Last Name</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextLastName => this.setState({TextLastName})}
                        />

                    </Item>

                    <Item floatingLabel>
                        <Label>Email Address</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextInputEmail => this.setState({TextInputEmail})}
                        />

                    </Item>

                     <Item floatingLabel>
                        <Label>Phone Number</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextInputPhoneNumber => this.setState({TextInputPhoneNumber})}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Address</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextInputAddress => this.setState({TextInputAddress})}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextPassword => this.setState({TextPassword})}
                        />
                    </Item>

                   
                    <View style={{flexDirection: 'row'}}>

                    <Button style={styles.gobackbutton}
                    full
                    rounded
                    primary
                    onPress={() => this.props.navigation.push('LoginForm')}
                    >
                    <Text style={{ color: 'white' }}>GO BACK</Text>
                    </Button>

                    <Button style={styles.registerbutton}
                        full
                        rounded
                        warning
                        onPress={this.InsertDataToServer} color="#2196F3" >
                
                        <Text style={{ color: 'white' }}>REGISTER AS A USER</Text>
                    </Button>

                    </View>
                </Form>
                </Container>
                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF'
    },
    loginstyle: {
  },
    header: {
    backgroundColor: '#00b3b3',
    color: 'white',
    textAlign:'center',
    fontSize: 30
  },
    registerbutton: {
        padding: 20,
        marginTop: 10,
        marginLeft: 65
  },
    gobackbutton: {
        padding: 20,
        marginTop: 10,
        marginLeft:10        
  }
});