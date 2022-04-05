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

export default function Help() {
  return (
    <Center w="100%" flex={1} justifyContent={'center'}>
      <Center safeArea p="2" w="100%" py="8" px="8">
        <VStack alignItems={'center'}>
          <Image
            source={require('../assets/images/help-center-customer-carem.png')}
            alt="help"
          />
          {/* <Heading py={'5'}>Quizo Customer Care</Heading> */}
          <Text my={5}>How can we help you?</Text>
          <TextArea
            placeholder="Leave your message and we will contact you ASAP"
            placeholderTextColor={'#777'}
            h={20}
            maxW="300"
          />

          <Button my={3}>Submit</Button>
        </VStack>
      </Center>
    </Center>
  );
}
