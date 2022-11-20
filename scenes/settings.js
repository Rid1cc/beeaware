import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { leaderboardStyle } from "../styles/base";
import { Button, TextInput } from 'react-native-paper';
import { useClient } from '../mariadbendpoint/client';

export const SettingsRoute = () => {

    const data = useClient('settings');
    const test = data[0];
    console.log('test', test);

    const [login, onChangeLogin] = React.useState(test.user_login);
    const [password, onChangePassword] = React.useState(test.user_password);


    // if(test){
    //     const [login, onChangeLogin] = React.useState(test.user_login);
    //     const [password, onChangePassword] = React.useState(test.user_password);
    // } else {

    // }
    console.log('at', test, login, test.user_login)
        ; return (
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