import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput, 
    Alert 
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Card, CardItem } from 'native-base';
import {AsyncStorage} from 'react-native';
export default class Home extends Component {

    componentWillMount(){
        this.getKey1();
        this.getKey2();
    }

constructor(props) {
        super(props)

        this.state = {

     
      TextUserName: '',
      TextPassword: '',
      mysessionUsername:null,
      mysessionCompanyName:null
    }

}

async getKey1() {
    try {
       AsyncStorage.getItem('sessionUsername').then((value) => {
    this.setState({"mysessionUsername": value});
})
.then(res => {
   
}).catch((error)=>{
     console.log("Api call error");
     alert(error.message);
  });
     
      
      //await this.setState({ lchMoteurRch: AsyncVal });
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
}

async getKey2() {
    try {
       AsyncStorage.getItem('company').then((value) => {
    this.setState({"mysessionCompanyName": value});
})
.then(res => {
   // Alert.alert(this.state.mysessionUsername);
});
     
      
      //await this.setState({ lchMoteurRch: AsyncVal });
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
}



    render() {

        let button;
        let button2;
    if (this.state.mysessionCompanyName !== null) {
               
    button = <Button
                full
                rounded
                success
                hasText 
                transparent
                onPress={() => this.props.navigation.navigate('createLocation')}>
            <Text>Create A Location</Text>
            
            </Button>;

    button2 = <Button
                full
                rounded
                success
                hasText 
                transparent
                onPress={() => this.props.navigation.navigate('addServices')}>
            <Text>Add The Services You Offer</Text>
            
            </Button>;
    }
    else {
        button = <Button
                full
                rounded
                success
                hasText 
                transparent
                onPress={() => this.props.navigation.navigate('createEvent')}>
            <Text>Create Your Event</Text>
            
            </Button>;
    }
        return (

        
       

        <View style={styles.container}>

        {/*<TextInput
        style={styles.formInput}
        placeholder="Enter key you want to save!"
        value={this.state.mysessionUsername}
        />
        For Every Single Page Where You need to know if a user
        is logged in use the 'this.state.mysessionUsername'

        if this.state.mysessionUsername isn't null then the person is logged in then 
        do something with it if it is null then the person is not 
        logged in, so do something*/}

        <Header style={styles.header}>
            <Body><Title>VibEvents</Title></Body>
            <Right>
            </Right>
        </Header>
            
        <StatusBar
            backgroundColor='#000000'
        />
        <Text style={styles.caption}>Welcome to VibEvents!</Text>
        {button}
        {button2}

        <Button
        full
        rounded
        success
        style={styles.button}
        onPress={() => this.props.navigation.navigate('logout')}
        >
        <Text style={{ color: 'white' }}>LOG OUT</Text>
        </Button>
       
        </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    },
header: {
    backgroundColor: '#00b3b3',
    color: 'white'
  },
caption: {
    textAlign: 'center',
    fontSize: 30,
    padding: 40
  },
  button: {
    marginLeft: 30,
    marginRight: 30
  }
});