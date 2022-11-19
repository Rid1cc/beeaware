import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import { leaderboardStyle } from "../styles/base";
import { useClient } from '../mariadbendpoint/client';


const User = ({ name, points }) => (
    <View style={leaderboardStyle.item}>
        <Text style={leaderboardStyle.subtitle}>
            {name}: {points}
        </Text>
    </View>
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






