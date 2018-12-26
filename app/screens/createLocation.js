import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Alert } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Picker } from 'native-base'
import {AsyncStorage} from 'react-native';

export default class createLocation extends Component {
componentWillMount(){
        this.getKey1();
        this.getKey2();
    }

    constructor(props) {
        super(props)

        this.state = {

      locationName: '',
      LocationAddress: '',
      ownerEmail: '',
      attendees: '',
      Description: '',
      eventType: '',
      selected: 'Weddings',
      mysessionCompanyNamenUsername:null,
      mysessionCompanyName:null

    };
    }
    onValueChange(value: string) {
    this.setState({
      selected: value
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
        InsertDataToServer = () =>{
 
 
 const { locationName }  = this.state ;
 const { LocationAddress }  = this.state ;
 const { ownerEmail }  = this.state ;
 const { attendees }  = this.state ;
 const { Description }  = this.state ;
 const { selected }  = this.state ;
    

 fetch('http://vibevents.x10host.com/restApi/CreateLocation.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    owner: this.state.mysessionCompanyName,
    locationName: locationName,
    address: LocationAddress,
    email: ownerEmail,
    maxAttendess: attendees,
    description: Description, 
    items: selected
 
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
                        <Label>Location Name</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={locationName => this.setState({locationName})}
 
                        />

                    </Item>

                     <Item floatingLabel>
                        <Label>Location Address</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={LocationAddress => this.setState({LocationAddress})}
 
                        />

                    </Item>

                    <Item floatingLabel>
                        <Label>Enter the owner's email for this location</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={ownerEmail => this.setState({ownerEmail})}
                        />

                    </Item>

                    <Item floatingLabel>
                        <Label>Email the number of max attendees</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={attendees => this.setState({attendees})}
                        />

                    </Item>

                     <Item floatingLabel>
                        <Label>Enter a Description of this Venue</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={Description => this.setState({Description})}
                        />
                    </Item>

                    <Picker
                    note
                    mode="dropdown"
                    style={{ width: 200 }}
                    selectedValue={this.state.selected}
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
                   
                    <View style={{flexDirection: 'row'}}>


                    <Button style={styles.registerbutton}
                        full
                        rounded
                        warning
                        onPress={this.InsertDataToServer} color="#2196F3" >
                
                        <Text style={{ color: 'white' }}>ADD LOCATION</Text>
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