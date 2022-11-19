import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { quizesStyles } from '../styles/base.js';
// hours spent to debug this shit - 0.5
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Daily Quiz',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Monthly Quiz',
  },
];

const Item = ({ title }) => (
  <View style={quizesStyles.item}>
    <Text style={quizesStyles.title}>{title}</Text>
  </View>
);

export const QuizesRoute = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={quizesStyles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

