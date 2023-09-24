import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const Login = () => {
  const navigation = useNavigation();

  const handleLoginPress = async () => {
    try {
      await GoogleSignin.hasPlayServices(); // Check if Play Services are available
      const userInfo = await GoogleSignin.signIn(); // Trigger Gmail login

      // userInfo contains user details after successful login
      console.log("User Info:", userInfo);

      navigation.navigate('Dashboard');
    } catch (error:any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the login process
        console.log("Login process cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Login process is already in progress
        console.log("Login process already in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play Services not available on the device
        console.log("Play Services not available");
      } else {
        // Other errors
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <Button title="Login with Gmail" onPress={handleLoginPress} />
  );
};

export default Login;
