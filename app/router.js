import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Explore from './screens/explore';
import Vendors from './screens/Vendors';

import LoginForm from './screens/LoginForm';
import SignUpForm from './screens/SignUpForm';

import Profile from './screens/Profile';
import EditBook from './screens/editBook';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
             tabBarIcon: ({tintColor}) =>(
                <Icon name='md-home' size={30} />
                )
        },
    },
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
             tabBarIcon: ({tintColor}) =>(
                <Icon name='md-globe' size={30} />
                )
        },
    },
    Vendors: {
        screen: Vendors,
        navigationOptions: {
            tabBarLabel: 'Vendors',
             tabBarIcon: ({tintColor}) =>(
                <Icon name='md-pricetag' size={30} />
                )
        },
    },
    MyProfile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) =>(
                <Icon name='md-person' size={30} />
                )
        },
    },
});

export const AuthenticationNavigator = createStackNavigator({
    Login: {
        screen:LoginForm
    }
});

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            AuthenticationNavigator: {
                screen: LoginForm,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            Tabs: {
                screen: Tabs,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            }
        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );
};