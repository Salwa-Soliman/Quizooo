/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {AuthContext} from '../store/auth-context';
import {Center, Text, HStack} from 'native-base';
import {Colors} from '../ColorPalete/styles';
import {ImageBackground, StatusBar} from 'react-native';
import Quizo from '../components/Quizo';
export default function Splash({navigation}) {
  const authCtx = useContext(AuthContext);
  const nextScreen = authCtx.isAuthenticated ? 'NavigationTabs' : 'Onboarding';
  // console.log(nextScreen);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/bg.jpg')}
      resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="black" />
      {/* bg={Colors.bgColor} */}
      <Center flex="1" w="100%">
        <Quizo fontSize="40" />
      </Center>
      {navigateFromSplash()}
    </ImageBackground>
  );

  function navigateFromSplash() {
    // console.log(nextScreen);
    setTimeout(() => {
      navigation.navigate(nextScreen);
    }, 2000);
  }
}
