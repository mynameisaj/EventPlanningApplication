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
       AsyncStorage.removeItem('sessionUsername', (err) => {
          AsyncStorage.removeItem('company', (err) => {
            this.props.navigation.navigate('Startup');
        });
        });
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

       
        return (

        
       

        <View style={styles.container}>

        
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