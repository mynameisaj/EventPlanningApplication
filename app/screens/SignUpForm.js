import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class SignUpForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    signUpUser = (email, password) => {

        try {

            if (this.state.password.length < 6) {
                alert("Please enter atleast 6 characters")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <Container>

              <View style={styles.header}>
              <Text style={{color: '#005fad', fontSize: 25, fontWeight: 'bold', fontFamily: 'notoserif' }}>VibEvents</Text>
              </View>
                <Form style={styles.loginstyle}>

                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(name) => this.setState({ name })}
                        />

                    </Item>

                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({ email })}
                        />

                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Confirm Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(confirmpassword) => this.setState({ confirmpassword })}
                        />
                    </Item>

                    <Button style={styles.button}
                        full
                        rounded
                        primary
                        onPress={() => this.signUpUser(this.state.email, this.state.password)}
                    >
                        <Text style={{ color: 'white' }}> Register</Text>
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
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20
  },
   header: {
    alignItems:'center',
    paddingTop: 30
  },
  button: {
    marginTop: 100,
    marginLeft: 5,
    marginRight: 5
  }
});