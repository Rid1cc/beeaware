import React, { Component, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { leaderboardStyle } from "../styles/base";
import { Button, TextInput } from 'react-native-paper';
import { useSettings } from '../mariadbendpoint/settings';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export const WaterCounterRoute = () => {

    const [progressWater, setProgressWater] = React.useState(0);
    const [mililiters, setMililiters] = React.useState(0);
    const water = React.useState(0);
    const dailygoal = Math.max(2500 - mililiters, 0);
    const date = new Date();
    var day = date.getDate();
    const date2 = new Date();
    var day2 = date2.getDate();
   
   
    
    const handleMlilitersSubstract = () => {
        if (mililiters > 0){
            setMililiters(mililiters - 100);
        }
        else{
            setMililiters(mililiters-mililiters);}}

        useEffect(async() => {
            const stored = await AsyncStorage.getItem('mililiters');       
            if(stored) {
                setMililiters(Number(stored));
            } }, []);

        useEffect(async() => {
            const stored2 = await AsyncStorage.getItem('progressWater');       
            if(stored2) {
                setProgressWater(Number(stored2));
            }}, []);

        useEffect(async() => {
            const stored3 = await AsyncStorage.getItem('date');       
            if(stored3) {
                setProgressWater(Number(stored3));
            }}, []);
            
        
        const mySetmililiters = (delta) => {const newValue = mililiters + delta ;AsyncStorage.setItem('mililiters', newValue.toString());  setMililiters(newValue) ; }         
        const mySetprogresWater = (delta) => {const newValue2 = progressWater + delta; AsyncStorage.setItem('progressWater', newValue2.toString());  setProgressWater(newValue2) ; }         
        const mySetdate = () => {const newValue3 = day; AsyncStorage.setItem('day', newValue3.toString());  setProgressWater(newValue3) ; }         

    
    try {
      
    } catch (e) {
        console.log(e)
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/logo.png')}
                style={leaderboardStyle.icon}
            />
            <Text style={leaderboardStyle.title}>WaterCounter</Text>
            <Text style={styles.siema}>Water drunk today: {mililiters} ml</Text>
            <Text style={styles.siema}>Left to daily goal: {dailygoal} ml</Text>

            <ProgressBar progress={progressWater} color={MD3Colors.error50} />
            <Button
                mode="elevated"
                style={styles.button}
                onPress={() => {mySetprogresWater(0.04), mySetmililiters(100)}}>Add 100 ml</Button>
             <Button
                mode="elevated"
                style={styles.button}
                onPress={() => {setProgressWater(progressWater - 0.04), handleMlilitersSubstract()}}>Substract 100 ml</Button>
            <Button
                mode="elevated"
                style={styles.button}
                onPress={() => {setProgressWater(progressWater === 0), mySetmililiters(- mililiters)}}>Reset</Button>
           
        
            <Button
                mode="elevated"
                style={styles.minibutton}
                onPress={()=>{window.alert("How much water you need depends on a lot of things and varies from person to person. For adults, the general recommendation from The U.S. National Academies of Sciences, Engineering, and Medicine is about: 11.5 cups (2.7 liters) a day for woman and 15.5 cups (3.7 liters) a day for men. We chose 2.5l for an optimal and achievable amount")}}>?</Button>    
        </View>
     
    );
  

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        
    },
    siema:{
        padding: 10,
        backgroundColor: '#ca2039',
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 10,
        textAlign: "center",

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 100,
        height: 100,
    },
    minibutton:{
        textAlign: "center",
        width: 50,
        height: 50,
        color: '#000000',
        marginVertical: 8,
        marginHorizontal: 15,
        padding: 1,



    },
    button: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 10,
        color: '#ffffff',
    },
    progressBar: {
        height: 40,
   flexDirection: "row",
   width: '100%',
   backgroundColor: 'white',
   borderColor: '#000',
   borderWidth: 3,
   borderRadius: 20,
   
      },
    
});
