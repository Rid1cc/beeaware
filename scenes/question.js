import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, IconButton, View } from 'react-native-paper';
import { useClient } from '../mariadbendpoint/client';


export const QuestionsRoute =()=>{
    data = useClient('/questions')
    const new_data = [];
    const num = 0;
    for (question in data){
        if (question.day == 1){
            new_data[num]=question
            num++;
        }
    }
    const test=new_data[0];
    return(
        <View><Text>chuj</Text>
        </View>
    );
}