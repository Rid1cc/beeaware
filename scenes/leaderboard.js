import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import { leaderboardStyle } from "../styles/base";
import { useClient } from '../mariadbendpoint/client';
import { Surface, Text } from 'react-native-paper';


const User = ({ name, points }) => (
    <Surface style={leaderboardStyle.item}>
        <Text style={leaderboardStyle.subtitle}>
            {name}: {points}
        </Text>
    </Surface>
);




export const LeaderboardRoute = () => {
    const renderUser = ({ item }) => (
        <User
            name={item.user_login}
            points={item.user_points}
        />
    );

    const data = useClient('leaderboard');




    return (
        <ScrollView style={leaderboardStyle.container}>
            <IconButton
                icon="podium"
                style={leaderboardStyle.icon}
                size={150}
                disabled={true}
            />
            <Text style={leaderboardStyle.title}>Leaderboard</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.user_login}
                renderItem={renderUser}
            />
        </ScrollView>
    );
}






