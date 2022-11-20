import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, IconButton, View } from 'react-native-paper';
import { leaderboardStyle, quizesLayout } from '../styles/base';
// import { QuestionsRoute } from './question';
import { useSettings } from '../mariadbendpoint/settings';
import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";

export const QuizesRoute = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: '#ffffff', width: '100%', height: '100%' };

  const t_data = useSettings('questions');
  const n_data = () => {
    const ques = [];
    for (let i = 0; i < 5; i++) {

      const RandomNumber = Math.floor(Math.random() * 3) + 1;
      if (RandomNumber === 1) {
        ques[i] = {
          question: t_data[i].question,
          optionA: t_data[i].answer_a,
          optionB: t_data[i].answer_b,
          optionC: t_data[i].answer_c,
          answer: t_data[i].answer_a,
        }
      }
      else if (RandomNumber === 2) {
        ques[i] = {
          question: t_data[i].question,
          optionA: t_data[i].answer_c,
          optionB: t_data[i].answer_a,
          optionC: t_data[i].answer_b,
          answer: t_data[i].answer_a,
        }
      }
      else {
        ques[i] = {
          question: t_data[i].question,
          optionA: t_data[i].answer_b,
          optionB: t_data[i].answer_c,
          optionC: t_data[i].answer_a,
          answer: t_data[i].answer_a,
        }
      }
    }
    return (ques);
  }
  console.log('n_data:', n_data);

  return (
    t_data ? <Provider style={leaderboardStyle.container}>
      <IconButton
        icon="brain"
        style={leaderboardStyle.icon}
        size={150}
        disabled={true}
      />
      <Text style={leaderboardStyle.title}>Quizzes</Text>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <QuizeSingleChoice
            containerStyle={{ backgroundColor: '#ffffff', width: '100%', height: '100%', marginLeft: '3%' }}
            questionTitleStyle={{ fontSize: 22, color: "#ca2039", alignItems: "center" }}
            responseStyle={{
              borderRadius: 15,
              backgroundColor: "#747c84",
              width: '100%',
              alignItems: "center"
            }}
            responseTextStyle={{ fontSize: 12, fontWeight: "normal", alignItems: "center" }}
            selectedResponseStyle={{
              borderRadius: 15,
              backgroundColor: "#ca2039",
            }}
            selectedResponseTextStyle={{
              fontSize: 14,
              fontWeight: "normal",
            }}
            responseRequired={true}
            nextButtonText={"Next"}
            nextButtonStyle={{ backgroundColor: "#ca2039" }}
            nextButtonTextStyle={{ color: "#FFF" }}
            prevButtonText={"Prev"}
            prevButtonStyle={{ backgroundColor: "#ca2039" }}
            prevButtonTextStyle={{ color: "#FFF" }}
            endButtonText={"Done"}
            endButtonStyle={{ backgroundColor: "#ca2039", marginRight: "4%" }}
            endButtonTextStyle={{ color: "#FFF" }}
            buttonsContainerStyle={{ marginTop: "auto" }}
            onEnd={(results) => {
              {
                console.log(results), hideModal()
              };
            }}
            data={n_data()}
          />

        </Modal>
      </Portal>
      <Button onPress={showModal} style={quizesLayout.item}> <Text style={quizesLayout.subtitle}>Daily Quiz</Text>
      </Button>
      <Button style={quizesLayout.item}> <Text style={quizesLayout.subtitle}>Monthly Quiz</Text>
      </Button>
    </Provider>
      : <></>
  );
};