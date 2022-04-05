/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {AuthContext} from '../store/auth-context';
import {Center, Box, Text, HStack} from 'native-base';
import {Colors} from '../ColorPalete/styles';
import {ImageBackground} from 'react-native';

export default function Splash({navigation}) {
  const authCtx = useContext(AuthContext);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}
      resizeMode="cover">
      {/* bg={Colors.bgColor} */}
      <Center flex="1" w="100%">
        <HStack>
          <Text color={Colors.mainColor} fontSize="40" fontWeight={'500'}>
            {'<'}
          </Text>
          <Text color="#fff" fontSize="40" fontWeight={'500'}>
            Quizo
          </Text>
          <Text color={Colors.mainColor} fontSize="40" fontWeight={'500'}>
            {' />'}
          </Text>
        </HStack>
      </Center>
      {navigateFromSplash(navigation)}
    </ImageBackground>
  );

  function navigateFromSplash() {
    setTimeout(() => {
      const nextScreen = authCtx.token ? 'Tracks' : 'Onboarding';
      navigation.navigate(nextScreen);
    }, 2000);
  }
}
