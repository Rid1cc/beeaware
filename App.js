import { StatusBar } from 'expo-status-bar';
import { styles } from './styles/base.js';
import React, {useEffect} from 'react';
import { Platform, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import keys from './constants/Keys';
import Parse from "parse/react-native.js";
import { Menu, BottomNavigation, Text} from 'react-native-paper';
import { LeaderboardRoute } from './scenes/leaderboard.js';
import { QuizesRoute } from './scenes/quizes';
import { SettingsRoute } from './scenes/settings';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { LoginScene } from './scenes/login';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  "colors": {
    "primary": "rgb(142, 78, 0)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 220, 193)",
    "onPrimaryContainer": "rgb(46, 21, 0)",
    "secondary": "rgb(115, 89, 67)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(255, 220, 193)",
    "onSecondaryContainer": "rgb(42, 23, 6)",
    "tertiary": "rgb(90, 98, 56)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(223, 232, 178)",
    "onTertiaryContainer": "rgb(24, 30, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(32, 27, 23)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(32, 27, 23)",
    "surfaceVariant": "rgb(242, 223, 209)",
    "onSurfaceVariant": "rgb(81, 68, 58)",
    "outline": "rgb(131, 116, 105)",
    "outlineVariant": "rgb(214, 195, 182)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(53, 47, 43)",
    "inverseOnSurface": "rgb(250, 239, 232)",
    "inversePrimary": "rgb(255, 183, 120)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(249, 242, 242)",
      "level2": "rgb(246, 237, 235)",
      "level3": "rgb(243, 232, 227)",
      "level4": "rgb(241, 230, 224)",
      "level5": "rgb(239, 227, 219)"
    },
    "surfaceDisabled": "rgba(32, 27, 23, 0.12)",
    "onSurfaceDisabled": "rgba(32, 27, 23, 0.38)",
    "backdrop": "rgba(58, 46, 37, 0.4)"
  }
};

export default function App() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'ranking', title: 'Leaderboard', focusedIcon: 'trophy', unfocusedIcon: 'trophy-outline'},
    { key: 'quizes', title: 'Quizzes', focusedIcon: 'brain' },
    { key: 'settings', title: 'Settings', focusedIcon: 'wrench', unfocusedIcon: 'wrench-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ranking: LeaderboardRoute,
    quizes: QuizesRoute,
    settings: SettingsRoute,
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
      <LoginScene/>
      <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          />
    </PaperProvider>
  );
}

