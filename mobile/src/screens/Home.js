import React from 'react'
import {View, Text} from 'react-native'
import firebase from 'react-native-firebase'

const API = 'http://10.39.107.118:3000/users'

export default class Home extends React.PureComponent {
    state = {users: null}

    componentDidMount() {
        console.log(firebase.User)
    }

    render() {
        return (
            <View>
                <Text style={{color: 'white'}}> HomePage! Logged in as SOMEONE!!! </Text>
            </View>
        )
    }
}