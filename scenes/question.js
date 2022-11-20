// import React from "react";

// import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";
// import { leaderboardStyle } from "../styles/base";
// import { useSettings } from '../mariadbendpoint/settings';
// import { getRandomValues } from "@react-native-module/get-random-values";


// export const QuestionsRoute = () => {
//     const t_data = useSettings('questions');
//     const n_data = () => {
//         const ques = [];
//         for (let i = 0; i < 6; i++) {

//             const RandomNumber = Math.floor(Math.random() * 3) + 1;
//             if (RandomNumber === 1) {
//                 ques[i] = {
//                     question: t_data[i].question,
//                     optionA: t_data[i].answer_a,
//                     optionB: t_data[i].answer_b,
//                     optionC: t_data[i].answer_c,
//                     answer: t_data[i].answer_a,
//                 }
//             }
//             else if (RandomNumber === 2) {
//                 ques[i] = {
//                     question: t_data[i].question,
//                     optionA: t_data[i].answer_c,
//                     optionB: t_data[i].answer_a,
//                     optionC: t_data[i].answer_b,
//                     answer: t_data[i].answer_a,
//                 }
//             }
//             else {
//                 ques[i] = {
//                     question: t_data[i].question,
//                     optionA: t_data[i].answer_b,
//                     optionB: t_data[i].answer_c,
//                     optionC: t_data[i].answer_a,
//                     answer: t_data[i].answer_a,
//                 }
//             }
//         }
//         return (ques);
//     }
//     console.log('n_data:', n_data);
//     return (
//         t_data ? <QuizeSingleChoice
//             containerStyle={{ backgroundColor: '#ffffff', width: '100%', height: '100%', marginLeft: '3%' }}
//             questionTitleStyle={{ fontSize: 22, color: "#ca2039", alignItems: "center" }}
//             responseStyle={{
//                 borderRadius: 15,
//                 backgroundColor: "#747c84",
//                 width: '100%',
//                 alignItems: "center"
//             }}
//             responseTextStyle={{ fontSize: 12, fontWeight: "normal", alignItems: "center" }}
//             selectedResponseStyle={{
//                 borderRadius: 15,
//                 backgroundColor: "#ca2039",
//             }}
//             selectedResponseTextStyle={{
//                 fontSize: 14,
//                 fontWeight: "normal",
//             }}
//             responseRequired={true}
//             nextButtonText={"Next"}
//             nextButtonStyle={{ backgroundColor: "#ca2039" }}
//             nextButtonTextStyle={{ color: "#FFF" }}
//             prevButtonText={"Prev"}
//             prevButtonStyle={{ backgroundColor: "#ca2039" }}
//             prevButtonTextStyle={{ color: "#FFF" }}
//             endButtonText={"Done"}
//             endButtonStyle={{ backgroundColor: "#ca2039", marginRight: "4%" }}
//             endButtonTextStyle={{ color: "#FFF" }}
//             buttonsContainerStyle={{ marginTop: "auto" }}
//             onEnd={(results) => {
//                 {
//                     console.log(results), hideModal()
//                 };
//             }}
//             data={n_data()}
//         />
//             : <></>
//     );
// };
