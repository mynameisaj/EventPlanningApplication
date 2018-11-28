import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Alert } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class VendorSignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {

      TextCompanyName: '',
      TextInputEmail: '',
      TextPassword: '',
      TextDescription: ''
    }

}
        InsertDataToServer = () =>{
 
 
 const { TextCompanyName }  = this.state ;
 const { TextInputEmail }  = this.state ;
 const { TextPassword }  = this.state ;
 const { TextDescription }  = this.state ;
    

 fetch('http://vibevents.x10host.com/restApi/VendorSignup.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    companyName: TextCompanyName,
    email: TextInputEmail,
    password: TextPassword, 
    description: TextDescription
 
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
            <Container>

              <Text style={styles.header}>VibEvents</Text>
                <Form style={styles.loginstyle}>

                    <Item floatingLabel>
                        <Label>Company Name</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextCompanyName => this.setState({TextCompanyName})}
 
                        />

                    </Item>

                     <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextInputEmail => this.setState({TextInputEmail})}
 
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

                    <Item floatingLabel>
                        <Label>Description</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={TextDescription => this.setState({TextDescription})}
                        />
                    </Item>

                   

                    <Button style={styles.registerbutton}
                        full
                        rounded
                        warning
                        onPress={this.InsertDataToServer} color="#2196F3" >
                
                        <Text style={{ color: 'white' }}>REGISTER AS A VENDOR</Text>
                    </Button>

                    <Button style={styles.gobackbutton}
                    full
                    rounded
                    primary
                    onPress={() => this.props.navigation.push('LoginForm')}
                    >
                    <Text style={{ color: 'white' }}>GO BACK</Text>
                    </Button>

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
    paddingLeft: 20,
    paddingRight: 20
  },
   header: {
    alignItems:'center',
    paddingTop: 30
  },
  header: {
    backgroundColor: '#00b3b3',
    color: 'white',
    textAlign:'center',
    fontSize: 30
  },
  registerbutton: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5
  },
  gobackbutton: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  }
});