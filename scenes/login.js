//import React in our code
import React from 'react';
import LoginScreen from "react-native-login-screen";
import { loginStyle } from "../styles/base";
import { View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';



export const LoginScene = () => {


  const [visible, setVisible] = React.useState(true);
  const [visibleSignup, setVisibleSignup] = React.useState(false);
  const [visibleNickname, setVisibleNickname] = React.useState(false);

  const hideModal = () => setVisible(false);
  const hideModalSignup = () => setVisibleSignup(false);
  const hideModalNickname = () => setVisibleNickname(false);
  const containerStyle = { backgroundColor: '#ffffff', width: '100%', height: '100%' };

  return (
    <View>
      {/*Here we will return the view when state is true 
        and will return false if state is false*/}
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <LoginScreen
            logoImageSource={require("../assets/logo.gif")}
            style={loginStyle.panel}
            logoImageStyle={loginStyle.logo}
            onLoginPress={() => setVisible(false)}
            onSignupPress={() => setVisibleSignup(true)}
            onEmailChange={(email: string) => { }}
            onPasswordChange={(password: string) => { }}
            disableSocialButtons={true}
            loginButtonStyle={loginStyle.button}
            loginTextStyle={loginStyle.loginText}
          />
        </Modal>
        <Modal visible={visibleSignup} onDismiss={hideModalSignup} contentContainerStyle={containerStyle}>
          <LoginScreen
            logoImageSource={require("../assets/logo.gif")}
            style={loginStyle.panel}
            logoImageStyle={loginStyle.logo}
            onLoginPress={() => { setVisibleSignup(false), setVisibleNickname(true) }}
            onSignupPress={() => { }}
            onEmailChange={(email: string) => { }}
            onPasswordChange={(password: string) => { }}
            disableSocialButtons={true}
            loginButtonStyle={loginStyle.button}
            loginTextStyle={loginStyle.loginText}
            loginButtonText={"Register"}
            disableSignup={true}
            disableDivider={true}
          />
        </Modal>
        <Modal visible={visibleNickname} onDismiss={hideModalNickname} contentContainerStyle={containerStyle}>
          <LoginScreen
            logoImageSource={require("../assets/logo.gif")}
            style={loginStyle.panel}
            logoImageStyle={loginStyle.logo}
            onLoginPress={() => setVisibleNickname(false)}
            onSignupPress={() => { }}
            onEmailChange={(email: string) => { }}
            onPasswordChange={(password: string) => { }}
            disableSocialButtons={true}
            loginButtonStyle={loginStyle.button}
            loginTextStyle={loginStyle.loginText}
            loginButtonText={"Set Nickname"}
            disableSignup={true}
            disableDivider={true}
            disablePasswordInput={true}
            emailPlaceholder={"Nickname"}
          />
        </Modal>
      </Portal>
    </View>

  );
};
