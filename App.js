import { StatusBar } from 'expo-status-bar';
import { styles } from './styles/base.js';
import React, { useEffect } from 'react';
import { Platform, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import keys from './constants/Keys';
import Parse from "parse/react-native.js";
import { Menu, BottomNavigation, Text } from 'react-native-paper';
import { LeaderboardRoute } from './scenes/leaderboard.js';
import { QuizesRoute } from './scenes/quizes';
import { SettingsRoute } from './scenes/settings';
import { WaterCounterRoute } from './scenes/watercounter';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { LoginScene } from './scenes/login';
import { ForumRoute } from './scenes/forum';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  "colors": {
    "primary": "rgb(187, 17, 48)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 218, 217)",
    "onPrimaryContainer": "rgb(64, 0, 9)",
    "secondary": "rgb(119, 86, 86)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(64, 0, 9)",
    "onSecondaryContainer": "rgb(44, 21, 21)",
    "tertiary": "rgb(117, 90, 47)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 222, 174)",
    "onTertiaryContainer": "rgb(40, 25, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(32, 26, 26)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(32, 26, 26)",
    "surfaceVariant": "rgb(244, 221, 220)",
    "onSurfaceVariant": "rgb(82, 67, 67)",
    "outline": "rgb(133, 115, 114)",
    "outlineVariant": "rgb(215, 193, 193)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(54, 47, 46)",
    "inverseOnSurface": "rgb(251, 238, 237)",
    "inversePrimary": "rgb(255, 179, 179)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(252, 239, 245)",
      "level2": "rgb(250, 232, 238)",
      "level3": "rgb(248, 225, 232)",
      "level4": "rgb(247, 223, 230)",
      "level5": "rgb(246, 218, 226)"
    },
    "surfaceDisabled": "rgba(32, 26, 26, 0.12)",
    "onSurfaceDisabled": "rgba(32, 26, 26, 0.38)",
    "backdrop": "rgba(59, 45, 45, 0.4)"
  }
};

export default function App() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'quizes', title: 'Quizzes', focusedIcon: 'brain' },
    { key: 'ranking', title: 'Leaderboard', focusedIcon: 'trophy', unfocusedIcon: 'trophy-outline' },
    { key: 'settings', title: 'Settings', focusedIcon: 'wrench', unfocusedIcon: 'wrench-outline' },
    { key: 'watercounter', title: 'Watercounter', focusedIcon: 'water', unfocusedIcon: 'water-outline' },
    { key: 'forums', title: 'Forum', focusedIcon: 'account-multiple' },

  ]);

  const renderScene = BottomNavigation.SceneMap({
    ranking: LeaderboardRoute,
    quizes: QuizesRoute,
    settings: SettingsRoute,
    forums: ForumRoute,
    watercounter: WaterCounterRoute,
  });


  useEffect(() => {
    //Database entry
    const createInstallation = async () => {
      const Installation = Parse.Object.extend(Parse.Installation);
      const installation = new Installation();

      installation.set("deviceType", Platform.OS);

      await installation.save();
    }

    createInstallation();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <LoginScene />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor={'#ffffff'}
        inactiveColor={'#ffffff'}
        barStyle={{ backgroundColor: 'rgb(187, 17, 48)' }}
      />
    </PaperProvider>
  );
}

