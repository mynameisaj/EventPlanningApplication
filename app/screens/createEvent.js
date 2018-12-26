import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Alert } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Picker } from 'native-base'
import {AsyncStorage} from 'react-native';

export default class createEvent extends Component {
componentWillMount(){
        this.getKey1();
        this.getKey2();
    }

    constructor(props) {
        super(props)

        this.state = {

      
      eventType: 'Weddings',
      serviceoffered: 'Weddings Cakes',
      mysessionCompanyName:null

    };
    }
    onValueChange(value: string) {
    this.setState({
      eventType: value
    });

}
    onValueChange2(value: string) {
    this.setState({
      serviceoffered: value
    });

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
        SelectLocation = () =>{
 
 
 const { eventType }  = this.state ;
 const { serviceoffered }  = this.state ;
    

 fetch('http://vibevents.x10host.com/restApi/CreateEvent.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    switch: "Give me Your Locations",
    type: this.state.eventType
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        //Alert.alert(responseJson);
        
      }).catch((error) => {
        console.error(error);
      });
 
 
  }
    render() {
        return (

            <Container style={styles.container}>
              <Text style={styles.header}>VibEvents</Text>
                <Form style={styles.loginstyle}>

                    <Picker
                    note
                    mode="dropdown"
                    style={{ width: 200 }}
                    selectedValue={this.state.eventType}
                    onValueChange={this.onValueChange.bind(this)}
                    >
                    <Picker.Item label="Weddings" value="Weddings" />
                    <Picker.Item label="Birthdays" value="Birthdays" />
                    <Picker.Item label="Bridal Showers" value="Bridal Showers" />
                    <Picker.Item label="Baby Showers" value="Baby Showers" />
                    <Picker.Item label="Corporate Events" value="Corporate Events" />
                    <Picker.Item label="Catering" value="Catering" />
                    <Picker.Item label="Graduation Parties" value="Graduation Parties" />
                    <Picker.Item label="Meetings" value="Meetings" />
                    <Picker.Item label="Appreciations Events" value="Appreciations Events" />
                    <Picker.Item label="Board Meetings" value="Board Meetings" />
                    <Picker.Item label="Investor Meetings" value="Investor Meetings" />
                    </Picker>

                    <Button
                    full
                    rounded
                    primary
                    onPress={this.SelectLocation}
                    >
                    <Text style={{ color: 'white' }}>SELECT</Text>
                    </Button>

                    <Item floatingLabel>
                    <Label>Location Name</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(TextPassword) => this.setState({ TextPassword })}
                    />
                    </Item>

                    <Item floatingLabel>
                    <Label>Date</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(TextPassword) => this.setState({ TextPassword })}
                    />
                    </Item>

                    <Picker
                    note
                    mode="dropdown"
                    style={{ width: 200 }}
                    selectedValue={this.state.serviceoffered}
                    onValueChange={this.onValueChange2.bind(this)}
                    >
                    <Picker.Item label="Weddings" value="Weddings" />
                    <Picker.Item label="Birthdays" value="Birthdays" />
                    <Picker.Item label="Bridal Showers" value="Bridal Showers" />
                    <Picker.Item label="Baby Showers" value="Baby Showers" />
                    <Picker.Item label="Corporate Events" value="Corporate Events" />
                    <Picker.Item label="Catering" value="Catering" />
                    <Picker.Item label="Graduation Parties" value="Graduation Parties" />
                    <Picker.Item label="Meetings" value="Meetings" />
                    <Picker.Item label="Appreciations Events" value="Appreciations Events" />
                    <Picker.Item label="Board Meetings" value="Board Meetings" />
                    <Picker.Item label="Investor Meetings" value="Investor Meetings" />
                    </Picker>
                   
                    <View style={{flexDirection: 'row'}}>

                    <Button style={styles.gobackbutton}
                    full
                    rounded
                    primary
                    onPress={() => this.props.navigation.push('Home')}
                    >
                    <Text style={{ color: 'white' }}>GO BACK</Text>
                    </Button>

                    <Button style={styles.registerbutton}
                        full
                        rounded
                        warning
                        onPress={this.InsertDataToServer} color="#2196F3" >
                
                        <Text style={{ color: 'white' }}>CREATE AN EVENT</Text>
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