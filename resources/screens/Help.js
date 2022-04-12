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
  HStack,
  IconButton,
  Box,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StaggerComp from './Stagger';

import {ImageBackground, Linking} from 'react-native';
import {Colors} from '../ColorPalete/styles';

export default function Help({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      resizeMode="cover"
      // blurRadius={2}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Center w="100%" flex={1} justifyContent={'center'}>
        <Center safeArea p="2" w="100%" py="8" px="8">
          <VStack alignItems={'center'}>
            <Image
              w="150"
              h="150"
              resizeMode="contain"
              source={require('../assets/images/contact-removebg-preview.png')}
              alt="help"
            />
            <Heading mb={5} style={{color: Colors.mainColor + 'c0'}}>
              How can we help you?
            </Heading>
            <Center alignItems="center">
              {/* hr  */}
              <View
                h="1"
                bg="#6FFDBA80"
                w="100%"
                position={'absolute'}
                bottom="50%"
                borderRadius={'xl'}
              />
              <Text color={'#fff'} my="8" bg="#000000bf" p="2" fontSize={'16'}>
                Leave us a message at
              </Text>
            </Center>
            <HStack mt="5">
              <IconButton
                mb="4"
                variant="solid"
                bg="#6FFDBA40"
                colorScheme="#99BAFF50"
                // borderRadius="full"
                w="45"
                alignItems="center"
                mx="2"
                onPress={() => {
                  Linking.openURL('mailto:salwaa.soliman96@gmail.com');
                }}
                icon={<Icon size={30} name="email" style={{color: '#fff'}} />}
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="#6FFDBA40"
                colorScheme="#99BAFF50"
                w="45"
                alignItems="center"
                mx="2"
                // borderRadius="full"
                onPress={() =>
                  Linking.openURL('https://wa.me/01069908891?text=Hi')
                }
                icon={
                  <Icon size={30} name="whatsapp" style={{color: '#fff'}} />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="#6FFDBA40"
                colorScheme="#99BAFF50"
                // borderRadius="full"
                w="45"
                alignItems="center"
                mx="2"
                onPress={() => {
                  Linking.openURL(
                    'https://www.linkedin.com/in/salwa-a-soliman/',
                  );
                }}
                icon={
                  <Icon size={30} name="linkedin" style={{color: '#fff'}} />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="#6FFDBA40"
                colorScheme="#99BAFF50"
                w="45"
                alignItems="center"
                mx="2"
                // borderRadius="full"
                onPress={() =>
                  Linking.openURL(
                    'https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/profile.php?id=100002445351612',
                  )
                }
                icon={
                  <Icon
                    size={30}
                    name="facebook-messenger"
                    style={{color: '#fff'}}
                  />
                }
              />
            </HStack>
          </VStack>
        </Center>
        <StaggerComp navigation={navigation} />
      </Center>
    </ImageBackground>
  );
}
