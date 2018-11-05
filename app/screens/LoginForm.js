import React, { Component } from 'react'; 
import { Text, View, StyleSheet, Image } from 'react-native';
import { Container, Content, Form, Input, 
Item, Button, Label, Header, Left, Right, Body, Title } from 'native-base';

export default class LoginForm extends Component {

   constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: ''
        })
    }

    login = (email, password) => {

        try {
          
            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
                console.log(user)

            })
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    render() {
    return (
      <Container style={styles.container}>
      <View style={{alignItems: 'center'}}> 
        <Image source = {{uri: 'https://cdn.discordapp.com/attachments/443166986923671552/506300017364041739/HomeScreenLogo.png'}}
               style={styles.image} />
      </View>
      <View style={styles.header}>
      <Text style={{color: '#005fad', fontSize: 25, fontWeight: 'bold', fontFamily: 'notoserif' }}>VibEvents</Text>
      </View>

        <Form style={styles.loginstyle}>
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
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(password) => this.setState({ password })}
        />
        </Item>

        <Button
        full
        rounded
        success
        style={styles.button}
        onPress={() => this.props.navigation.navigate('Home')}
        >
        <Text style={{ color: 'white' }}>Log In</Text>
        </Button>

        <Button
        full
        rounded
        info
        style={styles.button}
        onPress={() => this.props.navigation.navigate('SignUpForm')}
        >
        <Text style={{ color: 'white' }}>Sign Up</Text>
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
    padding: 30
  },
  button: {
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5
  },
  image: {
    width: 150,
    height: 150
  },
  header: {
    alignItems:'center'
  }
})