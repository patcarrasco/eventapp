import React from 'react'

import { StyleSheet, View, Text, TextInput, ImageBackground, Dimensions, TouchableOpacity, AsyncStorage } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import background from '../../assets/evbackground.jpg'

import firebase from 'react-native-firebase'



const {width: WIDTH} = Dimensions.get('window')

class Auth extends React.PureComponent {
    state = {email: '', password: '', errorMessage: null}

   usernameHandler = (e) => {
        this.setState({
            email: e
        })
    }

    passwordHandler = (e) => {
        this.setState({
            password: e
        })
    }

    loginHandler = () => {
        const {email, password} = this.state

        // actual authentication with rails, THEN firebase authentication

        firebase
            .auth()
            .signInWithCustomToken(token)
            .then(() => {
                console.log(firebase.User)
                // this.setToken()
                this.props.navigation.navigate('App')
            })
            .catch(error => this.setState({errorMessage: error.message}))
    }

    setToken = async (data) => {
        const token = data.token
        console.log(token)
        // AsyncStorage.setItem('token', token)
    }

    render() {
        console.log(this.state)
        return (
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>Anik's App</Text>
                </View>

                <View style={styles.inputContainer}> 
                    <Icon name={'ios-person'} size={30} color={'rgba(225, 225, 225, 0.7)'} style={styles.inputIcon}/>
                    <TextInput 
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor={'rgba(225, 225, 225, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={this.usernameHandler}
                    />
                </View>

                <View style={styles.inputContainer}> 
                    <Icon name={'ios-lock'} size={30} color={'rgba(225, 225, 225, 0.7)'} style={styles.inputIcon}/>
                    <TextInput 
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor={'rgba(225, 225, 225, 0.7)'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        onChangeText={this.passwordHandler}

                    />
                </View>

                <TouchableOpacity style={styles.logButton} onPress={this.loginHandler}>
                    <Text style={styles.logButtonText}> Log In </Text>
                </TouchableOpacity>

 
            </ImageBackground>
        )
    }
} 

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        alignItems: 'center'
    },
    logoText: {
        color: 'white',
        fontSize: 50,
        fontWeight: '500',
        marginTop: 0,
        opacity: 0.6
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
        width: WIDTH - 50,
        height: 50,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    logButton: {
        width: WIDTH - 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    logButtonText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default Auth