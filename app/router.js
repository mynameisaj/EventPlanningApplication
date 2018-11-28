import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import events from './screens/events';
import Vendors from './screens/Vendors';
import creatEvent from './screens/creatEvent';
import LoginForm from './screens/LoginForm';
import SignUpForm from './screens/SignUpForm';
import VendorSignUp from './screens/VendorSignUp';
import vendorLogin from './screens/vendorLogin';


import Profile from './screens/Profile';

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
    Events: {
        screen: events,
        navigationOptions: {
            tabBarLabel: 'MyEvents',
             tabBarIcon: ({tintColor}) =>(
                <Icon name='md-calendar' size={30} />
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
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({tintColor}) =>(
                <Icon name='md-person' size={30} />
                )
        },
    },
});

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            LoginForm: {
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
            },

            creatEvent: {
                screen: creatEvent,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            SignUpForm: {
                screen: SignUpForm,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            vendorLogin: {
                screen: vendorLogin,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            VendorSignUp: {
                screen: VendorSignUp,
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