import React from 'react'
import {ActivityIndicator, AsyncStorage, StatusBar, View} from 'react-native'

export default class AuthLoading extends React.PureComponent {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // grab token from ASYNC
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token')
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle= 'default' />
            </View>
        );
    }
}