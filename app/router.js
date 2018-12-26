import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import events from './screens/events';
import Vendors from './screens/Vendors';
import LoginForm from './screens/LoginForm';
import SignUpForm from './screens/SignUpForm';
import VendorSignUp from './screens/VendorSignUp';
import vendorLogin from './screens/vendorLogin';
import Startup from './screens/Startup';
import createLocation from './screens/createLocation';
import logout from './screens/logout';
import addServices from './screens/addServices';
import createEvent from './screens/createEvent';
import Profile from './screens/Profile';
import forgotpassworduser from './screens/forgotpassworduser';
import forgotpasswordvendor from './screens/forgotpasswordvendor';

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
            Startup: {
                screen: Startup,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            logout: {
                screen: logout,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
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

            SignUpForm: {
                screen: SignUpForm,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            createEvent: {
                screen: createEvent,
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
            createLocation: {
                screen: createLocation,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            addServices: {
                screen: addServices,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            forgotpassworduser: {
                screen: forgotpassworduser,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false,
                })
            },
            forgotpasswordvendor: {
                screen: forgotpasswordvendor,
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