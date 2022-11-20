//import React in our code
import React from 'react';
import LoginScreen from "react-native-login-screen";
import { loginStyle } from "../styles/base";
import { View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import {usePostData} from '../mariadbendpoint/uploadData';



export const LoginScene = () => {


  const [visible, setVisible] = React.useState(true);
  const [visibleSignup, setVisibleSignup] = React.useState(false);
  const [visibleNickname, setVisibleNickname] = React.useState(false);

  const hideModal = () => setVisible(false);
  const hideModalSignup = () => setVisibleSignup(false);
  const hideModalNickname = () => setVisibleNickname(false);
  const containerStyle = { backgroundColor: '#ffffff', width: '100%', height: '100%' };

  var staticEmail = '';
  var staticPasswrd = '';

  const handleSignup = () => {
    register_data.user_email = staticEmail;
    register_data.user_password = staticPasswrd;
  };
  
  
  const register_data = {
    user_login: '',
    user_email: '',
    user_password: '',
  }

  const login_data = {
    user_email: '',
    user_password: ''
  }

  const [fetchData, fetchFn] = usePostData('login', login_data);


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
            onLoginPress={() => {
              fetchFn();
              data = JSON.parse(fetchData);
              console.log('test:' ,data);
              console.log(data.valid_password)
              if (data.valid_password){
                setVisible(false);
              }
            }}
            onSignupPress={() => setVisibleSignup(true)}
            onEmailChange={(email: string) => {login_data.user_email=email}}
            onPasswordChange={(password: string) => {login_data.user_password=password}}
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
            onLoginPress={() => { 
              setVisibleSignup(false);
              handleSignup();
              setVisibleNickname(true); 
              console.log(register_data);
              //const register_data = register_data;
              
              //register_data.user_email = email;
              //register_data.password = password;
            }}
            onSignupPress={() => { }}
            onEmailChange={(email: string) => { 
              staticEmail = email;
              console.log(staticEmail);
            }}
            onPasswordChange={(password: string) => { 
              staticPasswrd = password;
              console.log(staticPasswrd);
            }}
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
            onLoginPress={() => {
              //let new_data;
              setVisibleNickname(false);
              console.log(register_data);
            }}
            onSignupPress={() => { }}
            onEmailChange={(email: string) => {  }}
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
