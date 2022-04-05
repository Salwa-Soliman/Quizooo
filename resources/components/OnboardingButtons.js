/* eslint-disable prettier/prettier */
import {Button, View, VStack, Box} from 'native-base';
import React from 'react';
import {Colors} from '../ColorPalete/styles';

export default function OnboardingButtons({navigation}) {
  return (
    <Box w="80%">
      <Button
        underlayColor={Colors.underlayColor}
        bg={Colors.mainColor}
        mb={'2'}
        onPress={() => navigation.navigate('SignUp')}>
        Get Started
      </Button>
      <Button
        underlayColor="transparent"
        bg="transparent"
        _text={{
          color: Colors.mainColor,
        }}
        onPress={() => navigation.navigate('SignIn')}>
        I already have an accout
      </Button>
    </Box>
  );
}
