import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Card, CardItem, Alert } from 'native-base';
import {AsyncStorage} from 'react-native';
export default class Home extends Component {

    componentWillMount(){
        this.getKey();
    }

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
   
}).catch((error)=>{
     console.log("Api call error");
     alert(error.message);
  });
     
      
      //await this.setState({ lchMoteurRch: AsyncVal });
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
}

    render() {
        return (
        <View style={styles.container}>

        <TextInput
        style={styles.formInput}
        placeholder="Enter key you want to save!"
        value={this.state.mysessionUsername}
        />
        {/*For Every Single Page Where You need to know if a user
        is logged in use the 'this.state.mysessionUsername'

        if this.state.mysessionUsername isn't null then the person is logged in then 
        do something with it if it is null then the person is not 
        logged in, so do something*/}

        <Header style={styles.header}>
            <Body><Title>VibEvents</Title></Body>
            <Right>
            <Button hasText transparent
              onPress={() => this.props.navigation.navigate('creatEvent')}>
            <Text>CreatEvent</Text>
            </Button>
            </Right>
        </Header>
            
        <StatusBar
            backgroundColor='#000000'
        />
       <Text style={styles.caption}>Welcome to VibEvents!</Text>
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
    padding: 70
  }
});