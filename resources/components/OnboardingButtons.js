/* eslint-disable prettier/prettier */
import {Button, View, VStack, Box, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Colors} from '../ColorPalete/styles';

export default function OnboardingButtons({navigation}) {
  return (
    <Box w="80%">
      {/* <Button
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
      </Button> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={{marginBottom: 10}}>
        <Text
          color="#000"
          bg={Colors.mainColor}
          textAlign="center"
          fontSize={'16'}
          py="1.5"
          fontWeight={'600'}
          borderRadius={'6'}>
          Get Started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text
          color={Colors.mainColor}
          textAlign="center"
          fontSize={'16'}
          py="1.5"
          fontWeight={'bold'}
          borderRadius={'8'}>
          I already have an account
        </Text>
      </TouchableOpacity>
    </Box>
  );
}
