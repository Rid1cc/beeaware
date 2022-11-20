import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, IconButton, View } from 'react-native-paper';
import { leaderboardStyle, quizesLayout } from '../styles/base';
import { QuestionsRoute } from './question';

export const QuizesRoute = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: '#ffffff', width: '100%', height: '100%', padding: '20%' };

  return (
    <Provider style={leaderboardStyle.container}>
      <IconButton
        icon="brain"
        style={leaderboardStyle.icon}
        size={150}
        disabled={true}
      />
      <Text style={leaderboardStyle.title}>Quizzes</Text>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          {/*<QuestionsRoute/>*/}
        </Modal>
      </Portal>
      <Button onPress={showModal} style={quizesLayout.item}> <Text style={quizesLayout.subtitle}>Daily Quiz</Text>
      </Button>
      <Button onPress={showModal} style={quizesLayout.item}> <Text style={quizesLayout.subtitle}>Monthly Quiz</Text>
      </Button>
    </Provider>
  );
};