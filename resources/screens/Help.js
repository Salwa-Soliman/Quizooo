/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Heading,
  View,
  Text,
  Center,
  ScrollView,
  VStack,
  Image,
  TextArea,
  Button,
} from 'native-base';
import StaggerComp from './Stagger';

import {ImageBackground} from 'react-native';
import {Colors} from '../ColorPalete/styles';

export default function Help({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/images/0150afa24b80b0a16a78fdf31b357701.jpg')}
      resizeMode="cover"
      // blurRadius={2}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Center w="100%" flex={1} justifyContent={'center'}>
        <Center safeArea p="2" w="100%" py="8" px="8">
          <VStack alignItems={'center'}>
            <Image
              source={require('../assets/images/help-center-customer-carem.png')}
              alt="help"
            />
            {/* <Heading py={'5'}>Quizo Customer Care</Heading> */}
            <Text my={5} style={{color: 'white'}}>
              How can we help you?
            </Text>
            <TextArea
              placeholder="Leave your message and we will contact you ASAP"
              placeholderTextColor={'#777'}
              h={20}
              maxW="300"
            />

            <Button bg={Colors.main200 + 'af'} my={3}>
              Submit
            </Button>
          </VStack>
        </Center>
        <StaggerComp navigation={navigation} />
      </Center>
    </ImageBackground>
  );
}
