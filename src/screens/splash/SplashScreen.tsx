import {ImageBackground} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.replace('SignIn');
  }, 2000);
  return (
    <ImageBackground
      source={require('../../assets/images/splashscreen.jpg')}
      style={{flex: 1}}
      resizeMode="cover"
    />
  );
};

export default SplashScreen;
