import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View
} from 'react-native';

import BookcaseItem from './bookcaseItem';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: 'Birthday Parties',
                    //author: 'J. K. Rowling',
                    thumbnail: 'https://bit.ly/2Sh2Fpu'
                },
                {
                    id: 2,
                    title: 'Bridal Showers',
                    //author: 'J. R. R. Tolkien',
                    thumbnail: 'https://bit.ly/2Sh2Fpu'
                },
                {
                    id: 3,
                    title: 'Graduation Party',
                    //author: 'George Orwell',
                    thumbnail: 'https://bit.ly/2Sh2Fpu'
                }
            ]
        }
    }

    _renderItem = ({item}) => (
        <BookcaseItem
            id={item.id}
            title={item.title}
            author={item.author}
            thumbnail={item.thumbnail}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.books}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});