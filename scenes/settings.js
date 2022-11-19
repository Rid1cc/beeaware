import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { leaderboardStyle } from "../styles/base";
import { Button, TextInput } from 'react-native-paper';
import { useSettings } from '../mariadbendpoint/settings';

export const SettingsRoute = () => {

    const data = useSettings('settings');
    const test = data[1];
    console.log(test);
    
    const [login, onChangeLogin] = React.useState('test.user_login');
    const [password, onChangePassword] = React.useState('test.user_password');
    
    try {
        const [login, onChangeLogin] = React.useState(test.user_login);
        const [password, onChangePassword] = React.useState(test.user_password);
    } catch (e) {
        console.log(e)
    }
    return (
        <View style={leaderboardStyle.container}>
            <Image
                source={require('../images/logo.png')}
                style={leaderboardStyle.icon}
            />
            <Text style={leaderboardStyle.title}>Settings</Text>
            <TextInput
                onChangeText={onChangeLogin}
                value={login}
            />
            <Button
                mode="elevated"
                style={styles.button}
            >Change Login</Button>
            <TextInput
                value={password}
                onChangeText={onChangePassword}
            />
            <Button
                mode="elevated"
                style={styles.button}
            >Change Password</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 100,
        height: 100,
    },
    button: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 10,
        color: '#ffffff',
    },
});